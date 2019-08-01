import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import { singleLead } from "Helpers/url/crm";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import StatusBadge from "Components/Everyday/StatusBadge/StatusBadge";

import moment from "moment";
import { getUntouchedLeads } from "Actions";

const myTheme = createMuiTheme({
  overrides: {
    MuiPaper: {
      rounded: { borderRadius: "15px" }
    }
  }
});

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
        return <NavLink to={singleLead(tableMeta.rowData[0])}>{value}</NavLink>;
      }
    }
  },
  { label: "Company", name: "companyName" },
  {
    label: "Email",
    name: "email"
  },
  {
    label: "Mobile",
    name: "mobile"
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
    label: "Days Since Last Activity",
    name: "updatedAt",
    options: {
      sort: false,
      customBodyRender: value => moment().diff(value, "days")
    }
  }
];

const date = moment()
  .subtract(7, "days")
  .format("YYYY-MM-DD HH:mm:ss");

class UntouchedLeadsTable extends Component {
  state = {};
  componentDidMount() {
    this.props.getUntouchedLeads(date);
  }
  refresh() {
    this.props.getUntouchedLeads(date);
  }
  render() {
    const listOptions = {
      filterType: "multiselect",
      responsive: "stacked",
      download: false,
      print: false,
      viewColumns: false,
      filter: false,
      selectableRows: "none",
      elevation: 0,
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 30],
      textLabels: { body: { noMatch: "No data to display" } },
      customToolbarSelect: (selectedRows, displayData, setSelectRows) => null,
      customToolbar: () => {
        return (
          <Tooltip id="tooltip-icon" title="Refresh">
            <IconButton
              aria-label="Refresh List"
              onClick={() => {
                this.refresh();
              }}
            >
              <i className={"zmdi zmdi-refresh"} />
            </IconButton>
          </Tooltip>
        );
      }
    };
    const { loading, data } = this.props.untouchedLeads;
    return (
      <div className="rct-block">
        <MuiThemeProvider theme={myTheme}>
          <MUIDataTable
            title="Leads without activity for more than 7 days"
            columns={columns}
            data={data}
            options={listOptions}
          />
        </MuiThemeProvider>
        {loading && <RctSectionLoader />}
      </div>
    );
  }
}
const mapStateToProps = ({ widgetState }) => {
  const { untouchedLeads } = widgetState;
  return { untouchedLeads };
};

export default connect(
  mapStateToProps,
  { getUntouchedLeads }
)(UntouchedLeadsTable);
