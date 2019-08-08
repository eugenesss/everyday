import React from "react";
import { NavLink } from "react-router-dom";
//Page req
// import DataList from "Components/Everyday/DataList";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import BgCard from "Components/Everyday/BgCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

const PaymentList = ({ tableData, loading, title, action }) => {
  const columns = [
    {
      name: "id",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      label: "Payment #",
      name: "creditID",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`credit_note/${tableMeta.rowData[0]}`}>
              {value}
            </NavLink>
          );
        }
      }
    },
    { label: "Date Sent", name: "sentOn" },
    {
      label: "Account",
      name: "account",
      options: {
        customBodyRender: value => {
          return value ? value.name : "";
        }
      }
    },
    {
      label: "Status",
      name: "status",
      options: {
        customBodyRender: value => {
          return value.name;
        }
      }
    },
    { label: "Amount", name: "amt" }
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
    <BgCard fullBlock>
      {/* <DataList title={title} columns={columns} tableData={tableData} /> */}
      {loading && <RctSectionLoader />}
    </BgCard>
  );
};

export default PaymentList;
