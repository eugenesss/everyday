import React from "react";
import { NavLink } from "react-router-dom";

//Page req
import DataList from "Components/Everyday/DataList";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

//Sub Components
import LeadInterestLevel from "./LeadInterestLevel";

const LeadList = ({ tableData, loading, title, action }) => {
  const columns = [
    {
      name: "ID",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      name: "Name",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`leads/${tableMeta.rowData[0]}`}>{value}</NavLink>
          );
        }
      }
    },
    "Company",
    "Email",
    {
      name: "Status"
    },
    {
      name: "Source"
    },
    {
      name: "Interest Level",
      options: {
        customBodyRender: value => {
          return <LeadInterestLevel interest={value} />;
        }
      }
    },
    { name: "Mobile", options: { display: false } },
    { name: "Lead Owner", options: { display: false } },
    { name: "Industry", options: { display: false } },
    { name: "Website", options: { display: false } },
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
              <Tooltip id="tooltip-icon" title="Convert">
                <IconButton
                  className="text-success mr-2"
                  aria-label="Convert Lead"
                  onClick={() => {
                    this.toggleConvertModal(value);
                  }}
                >
                  <i className="zmdi zmdi-check-all" />
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

export default LeadList;
