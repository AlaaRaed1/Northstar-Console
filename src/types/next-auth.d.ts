import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      role?: string;
      workspaceId?: string;
      workspaceName?: string;
    };
  }

  interface User {
    role?: string;
    workspaceId?: string;
    workspaceName?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    workspaceId?: string;
    workspaceName?: string;
  }
}
