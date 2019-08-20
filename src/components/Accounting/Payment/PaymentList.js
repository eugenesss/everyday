import React from "react";
import { NavLink } from "react-router-dom";

import RecordsList from "Components/Everyday/RecordsList";
import { listOptions } from "Helpers/helpers";

//Page req
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import BgCard from "Components/Everyday/BgCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import Moment from "moment";

const PaymentList = ({ tableData, loading, title, action }) => {
  const columns = [
    {
      label: "Company",
      name: "companyName",
      options: { 
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`payments/${value.id}`}>{value.companyName}</NavLink>
          );
        }
      },
    },
    // {
    //   label: "Invoice #",
    //   name: "quoteID",
    //   options: {
    //     customBodyRender: (value, tableMeta) => {
    //       return (
    //         <NavLink to={`invoices/${tableMeta.rowData[0]}`}>{value}</NavLink>
    //       );
    //     }
    //   }
    // },
    
    // {
    //   label: "Total Invoices",
    //   name: "totalInvoices",
    //   options: {
    //     customBodyRender: value => {
    //       return value
    //     }
    //   }
    // },
    // {
    //   label: "Total Debit",
    //   name: "invoiceTotalAmt",
    //   options: {
    //     customBodyRender: (value, tableMeta) => {
    //       return `$${value.toLocaleString()}`

    //     }
    //   }
    // },
    // {
    //   label: "Total Paid",
    //   name: "invoiceTotalAmtPaid",
    //   options: {
    //     customBodyRender: value => {
    //       return `$${value.toLocaleString()}`
    //     }
    //   }
    // },
    // {
    //   label: "Remaining Amount ",
    //   name: "duePayment",
    //   options: {
    //     customBodyRender: value => {
    //       return `$${value.toLocaleString()}`
    //     }
    //   }
    // },
    
    


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

  listOptions.customToolbarSelect = (
    selectedRows,
    displayData,
    setSelectRows
  ) =>
    // delete multiple function
    null;

  return (
    <BgCard fullBlock>
      <RecordsList
        title={title}
        columns={columns}
        data={tableData}
        options={listOptions}
      />
      {loading && <RctSectionLoader />}
    </BgCard>
  );
};

export default PaymentList;
