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

import { getAllDeal } from "Actions";

class DealsList extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getAllDeal();
  }
  refresh() {
    this.props.getAllDeal();
  }
  //Convert API to DataTable Array
  convertData(deal) {
    var data = [];
    data.push(
      deal.id,
      deal.account.id,
      deal.customer ? deal.customer.id : null,
      deal.name,
      deal.amount,
      deal.stage.name,
      deal.stage.chance,
      deal.closedOn,
      deal.account.name,
      deal.customer ? deal.customer.contact.fullName : "",
      deal.owner.fullName,
      deal.source ? deal.source.name : "",
      deal.type ? deal.type.name : ""
    );
    return data;
  }
  render() {
    const { allDeal, allDealLoading } = this.props;
    const data = allDeal.map(deal => this.convertData(deal));
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
        name: "AccountID",
        options: {
          display: "excluded",
          filter: false,
          sort: false,
          download: false
        }
      },
      {
        name: "CustomerID",
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
      {
        name: "Stage"
      },
      {
        name: "Chance",
        options: { display: false }
      },
      {
        name: "Closing Date",
        options: {
          customBodyRender: value => {
            return Moment(value).format("D MMMM YYYY");
          }
        }
      },
      {
        name: "Account",
        options: {
          customBodyRender: (value, tableMeta) => {
            return (
              <NavLink to={`accounts/${tableMeta.rowData[1]}`}>{value}</NavLink>
            );
          }
        }
      },
      {
        name: "Customer",
        options: {
          customBodyRender: (value, tableMeta) => {
            return value ? (
              <NavLink to={`customers/${tableMeta.rowData[2]}`}>
                {value}
              </NavLink>
            ) : (
              ""
            );
          }
        }
      },
      { name: "Deal Owner" },
      { name: "Source", options: { display: false } },
      { name: "Type", options: { display: false } }
    ];
    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      selectableRows: false,
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
          title={"All Deals"}
          columns={columns}
          data={data}
          options={options}
        />
        {allDealLoading && <RctSectionLoader />}
      </RctCollapsibleCard>
    );
  }
}

const mapStateToProps = ({ deal }) => {
  const { allDeal, allDealLoading } = deal;
  return { allDeal, allDealLoading };
};
export default connect(
  mapStateToProps,
  { getAllDeal }
)(DealsList);
