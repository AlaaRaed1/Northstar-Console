import type { ThemeConfig } from "antd";

export const appTheme: ThemeConfig = {
  cssVar: {
    key: "northstar",
  },
  token: {
    colorPrimary: "#2563eb",
    colorInfo: "#2563eb",
    colorSuccess: "#0f766e",
    colorWarning: "#d97706",
    colorError: "#b91c1c",
    colorText: "#10233f",
    colorTextSecondary: "#5d6b82",
    colorBgBase: "#eef4ff",
    colorBgContainer: "rgba(255,255,255,0.82)",
    colorBorderSecondary: "rgba(16,35,63,0.08)",
    borderRadius: 20,
    borderRadiusLG: 28,
    fontFamily:
      "\"Avenir Next\", Avenir, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    fontFamilyCode:
      "\"SFMono-Regular\", \"IBM Plex Mono\", \"Menlo\", \"Consolas\", \"Liberation Mono\", monospace",
    boxShadowSecondary: "0 16px 40px rgba(37,99,235,0.12)",
  },
  components: {
    Layout: {
      headerBg: "transparent",
      siderBg: "rgba(11, 28, 56, 0.94)",
      bodyBg: "transparent",
      triggerBg: "rgba(255,255,255,0.10)",
      triggerColor: "#f7f4ee",
    },
    Menu: {
      darkItemBg: "transparent",
      darkSubMenuItemBg: "transparent",
      darkItemSelectedBg: "rgba(255,255,255,0.12)",
      darkItemHoverBg: "rgba(255,255,255,0.08)",
      darkItemColor: "rgba(247,244,238,0.72)",
      darkItemSelectedColor: "#ffffff",
      itemBorderRadius: 14,
      itemHeight: 44,
    },
    Card: {
      bodyPadding: 22,
    },
    Table: {
      headerBg: "rgba(37,99,235,0.05)",
      headerColor: "#314d77",
      borderColor: "rgba(16,35,63,0.08)",
    },
    Button: {
      borderRadius: 14,
      controlHeight: 42,
    },
    Input: {
      borderRadius: 14,
      controlHeight: 44,
    },
    Select: {
      borderRadius: 14,
      controlHeight: 44,
    },
  },
};
