"use client";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Alert, Button, Card, Form, Input, Space, Typography } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

type SignInFields = {
  email: string;
  password: string;
};

type SignInFormProps = {
  callbackUrl: string;
};

export function SignInForm({ callbackUrl }: SignInFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (values: SignInFields) => {
    setErrorMessage(null);

    startTransition(async () => {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl,
      });

      if (!result || result.error) {
        setErrorMessage("The credentials were not accepted. Check the seed values and try again.");
        return;
      }

      router.push(result.url ?? callbackUrl);
      router.refresh();
    });
  };

  return (
    <Card className="sign-in-card" bordered={false}>
      <Space direction="vertical" size={20} className="sign-in-card__stack">
        <div>
          <Typography.Text className="section-kicker">Credentials sign-in</Typography.Text>
          <Typography.Title level={2} className="sign-in-card__title">
            Access Northstar Console
          </Typography.Title>
          <Typography.Paragraph className="sign-in-card__description">
            Seed a local admin account with Prisma, then use those credentials here while we keep
            the auth flow intentionally simple.
          </Typography.Paragraph>
        </div>

        {errorMessage ? <Alert type="error" message={errorMessage} showIcon /> : null}

        <Form<SignInFields> layout="vertical" onFinish={handleSubmit} size="large">
          <Form.Item
            label="Email"
            name="email"
            initialValue="admin@northstar.local"
            rules={[{ required: true, message: "Email is required." }]}
          >
            <Input prefix={<MailOutlined />} placeholder="admin@northstar.local" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            initialValue="changeme123"
            rules={[{ required: true, message: "Password is required." }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block loading={isPending}>
            Sign in
          </Button>
        </Form>
      </Space>
    </Card>
  );
}
