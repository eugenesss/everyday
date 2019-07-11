import React from "react";
import { NavLink } from "react-router-dom";

//Page req
// import IconButton from "@material-ui/core/IconButton";
// import Tooltip from "@material-ui/core/Tooltip";
import MUIDataTable from "mui-datatables";
import { listOptions } from "Helpers/helpers";
import { singleLead } from "Helpers/url/crm";
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
            <NavLink to={singleLead(tableMeta.rowData[0])}>{value}</NavLink>
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
      name: "statusInfo",
      options: {
        customBodyRender: value => {
          return value ? value.name : "";
        }
      }
    },
    {
      label: "Source",
      name: "sourceInfo",
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
    {
      label: "Owner",
      name: "userInfo",
      options: {
        display: false,
        customBodyRender: value => {
          return value ? value.name : "";
        }
      }
    },
    {
      label: "Industry",
      name: "industryInfo",
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
  // if (action == true) {
  //   columns.push({
  //     name: "Actions",
  //     options: {
  //       filter: false,
  //       sort: false,
  //       customBodyRender: value => {
  //         return (
  //           <Tooltip id="tooltip-icon" title="Edit">
  //             <IconButton
  //               className="text-primary mr-2"
  //               aria-label="Edit Lead"
  //               onClick={() => {
  //                 console.log("edit");
  //               }}
  //             >
  //               <i className="zmdi zmdi-edit" />
  //             </IconButton>
  //           </Tooltip>
  //         );
  //       }
  //     }
  //   });
  // }

  // listOptions.onRowClick = rowData => onRowClick(rowData[0]);
  listOptions.customToolbarSelect = (
    selectedRows,
    displayData,
    setSelectRows
  ) =>
    // delete multiple function
    null;
  return (
    <RctCollapsibleCard fullBlock>
      <MUIDataTable
        title={title}
        columns={columns}
        data={tableData}
        options={listOptions}
      />
      {loading && <RctSectionLoader />}
    </RctCollapsibleCard>
  );
};

export default LeadList;
