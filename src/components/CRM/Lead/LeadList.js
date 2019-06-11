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
            <NavLink to={`leads/${tableMeta.rowData[0]}`}>{value}</NavLink>
          );
        }
      }
    },
    { label: "Company", name: "companyName" },
    {
      label: "Email",
      name: "baseContact",
      options: {
        customBodyRender: value => {
          return value.email ? value.email : "";
        }
      }
    },
    {
      label: "Status",
      name: "status",
      options: {
        customBodyRender: value => {
          return value ? value.name : "";
        }
      }
    },
    {
      label: "Source",
      name: "source",
      options: {
        customBodyRender: value => {
          return value ? value.name : "";
        }
      }
    },
    {
      label: "Interest Level",
      name: "interest",
      options: {
        customBodyRender: value => {
          return <LeadInterestLevel interest={value} />;
        }
      }
    },
    {
      label: "Mobile",
      name: "baseContact",
      options: {
        display: false,
        customBodyRender: value => {
          return value.mobile ? value.mobile : "";
        }
      }
    },
    /*  {
      label: "Owner",
      name: "owner",
      options: {
        display: false,
        customBodyRender: value => {
          return value ? value.name : "";
        }
      }
    }, */
    {
      label: "Industry",
      name: "industry",
      options: {
        display: false,
        customBodyRender: value => {
          return value ? value.name : " ";
        }
      }
    },
    { label: "Website", name: "website", options: { display: false } },
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
