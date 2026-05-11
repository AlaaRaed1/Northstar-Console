import { PrismaClient } from "@prisma/client";
import { AssetStatus, RequestStatus, WorkspaceRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL ?? "admin@northstar.local";
  const password = process.env.SEED_ADMIN_PASSWORD ?? "changeme123";
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      name: "Alaa Admin",
      passwordHash,
    },
    create: {
      email,
      name: "Alaa Admin",
      passwordHash,
    },
  });

  const workspace = await prisma.workspace.upsert({
    where: { slug: "northstar-hq" },
    update: {},
    create: {
      name: "Northstar HQ",
      slug: "northstar-hq",
    },
  });

  await prisma.membership.upsert({
    where: {
      userId_workspaceId: {
        userId: user.id,
        workspaceId: workspace.id,
      },
    },
    update: {
      role: WorkspaceRole.OWNER,
    },
    create: {
      userId: user.id,
      workspaceId: workspace.id,
      role: WorkspaceRole.OWNER,
    },
  });

  await prisma.request.createMany({
    data: [
      {
        title: "Approve Q2 equipment refresh",
        description: "Procurement is waiting on budget sign-off for the laptop refresh batch.",
        status: RequestStatus.IN_REVIEW,
        priority: 3,
        workspaceId: workspace.id,
        createdById: user.id,
      },
      {
        title: "Review warehouse transfer exception",
        description: "Two SKUs were short-shipped during the Amman to Dubai transfer.",
        status: RequestStatus.SUBMITTED,
        priority: 2,
        workspaceId: workspace.id,
        createdById: user.id,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.asset.createMany({
    data: [
      {
        name: "MacBook Pro 16",
        code: "HW-MBP16-001",
        category: "Hardware",
        status: AssetStatus.ACTIVE,
        quantity: 18,
        workspaceId: workspace.id,
        createdById: user.id,
      },
      {
        name: "Standing Desk",
        code: "OFF-DESK-014",
        category: "Office",
        status: AssetStatus.LOW_STOCK,
        quantity: 4,
        workspaceId: workspace.id,
        createdById: user.id,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.auditLog.createMany({
    data: [
      {
        workspaceId: workspace.id,
        actorId: user.id,
        entityType: "request",
        entityId: "seed-request-1",
        action: "request.submitted",
        summary: "Submitted Q2 equipment refresh request.",
      },
      {
        workspaceId: workspace.id,
        actorId: user.id,
        entityType: "asset",
        entityId: "seed-asset-1",
        action: "asset.updated",
        summary: "Adjusted stock count for MacBook Pro 16.",
      },
    ],
  });

  console.log(`Seeded workspace ${workspace.name}`);
  console.log(`Admin email: ${email}`);
  console.log(`Admin password: ${password}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
