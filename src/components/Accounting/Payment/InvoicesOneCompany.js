import React from "react";
import { NavLink } from "react-router-dom";

import RecordsList from "Components/Everyday/RecordsList";
import { listOptions } from "Helpers/helpers";

//Page req
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import BgCard from "Components/Everyday/BgCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import Checkbox from '@material-ui/core/Checkbox';


import Moment from "moment";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const InvoicesOneCompany = ({ tableData, loading, title, action, onCheckList}) => {
  

  const columns = [
    {
      name: "id",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      label: "Invoice",
      name: "invoiceId",
      options: { 
        customBodyRender: (value, tableMeta) => {
          return (
            value
            // <NavLink to={`payments/${value.id}`}>{value.name}</NavLink>
            // <NavLink to={`payments/${tableMeta.rowData[0]}`}>{value.name}</NavLink>
          );
        }
      },
    },
    {
      label: "Date",
      name: "dated",
      options: {
        customBodyRender: (value, tableMeta) => {
          return Moment(new Date(value)).format("LL");

        }
      }
    },
    {
      label: "Due Date",
      name: "dueDate",
      options: {
        customBodyRender: (value, tableMeta) => {
          return Moment(new Date(value)).format("LL");

        }
      }
    },

    {
      label: "Original Amount",
      name: "originalAmount",
      options: {
        customBodyRender: (value, tableMeta) => {
          return `$${numberWithCommas(value)}`
        }
      }
    },
    {
      label: "Open Balance",
      name: "openBalance",
      options: {
        customBodyRender: value => {
          return `$${numberWithCommas(value)}`
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
                  onCheckList(tableMeta.rowIndex, value.reconcile)
                }}
              />
            )
          } else {
            return (
              <Checkbox
                checked={value.reconcile}
                value="checkedA"
                onChange={event => {
                  onCheckList(tableMeta.rowIndex, value.reconcile)
                }}
              />
            )
          }
          
        },
      },
  },
    
  {
    label: "Allocation",
    name: "allocation",
    options: {
      customBodyRender: value => {
        return `$${numberWithCommas(value)}`
      }
    }
  },
    
    


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

export default InvoicesOneCompany;
