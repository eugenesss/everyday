import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

//Component Req
import MUIDataTable from "mui-datatables";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import NumberFormat from "react-number-format";
import Moment from "moment";

import { getDealClosing } from "Actions";

class DealClosingList extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getDealClosing();
  }
  refresh() {
    this.props.getDealClosing();
  }
  //Convert API to DataTable Array
  convertData(deal) {
    var data = [];
    data.push(
      deal.id,
      deal.name,
      deal.amount,
      deal.stage.name,
      deal.stage.chance,
      deal.closedOn,
      deal.owner.fullName
    );
    return data;
  }
  render() {
    const { dealsClosing, dealsClosingLoading } = this.props;
    const data = dealsClosing.map(deal => this.convertData(deal));
    const columns = [
      {
        name: "DealID",
        options: {
          display: "excluded",
          filter: false,
          sort: false,
          download: false
        }
      },
      {
        name: "Deal Name",
        options: {
          customBodyRender: (value, tableMeta) => {
            return (
              <NavLink to={`deals/${tableMeta.rowData[0]}`}>{value}</NavLink>
            );
          }
        }
      },
      {
        name: "Amount",
        options: {
          customBodyRender: value => {
            return (
              <NumberFormat
                value={value}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            );
          }
        }
      },
      { name: "Stage" },
      { name: "Chance" },
      {
        name: "Closing Date",
        options: {
          customBodyRender: value => {
            return Moment(value).format("D MMMM YYYY");
          }
        }
      },
      { name: "Deal Owner", options: { display: false } }
    ];
    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: false,
      print: false,
      download: false,
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 15],
      textLabels: { body: { noMatch: "No Deals to display" } },
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
          title={"Deals Closing"}
          columns={columns}
          data={data}
          options={options}
        />
        {dealsClosingLoading && <RctSectionLoader />}
      </RctCollapsibleCard>
    );
  }
}

const mapStateToProps = ({ deal }) => {
  const { dealsClosing, dealsClosingLoading } = deal;
  return { dealsClosing, dealsClosingLoading };
};
export default connect(
  mapStateToProps,
  { getDealClosing }
)(DealClosingList);
