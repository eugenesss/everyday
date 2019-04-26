import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import MUIDataTable from "mui-datatables";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

//import { getAllCustomer } from "Actions";

class CustomersList extends Component {
  componentDidMount() {
    // this.props.getAllCustomer();
  }
  //Convert API to DataTable Array
  convertData(cust) {
    var data = [];
    data.push(
      cust.id,
      cust.account ? cust.account.id : null,
      cust.contact.fullName,
      cust.account ? cust.account.name : null,
      cust.contact.emailAddress,
      cust.contact.mobile,
      cust.owner.fullName,
      cust.contact.office,
      cust.contact.fax
    );
    return data;
  }
  /*  refresh() {
    this.props.getAllCustomer();
  } */

  render() {
    const { allCust, allCustLoading } = this.props;
    const data = allCust && allCust.map(cust => this.convertData(cust));
    const columns = [
      {
        name: "ID",
        options: { display: "excluded", filter: false, sort: false }
      },
      {
        name: "AccountID",
        options: { display: "excluded", filter: false, sort: false }
      },
      {
        name: "Name",
        options: {
          customBodyRender: (value, tableMeta) => {
            return (
              <NavLink to={`customers/${tableMeta.rowData[0]}`}>
                {value}
              </NavLink>
            );
          }
        }
      },
      {
        name: "Account",
        options: {
          customBodyRender: (value, tableMeta) => {
            return (
              value != null && (
                <NavLink to={`accounts/${tableMeta.rowData[1]}`}>
                  {value}
                </NavLink>
              )
            );
          }
        }
      },
      "Email",
      { name: "Mobile" },
      { name: "Customer Owner" },
      { name: "Office", options: { display: false } },
      { name: "Fax", options: { display: false } }
    ];
    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      selectableRows: false,
      rowsPerPage: 15,
      rowsPerPageOptions: [15, 30, 60, 100],
      textLabels: { body: { noMatch: "No Customers to display" } },
      customToolbar: () => {
        return (
          <Tooltip id="tooltip-icon" title="Refresh">
            <IconButton
              className="text-secondary"
              aria-label="Refresh List"
              onClick={() => {
                this.refresh();
              }}
            >
              <i className="zmdi zmdi-refresh" />
            </IconButton>
          </Tooltip>
        );
      }
    };
    return (
      <RctCollapsibleCard fullBlock>
        <MUIDataTable
          title={"All Customers"}
          columns={columns}
          data={data}
          options={options}
        />
        {allCustLoading && <RctSectionLoader />}
      </RctCollapsibleCard>
    );
  }
}

/* // map state to props
const mapStateToProps = ({ customer }) => {
  const { allCust, allCustLoading } = customer;
  return { allCust, allCustLoading };
}; */

export default connect(
  null,
  {}
)(CustomersList);
