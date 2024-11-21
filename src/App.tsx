import React, { useState } from 'react';
import { Button, ConfigProvider, Input, Space, Switch, theme } from 'antd';
import '@fontsource/prompt';
import styled from 'styled-components';
import type { TableColumnsType } from 'antd';
import CustomTable from '@components/CustomTable';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

// Breakpoints
const breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

// Styled Components with responsive design
const GradientContainer = styled.div<{ $isDark: boolean }>`
  min-height: 100vh;
  padding: 24px;
  background: ${({ $isDark }) =>
    $isDark
      ? 'linear-gradient(135deg, #2c3e50, #3f4c6b)'
      : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)'};

  @media (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }
`;



const ResponsiveSpace = styled(Space)`
  width: 100%;

  // ปรับ layout ตาม breakpoint
  @media (max-width: ${breakpoints.md}) {
    .ant-space-item {
      width: 100%;
    }

    &.ant-space-horizontal {
      flex-direction: column !important;
    }

    .ant-input-search {
      width: 100%;
    }
  }
`;

const GlassCard = styled.div<{ isDark: boolean }>`
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ isDark }) =>
    isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }
`;

// Color palette
const colors = {
  brown: {
    1: '#D2B9AF',
    2: '#C5A598',
    3: '#BA9484',
    4: '#B08471',
    5: '#A67561',
    6: '#996A56',
    7: '#8B604E',
    8: '#714E3F',
    9: '#654639',
    10: '#5B3F33',
  },
};

// Base theme
const baseTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    fontFamily: 'Prompt, sans-serif',
    colorPrimary: colors.brown[6],
    borderRadius: 8,
    colorBgContainer: 'rgba(255, 255, 255, 0.8)',
    colorBgElevated: 'rgba(255, 255, 255, 0.9)',
    // เ���ิ่ม screen sizes
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
    colorBgContainer: 'rgba(0, 0, 0, 0.6)',
    colorBgElevated: 'rgba(0, 0, 0, 0.8)',
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

  return (
    <ConfigProvider theme={isDark ? darkTheme : baseTheme}>
      <GradientContainer $isDark={isDark}>
        <ResponsiveSpace direction="vertical" size="large" style={{ width: '100%' }}>
          <ResponsiveSpace>
            <span style={{ color: isDark ? 'white' : 'black' }}>Theme Mode:</span>
            <Switch
              checked={isDark}
              onChange={setIsDark}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
            />
          </ResponsiveSpace>

          <GlassCard isDark={isDark} >
            <ResponsiveSpace direction="vertical" size="middle" style={{ width: '100%' }}>
              {/* Buttons */}
              <ResponsiveSpace wrap>
                <Button type="primary" block>Primary Button</Button>
                <Button block>Default Button</Button>
                <Button type="dashed" block>Dashed Button</Button>
                <Button type="link" block>Link Button</Button>
              </ResponsiveSpace>

              {/* Inputs */}
              {<ResponsiveSpace direction="vertical" style={{ width: '100%' }}>
                <Input placeholder="Default Input" />
                <Input.Password placeholder="Password Input" />
                <Input.Search placeholder="Search Input" />
              </ResponsiveSpace>}
            </ResponsiveSpace>
          </GlassCard>


        </ResponsiveSpace>
        <CustomTable columns={columns} dataSource={data} />
      </GradientContainer>
    </ConfigProvider>
  );
};

export default App;
