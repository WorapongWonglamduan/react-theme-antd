import { Table } from 'antd';
import styled, { WebTarget } from 'styled-components';
const StyledTable = styled(Table)`
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
`;
interface Props {
    columns: any[];
    dataSource: any[];
}

const CustomTable = ({ columns, dataSource }: Props) => {
    return <StyledTable<WebTarget>
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        expandable={{
            expandedRowRender: (record: any) => record.name,
            expandRowByClick: true,
            expandIcon: () => <></>,
        }}
    />
}

export default CustomTable;