import React from "react";
import { NavLink } from "react-router-dom";

//Component Req
import DataList from "Components/Everyday/DataList";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import NumberFormat from "react-number-format";
import Moment from "moment";

const DealList = ({ tableData, loading, title, action }) => {
  const columns = [
    {
      name: "DealID",
      options: {
        display: "excluded",
        filter: false,
        sort: false,
        download: false
      }
    },
    {
      name: "AccountID",
      options: {
        display: "excluded",
        filter: false,
        sort: false,
        download: false
      }
    },
    {
      name: "CustomerID",
      options: {
        display: "excluded",
        filter: false,
        sort: false,
        download: false
      }
    },
    {
      name: "Deal Name",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`deals/${tableMeta.rowData[0]}`}>{value}</NavLink>
          );
        }
      }
    },
    {
      name: "Amount",
      options: {
        customBodyRender: value => {
          return (
            <NumberFormat
              value={value}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          );
        }
      }
    },
    {
      name: "Stage"
    },
    {
      name: "Chance",
      options: { display: false }
    },
    {
      name: "Closing Date",
      options: {
        customBodyRender: value => {
          return Moment(value).format("D MMMM YYYY");
        }
      }
    },
    {
      name: "Account",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`accounts/${tableMeta.rowData[1]}`}>{value}</NavLink>
          );
        }
      }
    },
    {
      name: "Customer",
      options: {
        customBodyRender: (value, tableMeta) => {
          return value ? (
            <NavLink to={`customers/${tableMeta.rowData[2]}`}>{value}</NavLink>
          ) : (
            ""
          );
        }
      }
    },
    { name: "Deal Owner" },
    { name: "Source", options: { display: false } },
    { name: "Type", options: { display: false } }
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

export default DealList;
