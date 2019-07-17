import React from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import DrawerListCollapsible from "./DrawerComponent/DrawerListCollapsible";
import DrawerListItem from "./DrawerComponent/DrawerListItem";

const styles = theme => ({
  drawerPaper: {
    zIndex: 90,
    position: "relative",
    height: "100%"
  },
  root: {
    width: "100%",
    padding: 10
  }
});

const ReportDrawer = ({
  activeView,
  nestedView,
  openNestedView,
  changeReportView,
  classes
}) => {
  return (
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
          openNested={() => openNestedView("deals")}
        >
          <DrawerListItem
            onClickListItem={() => changeReportView("dealsByOwner")}
            title="Deals by Owner"
            secondary
            selected={activeView == "dealsByOwner"}
          />
          <DrawerListItem
            onClickListItem={() => changeReportView("dealsByType")}
            title="Deals by Type"
            secondary
            selected={activeView == "dealsByType"}
          />
          <DrawerListItem
            onClickListItem={() => changeReportView("dealsPipeline")}
            title="Deals Pipeline"
            secondary
            selected={activeView == "dealsPipeline"}
          />
        </DrawerListCollapsible>
        <DrawerListCollapsible
          title="Leads"
          state={nestedView.leads}
          openNested={() => openNestedView("leads")}
        >
          <DrawerListItem
            onClickListItem={() => changeReportView("leadsByStatus")}
            title="Leads by Status"
            secondary
            selected={activeView == "leadsByStatus"}
          />
          <DrawerListItem
            onClickListItem={() => changeReportView("leadsByOwner")}
            title="Leads by Owner"
            secondary
            selected={activeView == "leadsByOwner"}
          />
          <DrawerListItem
            onClickListItem={() => changeReportView("leadsBySource")}
            title="Leads by Source"
            secondary
            selected={activeView == "leadsBySource"}
          />
        </DrawerListCollapsible>
        <DrawerListCollapsible
          title={"Accounts & Customers"}
          state={nestedView.acctcust}
          openNested={() => openNestedView("acctcust")}
        >
          <DrawerListItem
            onClickListItem={() => changeReportView("topSpenderAccount")}
            title="Top Spender Report (Accounts)"
            secondary
            selected={activeView == "topSpenderAccount"}
          />
          <DrawerListItem
            onClickListItem={() => changeReportView("topSpenderCustomer")}
            title="Top Spender Report (Customers)"
            secondary
            selected={activeView == "topSpenderCustomer"}
          />
        </DrawerListCollapsible>
        {/* <DrawerListCollapsible
          title="Sales"
          state={nestedView.sales}
          openNested={() => openNestedView("sales")}
        >
          <DrawerListItem
            onClickListItem={() => changeReportView("proposalReport")}
            title="Proposal Report"
            secondary
            selected={activeView == "proposalReport"}
          />
          <DrawerListItem
            onClickListItem={() => changeReportView("invoiceReport")}
            title="Invoice Report"
            secondary
            selected={activeView == "invoiceReport"}
          />
          <DrawerListItem
            onClickListItem={() => changeReportView("customerValue")}
            title="Total Value of Customers"
            secondary
            selected={activeView == "customerValue"}
          />
        </DrawerListCollapsible> */}
        <DrawerListItem
          onClickListItem={() => changeReportView("individual")}
          title="Individual"
          selected={activeView == "individual"}
        />
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(ReportDrawer);
