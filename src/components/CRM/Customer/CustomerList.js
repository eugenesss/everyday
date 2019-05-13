import React from "react";
import { NavLink } from "react-router-dom";

import DataList from "Components/Everyday/DataList";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const CustomerList = ({ tableData, loading, title, action }) => {
  const columns = [
    {
      name: "ID",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      name: "AccountID",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      name: "Name",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`customers/${tableMeta.rowData[0]}`}>{value}</NavLink>
          );
        }
      }
    },
    {
      name: "Account",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            value != null && (
              <NavLink to={`accounts/${tableMeta.rowData[1]}`}>{value}</NavLink>
            )
          );
        }
      }
    },
    { label: "Email" },
    { name: "Mobile" },
    { name: "Customer Owner" },
    { name: "Office", options: { display: false } },
    { name: "Fax", options: { display: false } }
  ];
  if (action == true) {
    columns.push({
      name: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: value => {
          return (
            <Tooltip id="tooltip-icon" title="Edit">
              <IconButton
                className="text-primary mr-2"
                aria-label="Edit Customer"
                onClick={() => {
                  this.toggleEditModal(value);
                }}
              >
                <i className="zmdi zmdi-edit" />
              </IconButton>
            </Tooltip>
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

export default CustomerList;
