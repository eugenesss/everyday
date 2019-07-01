import React from "react";
import { NavLink } from "react-router-dom";

//Page req
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

const InvoiceList = ({ tableData, loading, title, action }) => {
  const columns = [
    {
      name: "id",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      label: "Invoice #",
      name: "invoiceID",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`invoices/${tableMeta.rowData[0]}`}>{value}</NavLink>
          );
        }
      }
    },
    { label: "Amount", name: "totalAmt" },
    {
      label: "Related",
      name: "account",
      options: {
        customBodyRender: value => {
          return value ? value.name : "";
        }
      }
    },
    { label: "Sent Date", name: "sentOn" },
    { label: "Expiry Date", name: "expireOn" },
    {
      label: "Status",
      name: "status",
      options: {
        customBodyRender: value => {
          return value.name;
        }
      }
    }
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
      {/* <DataList title={title} columns={columns} tableData={tableData} /> */}
      {loading && <RctSectionLoader />}
    </RctCollapsibleCard>
  );
};

export default InvoiceList;
