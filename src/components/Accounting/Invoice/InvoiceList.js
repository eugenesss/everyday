import React from "react";
import { NavLink } from "react-router-dom";

import MUIDataTable from "mui-datatables";
import { listOptions } from "Helpers/helpers";

//Page req
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import BgCard from "Components/Everyday/BgCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import Moment from 'moment'

const InvoiceList = ({ tableData, loading, title, action }) => {
  
  const columns = [
    {
      name: "id",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      label: "Invoice #",
      name: "quoteID",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`invoices/${tableMeta.rowData[0]}`}>{value}</NavLink>
          );
        }
      }
    },
    {
      label: "Related",
      name: "attn_toId",
      options: {
        customBodyRender: value => {
          return value ? value.name : "";
        }
      }
    },
    { label: "Amount", name: "totalAmt",
      options: {
        customBodyRender: (value,) => {
          return value.toFixed(2)
        }
      }
    },
    { label: "Date Sent", name: "sent_date",
      options: {
        customBodyRender: (value, tableMeta) => {
          return Moment(new Date(value)).format('LL')
        }
      }
    },
    { label: "Due Date", name: "due_date",
      options: {
        customBodyRender: value => {
          return Moment(new Date(value)).format('LL')
        }
      }
    },
    { label: "Version", name: "version",
    options: {
      customBodyRender: value => {
        return value
      }
    }
    },
    {
      label: "Status",
      name: "state",
      options: {
        customBodyRender: value => {
          return value;
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


  listOptions.customToolbarSelect = (
    selectedRows,
    displayData,
    setSelectRows
  ) =>
    // delete multiple function
    null;


  return (
    <BgCard fullBlock>
      <MUIDataTable
        title={title}
        columns={columns}
        data={tableData}
        options={listOptions}
      />
      {loading && <RctSectionLoader />}
    </BgCard>
  );
};

export default InvoiceList;
