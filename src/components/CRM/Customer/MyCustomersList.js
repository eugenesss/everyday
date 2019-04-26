import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { show } from "redux-modal";

import MUIDataTable from "mui-datatables";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import { getMyCustomer } from "Actions";

class MyCustomersList extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getMyCustomer();
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
      cust.contact.office,
      cust.contact.fax,
      cust
    );
    return data;
  }
  refresh() {
    this.props.getMyCustomer();
  }
  toggleEditModal(custToEdit) {
    this.props.show("EDIT_CUSTOMER_MODAL", {
      custToEdit: custToEdit
    });
  }

  render() {
    const { myCust, myCustLoading } = this.props;
    const data = myCust.map(cust => this.convertData(cust));
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
      { name: "Office", options: { display: false } },
      { name: "Fax", options: { display: false } },
      {
        name: "Actions",
        options: {
          filter: false,
          sort: false,
          customBodyRender: value => {
            return (
              <Tooltip id="tooltip-icon" title="Edit">
                <IconButton
                  className="text-primary mr-2"
                  aria-label="Edit Customer"
                  onClick={() => {
                    this.toggleEditModal(value);
                  }}
                >
                  <i className="zmdi zmdi-edit" />
                </IconButton>
              </Tooltip>
            );
          }
        }
      }
    ];
    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      rowsPerPage: 10,
      rowsPerPageOptions: [10, 20, 50, 100],
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
          title={"My Customers"}
          columns={columns}
          data={data}
          options={options}
        />
        {myCustLoading && <RctSectionLoader />}
      </RctCollapsibleCard>
    );
  }
}

// map state to props
const mapStateToProps = ({ customer }) => {
  const { myCust, myCustLoading } = customer;
  return { myCust, myCustLoading };
};

export default connect(
  mapStateToProps,
  { show, getMyCustomer }
)(MyCustomersList);
