import React, { Component } from "react";

// page req
import { Helmet } from "react-helmet";

//Page Req
// import ReportDrawer from "Components/Report/ReportDrawer";
import ReportViews from "Components/Report/Views";

// Report Drawer
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import DrawerListCollapsible from "Components/Report/ReportDrawer/DrawerListCollapsible";
import DrawerListItem from "Components/Report/ReportDrawer/DrawerListItem";

const styles = theme => ({
  drawerPaper: {
    zIndex: 90,
    position: "relative",
    height: "100%",
    borderRadius: "15px"
  },
  root: {
    width: "100%",
    padding: 10
  }
});
class ReportsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: "",
      nestedView: {
        sales: false,
        leads: false,
        deals: false,
        acctcust: false,
        closedDeals: false
      },
      dateRange: { startDate: null, endDate: null, focusedInput: null }
    };
    this.handleNestedView = this.handleNestedView.bind(this);
    this.onSelectView = this.onSelectView.bind(this);
  }

  handleNestedView(view) {
    this.setState({
      ...this.state,
      nestedView: {
        ...this.state.nestedView,
        [view]: !this.state.nestedView[view]
      }
    });
  }

  onSelectView(view) {
    this.setState({
      ...this.state,
      activeView: view
    });
  }

  render() {
    const { classes } = this.props;
    const { nestedView, activeView } = this.state;
    return (
      <div className="todo-dashboard">
        <Helmet>
          <title>Everyday | Reports</title>
          <meta name="description" content="Everyday Informational Reports" />
        </Helmet>
        <div className="row">
          <div className="col-2" style={{ height: "calc(100vh - 160px)" }}>
            <Drawer
              variant="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <List
                className={classes.root}
                subheader={<ListSubheader>Reports List</ListSubheader>}
              >
                <DrawerListCollapsible
                  title="Deals"
                  state={nestedView.deals}
                  openNested={() => this.handleNestedView("deals")}
                >
                  <DrawerListItem
                    onClickListItem={() => this.onSelectView("dealsByOwner")}
                    title="Deals by Owner"
                    secondary
                    selected={activeView == "dealsByOwner"}
                  />
                  <DrawerListItem
                    onClickListItem={() => this.onSelectView("dealsByType")}
                    title="Deals by Type"
                    secondary
                    selected={activeView == "dealsByType"}
                  />
                  <DrawerListItem
                    onClickListItem={() => this.onSelectView("dealsPipeline")}
                    title="Deals Pipeline"
                    secondary
                    selected={activeView == "dealsPipeline"}
                  />
                </DrawerListCollapsible>
                <DrawerListCollapsible
                  title="Closed Deals"
                  state={nestedView.closedDeals}
                  openNested={() => this.handleNestedView("closedDeals")}
                >
                  <DrawerListItem
                    onClickListItem={() => this.onSelectView("wonByOwner")}
                    title="Won Deals By Owner"
                    secondary
                    selected={activeView == "wonByOwner"}
                  />
                  {/* <DrawerListItem
                    onClickListItem={() => this.onSelectView("lostDealsReason")}
                    title="Lost Deals by Reason"
                    secondary
                    selected={activeView == "lostDealsReason"}
                  /> */}
                </DrawerListCollapsible>
                <DrawerListCollapsible
                  title="Leads"
                  state={nestedView.leads}
                  openNested={() => this.handleNestedView("leads")}
                >
                  <DrawerListItem
                    onClickListItem={() => this.onSelectView("leadsByStatus")}
                    title="Leads by Status"
                    secondary
                    selected={activeView == "leadsByStatus"}
                  />
                  <DrawerListItem
                    onClickListItem={() => this.onSelectView("leadsByOwner")}
                    title="Leads by Owner"
                    secondary
                    selected={activeView == "leadsByOwner"}
                  />
                  <DrawerListItem
                    onClickListItem={() => this.onSelectView("leadsBySource")}
                    title="Leads by Source"
                    secondary
                    selected={activeView == "leadsBySource"}
                  />
                </DrawerListCollapsible>
                <DrawerListCollapsible
                  title={"Accounts & Customers"}
                  state={nestedView.acctcust}
                  openNested={() => this.handleNestedView("acctcust")}
                >
                  <DrawerListItem
                    onClickListItem={() =>
                      this.onSelectView("topSpenderAccount")
                    }
                    title="Top Spender Report (Accounts)"
                    secondary
                    selected={activeView == "topSpenderAccount"}
                  />
                  <DrawerListItem
                    onClickListItem={() =>
                      this.onSelectView("topSpenderCustomer")
                    }
                    title="Top Spender Report (Customers)"
                    secondary
                    selected={activeView == "topSpenderCustomer"}
                  />
                </DrawerListCollapsible>

                <DrawerListItem
                  onClickListItem={() => this.onSelectView("individual")}
                  title="Individual"
                  selected={activeView == "individual"}
                />
              </List>
            </Drawer>
          </div>
          <div className="col-10">
            <ReportViews componentToRender={activeView} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ReportsComponent);
