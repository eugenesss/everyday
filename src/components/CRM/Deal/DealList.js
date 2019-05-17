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
      name: "id",
      options: {
        display: "excluded",
        filter: false,
        sort: false,
        download: false
      }
    },
    {
      label: "Deal Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`deals/${tableMeta.rowData[0]}`}>{value}</NavLink>
          );
        }
      }
    },
    {
      label: "Amount",
      name: "amount",
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
      label: "Stage",
      name: "stage",
      options: {
        customBodyRender: value => {
          return value.name;
        }
      }
    },
    {
      label: "Chance",
      name: "stage",
      options: {
        filter: false,
        display: false,
        customBodyRender: value => {
          return value.chance;
        }
      }
    },
    {
      label: "Closing Date",
      name: "closingDate",
      options: {
        customBodyRender: value => {
          return Moment(value).format("D MMMM YYYY");
        }
      }
    },
    {
      label: "Account",
      name: "account",
      options: {
        customBodyRender: value => {
          return <NavLink to={`accounts/${value.id}`}>{value.name}</NavLink>;
        }
      }
    },
    {
      label: "Customer",
      name: "customer",
      options: {
        customBodyRender: value => {
          return value ? (
            <NavLink to={`customers/${value.id}`}>{value.name}</NavLink>
          ) : (
            ""
          );
        }
      }
    },
    {
      label: "Deal Owner",
      name: "owner",
      options: {
        customBodyRender: value => {
          return value.fullName;
        }
      }
    },
    {
      label: "Source",
      name: "source",
      options: {
        display: false,
        customBodyRender: value => {
          return value.name;
        }
      }
    },
    {
      label: "Type",
      name: "type",
      options: {
        display: false,
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
      <DataList title={title} columns={columns} tableData={tableData} />
      {loading && <RctSectionLoader />}
    </RctCollapsibleCard>
  );
};

export default DealList;
