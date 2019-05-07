import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import MUIDataTable from "mui-datatables";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import Fab from "@material-ui/core/Fab";

//import { getAccount } from "Actions";

class AccountsList extends Component {
  componentDidMount() {
    // this.props.getAccount();
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
      acct.fax
    );
    return data;
  }
  refresh() {
    this.props.getAccount();
  }
  render() {
    const { allAccount, allAccountLoading, title } = this.props;
    //const data = allAccount.map(acct => this.convertData(acct));
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
      { name: "Fax", options: { display: false } }
    ];
    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      selectableRows: false,
      rowsPerPage: 15,
      rowsPerPageOptions: [15, 30, 60, 100],
      textLabels: { body: { noMatch: "No Accounts to display" } },
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
        {allAccountLoading && <RctSectionLoader />}
        <MUIDataTable
          title={title}
          columns={columns}
          data={allAccount}
          options={options}
        />
      </RctCollapsibleCard>
    );
  }
}
// map state to props
const mapStateToProps = ({ account }) => {
  const { allAccount, allAccountLoading } = account;
  return { allAccount, allAccountLoading };
};

export default connect(
  null,
  {}
)(AccountsList);
