import React from "react";
import MUIDataTable from "mui-datatables";
import { listOptions } from "Helpers/helpers";

listOptions.customToolbarSelect = (selectedRows, displayData, setSelectRows) =>
  null;

const DataList = ({ title, columns, tableData }) => {
  return (
    <MUIDataTable
      title={title}
      columns={columns}
      data={tableData}
      options={listOptions}
    />
  );
};

export default DataList;
