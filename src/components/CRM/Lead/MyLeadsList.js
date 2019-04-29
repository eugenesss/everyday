import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

//Page req
import MUIDataTable from "mui-datatables";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

//Sub Components
import LeadInterestLevel from "./LeadInterestLevel";

//import { getMyLead } from "Actions";

class MyLeadsList extends Component {
  componentDidMount() {
    // this.props.getMyLead();
  }
  //Convert API to DataTable Array
  convertData(lead) {
    var data = [];
    data.push(
      lead.id,
      lead.contact.fullName,
      lead.companyName,
      lead.contact.emailAddress,
      lead.status,
      lead.source !== null ? lead.source.name : null,
      lead.interest,
      lead.contact.mobile,
      lead.owner.fullName,
      lead.industry !== null ? lead.industry.name : null,
      lead.website,
      lead.contact.office,
      lead.contact.fax,
      lead
    );
    return data;
  }
  toggleEditModal(leadToEdit) {
    this.props.show("EDIT_LEAD_MODAL", {
      leadToEdit: leadToEdit
    });
  }
  toggleConvertModal(leadToConvert) {
    this.props.show("CONVERT_LEAD_MODAL", {
      leadCheck: leadToConvert
    });
  }
  toggleLeadOwnerModal(leadToEdit) {
    this.props.show("CHANGE_LEAD_OWNER_MODAL", {
      leadToEdit: leadToEdit
    });
  }
  reloadGetMyLead() {
    this.props.getMyLead();
  }

  render() {
    const { myLeads, myLeadLoading } = this.props;
    const data = myLeads && myLeads.map(lead => this.convertData(lead));
    const columns = [
      {
        name: "ID",
        options: { display: "excluded", filter: false, sort: false }
      },
      {
        name: "Name",
        options: {
          customBodyRender: (value, tableMeta) => {
            return (
              <NavLink to={`leads/${tableMeta.rowData[0]}`}>{value}</NavLink>
            );
          }
        }
      },
      "Company",
      "Email",
      {
        name: "Status"
        /* options: {
          customBodyRender: value => {
            return <StatusLabel status={value} />;
          }
        } */
      },
      {
        name: "Source"
        /*  options: {
          display: false,
          customBodyRender: value => {
            return value ? <LeadSourceBadge source={value} /> : "";
          }
        } */
      },
      {
        name: "Interest Level",
        options: {
          customBodyRender: value => {
            return <LeadInterestLevel interest={value} />;
          }
        }
      },
      { name: "Mobile", options: { display: false } },
      { name: "Lead Owner", options: { display: false } },
      { name: "Industry", options: { display: false } },
      { name: "Website", options: { display: false } },
      { name: "Office", options: { display: false } },
      { name: "Fax", options: { display: false } },
      {
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
                <Tooltip id="tooltip-icon" title="Convert">
                  <IconButton
                    className="text-success mr-2"
                    aria-label="Convert Lead"
                    onClick={() => {
                      this.toggleConvertModal(value);
                    }}
                  >
                    <i className="zmdi zmdi-check-all" />
                  </IconButton>
                </Tooltip>
                <Tooltip id="tooltip-icon" title="Change Owner">
                  <IconButton
                    className="text-warning mr-2"
                    aria-label="Change Owner"
                    onClick={() => {
                      this.toggleLeadOwnerModal(value);
                    }}
                  >
                    <i className="zmdi zmdi-accounts-list" />
                  </IconButton>
                </Tooltip>
              </React.Fragment>
            );
          }
        }
      }
    ];
    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      textLabels: { body: { noMatch: "No Leads to display" } },
      customToolbar: () => {
        return (
          <Tooltip id="tooltip-icon" title="Refresh">
            <IconButton
              className="text-secondary"
              aria-label="Refresh List"
              onClick={() => {
                this.reloadGetMyLead();
              }}
            >
              <i className="zmdi zmdi-refresh" />
            </IconButton>
          </Tooltip>
        );
      }
    };
    return (
      <RctCollapsibleCard heading={"You are now viewing: My Leads"} fullBlock>
        <MUIDataTable
          title={"My Leads"}
          columns={columns}
          data={data}
          options={options}
        />
        {myLeadLoading && <RctSectionLoader />}
      </RctCollapsibleCard>
    );
  }
}
// map state to props
const mapStateToProps = ({ lead }) => {
  const { myLeads, myLeadLoading } = lead;
  return { myLeads, myLeadLoading };
};

export default connect(
  null,
  {}
)(MyLeadsList);
