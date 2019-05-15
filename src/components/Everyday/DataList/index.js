import React from "react";
import MUIDataTable from "mui-datatables";

const listOptions = {
  filterType: "dropdown",
  responsive: "stacked",
  download: false,
  print: false,
  rowsPerPage: 15,
  rowsPerPageOptions: [15, 30, 60, 100],
  textLabels: { body: { noMatch: "No data to display" } }
};

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
