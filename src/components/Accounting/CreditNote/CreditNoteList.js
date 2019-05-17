import React from "react";
//Page req
import DataList from "Components/Everyday/DataList";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import { Button } from "reactstrap";

const CreditNoteList = ({ tableData, loading, title, action, handleOpen }) => {
  const columns = [
    {
      name: "ID",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      name: "Credit Note #",
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
    { label: "Date Sent", name: "Date Sent" },
    { label: "Customer", name: "Customer" },
    { label: "Status", name: "Status" },
    { label: "Amount", name: "Amount" },
    { label: "Remaining Amount", name: "Remaining Amount" }
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

  return (
    <RctCollapsibleCard fullBlock>
      <DataList title={title} columns={columns} tableData={tableData} />
      {loading && <RctSectionLoader />}
    </RctCollapsibleCard>
  );
};

export default CreditNoteList;
