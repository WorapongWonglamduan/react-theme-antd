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

const CustomTable = ({ columns, dataSource }: Props) => {
  const { styles } = useStyles();

  return (
    <Table
      className={styles.table}
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      expandable={{
        expandedRowRender: (record: any) => record.name,
        expandRowByClick: true,
      }}
    />
  );
};

export default CustomTable;
