
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
import Checkbox from '@material-ui/core/Checkbox';

import AmountInput from "Components/Form/Components/Inputs/AmountInput";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const InvoicePaymentList = ({ tableData, loading, title, action, onCheckList }) => {
  const columns = [
    {
        label: "Invoice",
        name: "invoiceId",
        options: { 
        customBodyRender: (value, tableMeta) => {
            return value
        }
      },
    },
    {
        label: "Date",
        name: "dated",
        options: {
        customBodyRender: (value, tableMeta) => {
            return Moment(new Date(value)).format("LL");

        //   return (
        //     <NavLink to={`invoices/${tableMeta.rowData[0]}`}>{value}</NavLink>
        //   );
        }
      }
    },
    {
        label: "Due Date",
        name: "dueDate",
        options: {
          customBodyRender: (value, tableMeta) => {
            return Moment(new Date(value)).format("LL");

            // return (
            //   <NavLink to={`invoices/${tableMeta.rowData[0]}`}>{value}</NavLink>
            // );
          }
        }
    },
    {
        label: "Original Amount",
        name: "originalAmount",
        options: {
          customBodyRender: (value, tableMeta) => {
            return `$${numberWithCommas(value)}`

            // return (
            //   <NavLink to={`invoices/${tableMeta.rowData[0]}`}>{value}</NavLink>
            // );
          }
        }
    },
    
    {
        label: "Open Balance",
        name: "openBalance",
        options: {
          customBodyRender: (value, tableMeta) => {
            return `$${numberWithCommas(value)}`

            // return (
            //   <NavLink to={`invoices/${tableMeta.rowData[0]}`}>{value}</NavLink>
            // );
          }
        }
    },
    
    {
        label: "Reconcile",
        name: "reconcile",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            // console.log('reconcile value', value)
            // return value? 'auto tick' : 'no tick'
            // return (
            //   <NavLink to={`invoices/${tableMeta.rowData[0]}`}>{value}</NavLink>
            // );
            if(value.disabled){
              return (
                <Checkbox
                  checked={value.reconcile}
                  value="checkedA"
                  onChange={event => {
                    onCheckList(tableMeta.rowIndex, !value.reconcile)
                  }}
                />
              )
            } else {
              return ""
            }
            
          },
        },
    },
    {
      label: "Allocation",
      name: "allocation",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <AmountInput
              // label="Quantity"
              value={value}
              handleChange={e =>
                updateValue(e.target.value)
              }
            />
          )
        },
      }
  },
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

export default InvoicePaymentList;
