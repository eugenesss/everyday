import React from "react";
import MUIDataTable from "mui-datatables";

import { listOptions } from "Helpers/helpers";

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
