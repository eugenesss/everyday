import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

// Page req
import MUIDataTable from "mui-datatables";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

//Sub Component
import LeadInterestLevel from "./LeadInterestLevel";

//import { getLead } from "Actions";

class LeadsList extends Component {
  componentDidMount() {
    // this.props.getLead();

    const data =
      this.props.allLeads &&
      this.props.allLeads.map(lead => this.convertData(lead));
  }
  //Convert API to DataTable Array
  convertData(lead) {
    var data = [];
    data.push(
      lead.id,
      lead.contact.fullName,
      lead.companyName,
      lead.contact.emailAddress,
      lead.status.name,
      lead.source !== null ? lead.source.name : null,
      lead.interest,
      lead.owner.fullName,
      lead.contact.mobile,
      lead.industry !== null ? lead.industry.name : null,
      lead.website,
      lead.contact.office,
      lead.contact.fax
    );
    return data;
  }
  reloadGetLead() {
    this.props.getLead();
  }
  render() {
    const { allLeads, allLeadLoading } = this.props;
    //const data = allLeads;
    const columns = [
      {
        name: "id",
        options: { display: "excluded", filter: false, sort: false }
      },
      {
        label: "Name",
        name: "fullName",
        options: {
          customBodyRender: (value, tableMeta) => {
            return (
              <NavLink to={`leads/${tableMeta.rowData[0]}`}>{value}</NavLink>
            );
          }
        }
      },
      { label: "Company", name: "companyName" },
      { label: "Email", name: "emailAddress" },
      { label: "Status", name: "status" },
      { label: "Source", name: "source" },
      {
        label: "Interest Level",
        name: "interest",
        options: {
          customBodyRender: value => {
            return <LeadInterestLevel interest={value} />;
          }
        }
      },
      { label: "Lead Owner", name: "owner" },
      { label: "Mobile", name: "mobile", options: { display: false } },
      { label: "Industry", name: "industry", options: { display: false } },
      { label: "Website", name: "website", options: { display: false } },
      { label: "Office", name: "office", options: { display: false } },
      { label: "Fax", name: "fax", options: { display: false } }
    ];
    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      selectableRows: false,
      textLabels: { body: { noMatch: "No Leads to display" } },
      customToolbar: () => {
        return (
          <Tooltip id="tooltip-icon" title="Refresh">
            <IconButton
              className="text-secondary"
              aria-label="Refresh List"
              onClick={() => {
                this.reloadGetLead();
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
          title={"All Leads"}
          columns={columns}
          data={allLeads}
          options={options}
        />
        {allLeadLoading && <RctSectionLoader />}
      </RctCollapsibleCard>
    );
  }
}

/* // map state to props
const mapStateToProps = ({ lead }) => {
  const { allLeads, allLeadLoading } = lead;
  return { allLeads, allLeadLoading };
}; */

export default connect(
  null,
  {}
)(LeadsList);
