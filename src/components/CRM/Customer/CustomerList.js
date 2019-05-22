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
      name: "id",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`customers/${tableMeta.rowData[0]}`}>{value}</NavLink>
          );
        }
      }
    },
    {
      label: "Account",
      name: "account",
      options: {
        customBodyRender: value => {
          return (
            value != null && (
              <NavLink to={`accounts/${value.id}`}>{value.name}</NavLink>
            )
          );
        }
      }
    },
    { label: "Email", name: "email" },
    { label: "Mobile", name: "mobile" },
    {
      label: "Owner",
      name: "owner",
      options: {
        customBodyRender: value => {
          return value.name;
        }
      }
    },
    { label: "Office", name: "office", options: { display: false } },
    { label: "Fax", name: "fax", options: { display: false } }
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
