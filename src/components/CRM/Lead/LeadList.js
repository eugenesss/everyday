import React from "react";
import { NavLink } from "react-router-dom";

//Page req
// import IconButton from "@material-ui/core/IconButton";
// import Tooltip from "@material-ui/core/Tooltip";
import RecordsList from "Components/Everyday/RecordsList";
import { listOptions } from "Helpers/helpers";
import { singleLead } from "Helpers/url/crm";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import StatusBadge from "Components/Everyday/StatusBadge/StatusBadge";

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
      label: "Mobile",
      name: "baseContact",
      options: {
        customBodyRender: value => {
          return value.mobile ? value.mobile : "";
        }
      }
    },
    {
      label: "Status",
      name: "statusInfo",
      options: {
        customBodyRender: value =>
          value ? (
            <StatusBadge
              name={value.name}
              color={value.color}
              value={value.name}
            />
          ) : (
            ""
          )
      }
    },
    {
      label: "Source",
      name: "sourceInfo",
      options: {
        customBodyRender: value => (value ? value.name : " ")
      }
    },
    {
      label: "Interest",
      name: "interest",
      options: {
        sort: false,
        customBodyRender: value => <LeadInterestLevel interest={value} />
      }
    },

    {
      label: "Owner",
      name: "userInfo",
      options: {
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
          return value ? value : "";
        }
      }
    },
    {
      label: "Website",
      name: "baseContact",
      options: {
        display: false,
        customBodyRender: value => {
          return value.website ? value.website : "";
        }
      }
    },
    {
      label: "Office",
      name: "baseContact",
      options: {
        display: false,
        customBodyRender: value => {
          return value.office ? value.phone : "";
        }
      }
    },
    {
      label: "Fax",
      name: "baseContact",
      options: {
        display: false,
        customBodyRender: value => {
          return value.fax ? value.fax : "";
        }
      }
    }
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
    <div className="rct-block">
      <RecordsList
        title={title}
        columns={columns}
        data={tableData}
        options={listOptions}
      />
      {loading && <RctSectionLoader />}
    </div>
  );
};

export default LeadList;
