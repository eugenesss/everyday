import React from "react";
import { NavLink } from "react-router-dom";

import DataList from "Components/Everyday/DataList";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

const AccountList = ({ tableData, loading, title, action }) => {
  const columns = [
    {
      name: "ID",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      name: "Account Name",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`accounts/${tableMeta.rowData[0]}`}>{value}</NavLink>
          );
        }
      }
    },
    { name: "Industry" },
    { name: "Website" },
    { name: "Office" },
    { name: "Account Owner" },
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
                aria-label="Edit Account"
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

export default AccountList;
