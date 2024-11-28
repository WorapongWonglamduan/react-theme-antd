import React, { useState } from "react";
import {
  Button,
  ConfigProvider,
  Input,
  Space,
  Switch,
  theme,
  Layout,
  TableColumnsType,
  Flex,
  Typography,
} from "antd";
import "@fontsource/prompt";
import CustomTable from "@components/CustomTable";
import { FaHandshake, FaMoneyCheckAlt, FaTools } from "react-icons/fa";

interface DataType {
  key: React.Key;
  moduleName: string;
  age: number;
  icon: React.ReactNode;
  address: string;
}

const columnsModule: TableColumnsType<DataType> = [
  {
    title: "ModuleName",
    dataIndex: "moduleName",
    render(value, record, index) {
      return (
        <Flex align="center">
          {record.icon}
          <Typography.Text style={{ fontSize: 16, marginLeft: 20 }}>
            {record.moduleName}
          </Typography.Text>
        </Flex>
      );
    },
  },
];
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park",
//   },
// ];
const HeadNameModule = [
  {
    key: "1",
    moduleName: "Module A",
    age: 32,
    icon: <FaHandshake />,
    address: "New York No. 1 Lake Park",
    name: "Content Creator",
  },
  {
    key: "2",
    moduleName: "Module B",
    age: 42,
    icon: <FaHandshake />,
    address: "London No. 1 Lake Park",
    name: "Content Creator 2",
  },
  {
    key: "3",
    moduleName: "Module C",
    age: 32,
    icon: <FaHandshake />,
    address: "Sydney No. 1 Lake Park",
    name: "Content Creator 3",
  },
  {
    key: "4",
    moduleName: "Module D",
    age: 32,
    icon: <FaHandshake />,
    address: "London No. 2 Lake Park",
    name: "Content Creator 4",
  },
];

// Breakpoints
const breakpoints = {
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

// Color palette
const colors = {
  brown: {
    1: "#D2B9AF",
    2: "#C5A598",
    3: "#BA9484",
    4: "#B08471",
    5: "#A67561",
    6: "#996A56",
    7: "#8B604E",
    8: "#714E3F",
    9: "#654639",
    10: "#5B3F33",
  },
};

// Base theme
const baseTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    fontFamily: "Prompt, sans-serif",
    colorPrimary: colors.brown[6],
    borderRadius: 8,
    colorBgContainer: "rgba(255, 255, 255, 0.8)",
    colorBgElevated: "rgba(255, 255, 255, 0.9)",
    // เิ่ม screen sizes
    screenXS: parseInt(breakpoints.xs),
    screenSM: parseInt(breakpoints.sm),
    screenMD: parseInt(breakpoints.md),
    screenLG: parseInt(breakpoints.lg),
    screenXL: parseInt(breakpoints.xl),
  },
  components: {
    Button: {
      controlHeight: 40,
      borderRadius: 8,
      colorPrimaryBg: `linear-gradient(90deg, ${colors.brown[6]}, ${colors.brown[7]})`,
      colorPrimaryBgHover: `linear-gradient(90deg, ${colors.brown[7]}, ${colors.brown[8]})`,
      colorBgContainer: `linear-gradient(90deg, #ffffff, #f0f0f0)`,
      colorBgContainerHover: `linear-gradient(90deg, #f5f5f5, #e8e8e8)`,
    },
    Input: {
      controlHeight: 40,
      borderRadius: 8,
    },
  },
};

// Dark theme
const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    ...baseTheme.token,
    colorPrimary: colors.brown[7],
    colorBgContainer: "rgba(0, 0, 0, 0.6)",
    colorBgElevated: "rgba(0, 0, 0, 0.8)",
  },
  components: {
    Button: {
      ...baseTheme.components.Button,
      colorPrimaryBg: `linear-gradient(90deg, ${colors.brown[7]}, ${colors.brown[8]})`,
      colorPrimaryBgHover: `linear-gradient(90deg, ${colors.brown[8]}, ${colors.brown[9]})`,
      colorBgContainer: `linear-gradient(90deg, #4a4a4a, #3d3d3d)`,
      colorBgContainerHover: `linear-gradient(90deg, #5a5a5a, #4d4d4d)`,
    },
    Input: {
      ...baseTheme.components.Input,
    },
  },
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    padding: 24,
    background: isDark
      ? "linear-gradient(135deg, #2c3e50, #3f4c6b)"
      : "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
  };

  const glassCardStyle: React.CSSProperties = {
    padding: 24,
    borderRadius: 16,
    backgroundColor: isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  };

  return (
    <ConfigProvider theme={isDark ? darkTheme : baseTheme}>
      <Layout style={containerStyle}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Space style={{ width: "100%" }}>
            <span style={{ color: isDark ? "white" : "black" }}>
              Theme Mode:
            </span>
            <Switch
              checked={isDark}
              onChange={setIsDark}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
            />
          </Space>

          <div style={glassCardStyle}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              {/* Buttons */}
              <Space wrap style={{ width: "100%" }}>
                <Button type="primary" block>
                  Primary Button
                </Button>
                <Button block>Default Button</Button>
                <Button type="dashed" block>
                  Dashed Button
                </Button>
                <Button type="link" block>
                  Link Button
                </Button>
              </Space>

              {/* Inputs */}
              <Space direction="vertical" style={{ width: "100%" }}>
                <Input placeholder="Default Input" />
                <Input.Password placeholder="Password Input" />
                <Input.Search placeholder="Search Input" />
              </Space>
            </Space>
          </div>
        </Space>

        <CustomTable columns={columnsModule} dataSource={HeadNameModule} />
      </Layout>
    </ConfigProvider>
  );
};

export default App;
