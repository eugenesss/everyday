import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
//import { show } from "redux-modal";

import MUIDataTable from "mui-datatables";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

//import { getMyAccount } from "Actions";

class MyAccountsList extends Component {
  componentDidMount() {
    //  this.props.getMyAccount();
  }
  //Convert API to DataTable Array
  convertData(acct) {
    var data = [];
    data.push(
      acct.id,
      acct.name,
      acct.industry ? acct.industry.name : "",
      acct.website,
      acct.office,
      acct.owner.fullName,
      acct.fax,
      acct
    );
    return data;
  }
  refresh() {
    this.props.getMyAccount();
  }
  toggleEditModal(acctToEdit) {
    this.props.show("EDIT_ACCOUNT_MODAL", {
      acctToEdit: acctToEdit
    });
  }
  render() {
    const { myAccount, myAccountLoading } = this.props;
    //const data = myAccount.map(acct => this.convertData(acct));
    const columns = [
      {
        name: "ID",
        options: { display: "excluded", filter: false, sort: false }
      },
      {
        name: "Account Name",
        options: {
          customBodyRender: (value, tableMeta) => {
            return (
              <NavLink to={`accounts/${tableMeta.rowData[0]}`}>{value}</NavLink>
            );
          }
        }
      },
      { name: "Industry" },
      { name: "Website" },
      { name: "Office" },
      { name: "Account Owner" },
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
                  aria-label="Edit Account"
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
      textLabels: { body: { noMatch: "No Accounts to display" } },
      customToolbar: () => {
        return (
          <React.Fragment>
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
            <Tooltip id="tooltip-icon" title="New">
              <IconButton
                className="text-secondary"
                aria-label="Create New"
                onClick={() => {
                  this.refresh();
                }}
              >
                <i className="zmdi zmdi-plus" />
              </IconButton>
            </Tooltip>
          </React.Fragment>
        );
      }
    };
    return (
      <RctCollapsibleCard fullBlock>
        {myAccountLoading && <RctSectionLoader />}
        <MUIDataTable
          title={"My Accounts"}
          columns={columns}
          data={myAccount}
          options={options}
        />
      </RctCollapsibleCard>
    );
  }
}
// map state to props
const mapStateToProps = ({ account }) => {
  const { myAccount, myAccountLoading } = account;
  return { myAccount, myAccountLoading };
};

export default connect(
  null,
  {}
)(MyAccountsList);
