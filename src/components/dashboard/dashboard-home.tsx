"use client";

import {
  Alert,
  Button,
  Card,
  Col,
  Progress,
  Row,
  Space,
  Statistic,
  Table,
  Tag,
  Timeline,
  Typography,
} from "antd";
import type { ColumnsType } from "antd/es/table";

import { AppShell } from "@/components/layout/app-shell";

type RequestRow = {
  key: string;
  title: string;
  owner: string;
  status: "In review" | "Submitted" | "Approved";
  sla: string;
};

const requestColumns: ColumnsType<RequestRow> = [
  {
    title: "Request",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (value: RequestRow["status"]) => {
      const color = value === "Approved" ? "green" : value === "In review" ? "gold" : "blue";
      return <Tag color={color}>{value}</Tag>;
    },
  },
  {
    title: "SLA",
    dataIndex: "sla",
    key: "sla",
  },
];

const requestRows: RequestRow[] = [
  {
    key: "1",
    title: "Approve Q2 equipment refresh",
    owner: "Procurement",
    status: "In review",
    sla: "2h left",
  },
  {
    key: "2",
    title: "Backfill missing transfer manifest",
    owner: "Logistics",
    status: "Submitted",
    sla: "6h left",
  },
  {
    key: "3",
    title: "Vendor onboarding security check",
    owner: "IT Ops",
    status: "Approved",
    sla: "Closed",
  },
];

const activities = [
  "Warehouse transfer exception escalated to Ops leadership.",
  "Finance approved the Q2 laptop refresh threshold.",
  "Asset availability sync completed for 3 fulfillment hubs.",
];

export function DashboardHome() {
  return (
    <AppShell>
      <Space orientation="vertical" size={24} className="dashboard-stack">
        <section className="hero-panel">
          <div className="hero-panel__copy">
            <Tag color="green">Live operations</Tag>
            <Typography.Title level={1} className="hero-panel__title">
              Keep approvals, inventory, and team actions moving from one command center.
            </Typography.Title>
            <Typography.Paragraph className="hero-panel__description">
              Northstar Console is structured for real operating work: faster triage, cleaner data
              tables, role-aware workflows, and enough polish to feel production-grade from day one.
            </Typography.Paragraph>
            <Space wrap>
              <Button type="primary" size="large">
                Create request
              </Button>
              <Button size="large">Review assets</Button>
            </Space>
          </div>

          <Card className="hero-panel__aside" variant="borderless">
            <Typography.Text className="section-kicker">Operational health</Typography.Text>
            <div className="hero-panel__metric">
              <span>Approval throughput</span>
              <strong>84%</strong>
            </div>
            <Progress percent={84} strokeColor="#2563eb" showInfo={false} />
            <div className="hero-panel__metric">
              <span>Stock accuracy</span>
              <strong>97.2%</strong>
            </div>
            <Progress percent={97.2} strokeColor="#38bdf8" showInfo={false} />
          </Card>
        </section>

        <Row gutter={[20, 20]}>
          <Col xs={24} md={12} xl={6}>
            <Card variant="borderless">
              <Statistic title="Open requests" value={38} suffix="/ 52" />
            </Card>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <Card variant="borderless">
              <Statistic title="Approvals today" value={14} />
            </Card>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <Card variant="borderless">
              <Statistic title="Assets below threshold" value={7} />
            </Card>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <Card variant="borderless">
              <Statistic title="Audit events" value={126} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[20, 20]}>
          <Col xs={24} xl={16}>
            <Card
              variant="borderless"
              title="Requests inbox"
              extra={
                <Space>
                  <Button type="link">Saved views</Button>
                  <Button type="primary">New request</Button>
                </Space>
              }
            >
              <Table<RequestRow>
                columns={requestColumns}
                dataSource={requestRows}
                pagination={false}
                rowClassName={() => "request-table__row"}
              />
            </Card>
          </Col>

          <Col xs={24} xl={8}>
            <Space orientation="vertical" size={20} className="dashboard-stack">
              <Card variant="borderless" title="Attention needed">
                <Alert
                  type="warning"
                  showIcon
                  title="7 assets fell below the reorder threshold in the last sync."
                  description="The Assets module is ready for threshold rules and batch restock actions next."
                />
              </Card>

              <Card variant="borderless" title="Recent activity">
                <Timeline
                  items={activities.map((item) => ({
                    content: item,
                  }))}
                />
              </Card>
            </Space>
          </Col>
        </Row>

        <Row gutter={[20, 20]}>
          <Col xs={24} xl={10}>
            <Card variant="borderless" title="Today">
              <div className="info-list">
                {[
                  "4 requests waiting on finance review",
                  "2 transfer mismatches flagged by warehouse sync",
                  "1 access change pending admin approval",
                ].map((item) => (
                  <div key={item} className="info-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </Col>

          <Col xs={24} xl={14}>
            <Card variant="borderless" title="Build notes">
              <div className="info-list">
                {[
                  "App shell, theme tokens, and table density are live.",
                  "Prisma schema includes workspaces, memberships, requests, assets, and audit logs.",
                  "Simple credentials auth is scaffolded for the next backend step.",
                ].map((item) => (
                  <div key={item} className="info-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </Space>
    </AppShell>
  );
}
