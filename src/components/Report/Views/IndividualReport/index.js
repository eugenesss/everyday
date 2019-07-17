import React, { Component } from "react";
import { connect } from "react-redux";
import ReportContainer from "Components/Report/Components/ReportContainer";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

// User Selction
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

// Charts
import PeriodSalesChart from "Components/Charts/PeriodSalesChart";
import DealsPipelineChart from "Components/Charts/DealsPipelineChart";
import LeadsByStatusChart from "Components/Charts/LeadsByStatusChart";
// Actions
import { getIndividualReport, getAllUsers } from "Actions";

const sampleData = {
  name: "User Name",
  closingRatio: 3.41,
  totalDealsWon: 3,
  totalDealsAmt: 40000,
  totalLeads: 8,
  totalDeals: 0,
  accountsToDeals: 0.56,
  salesData: [
    { date: new Date(2017, 7, 16), amount: 3000 },
    { date: new Date(2017, 7, 16), amount: 2000 },
    { date: new Date(2017, 10, 17), amount: 4000 }
  ],
  pipeline: [
    {
      name: "Prospect",
      totalDeals: 2,
      totalAmount: 2000,
      deals: [
        {
          name: "deal",
          amount: 1000,
          source: "source",
          userInfo: "user",
          chance: 40,
          type: "type"
        },
        { name: "deal", amount: 1000, source: "source", type: "type" }
      ]
    }
  ],
  leadsHealth: [
    {
      name: "Contacted",
      totalLeads: 3,
      color: "blue",
      leads: [
        {
          name: "Leads One",
          source: "Cold Call",
          email: "email",
          companyName: "companyName"
        },
        {
          name: "Leads One",
          source: "Cold Call",
          email: "email",
          companyName: "companyName"
        },
        {
          name: "Leads One",
          source: "Cold Call",
          email: "email",
          companyName: "companyName"
        }
      ]
    }
  ]
};

class IndividualReport extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.users.length < 1) this.props.getAllUsers();
  }

  handleChange(event) {
    this.setState(oldValues => ({
      ...oldValues,
      selected: event.target.value
    }));
  }

  handleSubmit(startDate, endDate) {
    this.props.getIndividualReport(startDate, endDate, this.state.selected);
  }
  render() {
    const { loading, data } = this.props.individualReport;
    const { selected } = this.state;
    return (
      <React.Fragment>
        {loading && <RctSectionLoader />}
        <ReportContainer
          additionalSelection={
            <TextField
              select
              label="User Report"
              value={selected}
              onChange={this.handleChange}
              className="mr-20"
              style={{ minWidth: 300 }}
            >
              {this.props.users.map((user, key) => (
                <MenuItem key={key} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </TextField>
          }
          handleSubmit={this.handleSubmit}
          noPads
        >
          <div className="mt-30">
            {data ? (
              <React.Fragment>
                <div className="d-flex mb-20">
                  Report for <h3 className="ml-5">Name</h3>
                </div>
                <RctCollapsibleCard heading="Overview">
                  <div className="row">
                    <div className="col-md-4">
                      <ul className="list-unstyled report-list">
                        <li>
                          <h4 className="heading mb-10">Total Deals</h4>
                          <h2>32</h2>
                        </li>
                        <li>
                          <h4 className="heading mb-10">Total Leads</h4>
                          <h2>28</h2>
                        </li>
                        <li>
                          <h4 className="heading mb-10">
                            Account to Deal Ratio
                          </h4>
                          <h2>$335</h2>
                        </li>
                        <li>
                          <h4 className="heading mb-10">Total Deal Amount</h4>
                          <h2>$28,557.5</h2>
                        </li>
                        <li>
                          <h4 className="heading mb-10">Total Deals Won</h4>
                          <h2>37</h2>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-8 vertical-self-center">
                      <div className="p-20">
                        <PeriodSalesChart data={sampleData.salesData} />
                      </div>
                    </div>
                  </div>
                </RctCollapsibleCard>
                <div className="row">
                  <div className="col-12">
                    <RctCollapsibleCard heading="Deals Health">
                      <DealsPipelineChart data={sampleData.pipeline} />
                    </RctCollapsibleCard>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <RctCollapsibleCard heading="Leads Health">
                      <LeadsByStatusChart data={sampleData.leadsHealth} />
                    </RctCollapsibleCard>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <p className="text-muted text-center">
                <i>No Records</i>
              </p>
            )}
          </div>
        </ReportContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ reportState, usersState }) => {
  const { individualReport } = reportState;
  const { users } = usersState;
  return { individualReport, users };
};

export default connect(
  mapStateToProps,
  { getIndividualReport, getAllUsers }
)(IndividualReport);