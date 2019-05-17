import React from "react";
import { Link } from "react-router-dom";

//Page req
import DataList from "Components/Everyday/DataList";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import { Button } from "reactstrap";

const QuotationList = ({ tableData, loading, title, action, handleOpen }) => {
  const columns = [
    {
      label: "ID",
      name: "id",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <Button
              className="fs-13 p-0"
              onClick={handleOpen(tableMeta.rowData[0])}
              color="link"
            >
              {value}
            </Button>
          );
        }
      }
    },
    { label: "Related", name: "account" },
    { label: "Amount", name: "amount" },
    { label: "Date Sent", name: "dateSent" },
    { label: "Due Date", name: "dueDate" },
    { label: "Status", name: "status" }
  ];

  if (action == true) {
    columns.push({
      name: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: value => {
          return (
            <React.Fragment>
              <Tooltip id="tooltip-icon" title="Edit">
                <IconButton
                  className="text-primary mr-2"
                  aria-label="Edit Lead"
                  onClick={() => {
                    this.toggleEditModal(value);
                  }}
                >
                  <i className="zmdi zmdi-edit" />
                </IconButton>
              </Tooltip>
            </React.Fragment>
          );
        }
      }
    });
  }

  const options = {
    filterType: "dropdown",
    responsive: "stacked",
    download: false,
    print: false,
    textLabels: { body: { noMatch: "No Quotations to display" } }
  };
  return (
    <RctCollapsibleCard fullBlock>
      <DataList title={title} columns={columns} tableData={tableData} />
      {loading && <RctSectionLoader />}
    </RctCollapsibleCard>
  );
};

export default QuotationList;
