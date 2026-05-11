import { SignInForm } from "@/components/auth/sign-in-form";

type SignInPageProps = {
  searchParams?: Promise<{
    callbackUrl?: string;
  }>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const resolvedSearchParams = await searchParams;
  const callbackUrl = resolvedSearchParams?.callbackUrl ?? "/";

  return (
    <main className="sign-in-page">
      <section className="sign-in-page__hero">
        <span className="section-kicker">Northstar Console</span>
        <h1 className="sign-in-page__title">
          Calm interface. Serious operational muscle.
        </h1>
        <p className="sign-in-page__description">
          This project is being built as a deployable full-stack dashboard with Prisma, credentials
          auth, workspace-aware data, and an Ant Design system tuned for dense, real-world work.
        </p>
        <div className="sign-in-page__badges">
          <span className="sign-in-page__badge">Next.js 16</span>
          <span className="sign-in-page__badge">Ant Design 6</span>
          <span className="sign-in-page__badge">Prisma 7</span>
        </div>
      </section>

      <SignInForm callbackUrl={callbackUrl} />
    </main>
  );
}
