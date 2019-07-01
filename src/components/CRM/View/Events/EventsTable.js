import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import MUIDataTable from "mui-datatables";

const EventsTable = ({ tableData, action }) => {
  const columns = [
    {
      name: "id",
      options: {
        display: "excluded"
      }
    },
    { label: "Subject", name: "name" },
    { label: "Activity Type", name: "amount" },
    { label: "Status", name: "stage" },
    { label: "Due Date", name: "stage" },
    { label: "From", name: "closingDate" },
    { label: "To", name: "account" },
    { label: "Activity Owner", name: "account" },
    { label: "Last Modified On", name: "account" }
  ];

  const options = {
    filterType: "dropdown",
    responsive: "stacked",
    download: false,
    print: false,
    search: false,
    filter: false,
    viewColumns: false,
    title: false,
    elevation: 0,
    selectableRows: true,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 30, 60, 100],
    textLabels: { body: { noMatch: "No Events" } }
  };

  if (action == true) {
    columns.push({
      name: "id",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: value => {
          return (
            <React.Fragment>
              <Tooltip id="tooltip-icon" title="Edit">
                <IconButton className="text-primary mr-2">
                  <i className="zmdi zmdi-edit" />
                </IconButton>
              </Tooltip>
            </React.Fragment>
          );
        }
      }
    });
  }

  return <MUIDataTable columns={columns} data={tableData} options={options} />;
};

export default EventsTable;