"use client";

import {
  BellOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Input, Layout, Menu, Space, Tag, Typography } from "antd";
import { usePathname } from "next/navigation";
import { useState } from "react";

const { Header, Content, Sider } = Layout;

const primaryNav = [
  { key: "/", icon: <DatabaseOutlined />, label: "Overview" },
  { key: "/requests", icon: <FileTextOutlined />, label: "Requests" },
  { key: "/assets", icon: <TeamOutlined />, label: "Assets" },
];

const utilityNav = [
  { key: "/settings", icon: <SettingOutlined />, label: "Settings" },
];

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="app-shell">
      <Sider
        breakpoint="lg"
        collapsedWidth={88}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={null}
        width={292}
        className="app-shell__sider"
      >
        <div className="app-shell__brand">
          <div className="app-shell__brand-mark">N</div>
          {!collapsed ? (
            <div>
              <Typography.Text className="app-shell__brand-title">Northstar Console</Typography.Text>
              <Typography.Text className="app-shell__brand-subtitle">
                Operations command center
              </Typography.Text>
            </div>
          ) : null}
        </div>

        <div className="app-shell__workspace">
          <Typography.Text className="app-shell__workspace-label">Workspace</Typography.Text>
          <div className="app-shell__workspace-card">
            <div>
              <Typography.Text className="app-shell__workspace-name">Northstar HQ</Typography.Text>
              <Typography.Text className="app-shell__workspace-meta">Amman · 24 live users</Typography.Text>
            </div>
            {!collapsed ? <Tag color="green">Healthy</Tag> : null}
          </div>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          items={primaryNav}
          className="app-shell__menu"
        />

        <div className="app-shell__menu-section">
          <Typography.Text className="app-shell__workspace-label">System</Typography.Text>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
            items={utilityNav}
            className="app-shell__menu"
          />
        </div>
      </Sider>

      <Layout className="app-shell__main">
        <Header className="app-shell__header">
          <Space size={14}>
            <Button
              type="text"
              className="app-shell__icon-button"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed((current) => !current)}
            />
            <Input
              className="app-shell__search"
              prefix={<SearchOutlined />}
              placeholder="Search requests, assets, users"
            />
          </Space>

          <Space size={12}>
            <Badge dot>
              <Button type="text" className="app-shell__icon-button" icon={<BellOutlined />} />
            </Badge>
            <div className="app-shell__profile">
              <Avatar size={40}>AA</Avatar>
              <div className="app-shell__profile-copy">
                <Typography.Text className="app-shell__profile-name">Alaa Admin</Typography.Text>
                <Typography.Text className="app-shell__profile-role">Owner</Typography.Text>
              </div>
            </div>
          </Space>
        </Header>

        <Content className="app-shell__content">{children}</Content>
      </Layout>
    </Layout>
  );
}
