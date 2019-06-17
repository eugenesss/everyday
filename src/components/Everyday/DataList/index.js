import React from "react";
import MUIDataTable from "mui-datatables";
// import CustomToolbarSelect from "./CustomToolBarSelect";
import { listOptions } from "Helpers/helpers";

// listOptions.customToolbarSelect = (
//   selectedRows,
//   displayData,
//   setSelectedRows
// ) => (
//   <CustomToolbarSelect
//     selectedRows={selectedRows}
//     displayData={displayData}
//     setSelectedRows={setSelectedRows}
//   />
// );

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
