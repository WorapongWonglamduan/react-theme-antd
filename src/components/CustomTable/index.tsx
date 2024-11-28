import { Table } from "antd";
import { createStyles } from "antd-style";

const useStyles = createStyles(({ css }) => ({
  table: css`
    .ant-table-row-expand-icon-cell {
      display: none;
      width: 0;
      padding: 0;
    }

    .ant-table-thead > tr > th.ant-table-row-expand-icon-cell {
      display: none;
      width: 0;
      padding: 0;
      border: 0;
    }
  `,
}));

interface Props {
  columns: any[];
  dataSource: any[];
}

const ContentTable = ({ columns, dataSource }: Props) => {
  const dataRecord = [{ name: "test" }, { name: "test" }];
  return (
    <Table
      pagination={false}
      columns={[{ dataIndex: "name" }]}
      dataSource={dataRecord}
    />
  );
};
const CustomTable = ({ columns, dataSource }: Props) => {
  const { styles } = useStyles();

  return (
    <Table
      className={styles.table}
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      expandable={{
        expandedRowRender: (record: any) => (
          <ContentTable columns={[]} dataSource={[]} />
        ),
        expandRowByClick: true,
      }}
    />
  );
};

export default CustomTable;
