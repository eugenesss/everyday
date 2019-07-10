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
      <List subheader={<ListSubheader>All Reports</ListSubheader>}>
        <DrawerListCollapsible
          icon="zmdi-case"
          title="Deals"
          state={nestedView.deals}
          openNested={() => openNestedView("deals")}
        >
          <DrawerListItem
            onClickListItem={() => changeReportView("dealsByOwner")}
            title="Deals By Owner"
            secondary
            selected={activeView == "dealsByOwner"}
          />
          <DrawerListItem
            onClickListItem={() => changeReportView("dealsByType")}
            title="Deals By Type"
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
          icon="zmdi-account-circle"
          title="Leads"
          state={nestedView.leads}
          openNested={() => openNestedView("leads")}
        >
          <DrawerListItem
            onClickListItem={() => changeReportView("leadsReport")}
            title="Leads report"
            secondary
            selected={activeView == "leadsReport"}
          />
        </DrawerListCollapsible>
        <DrawerListCollapsible
          icon="zmdi-money-box"
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
        </DrawerListCollapsible>
        <DrawerListItem
          onClickListItem={() => changeReportView("individual")}
          title="Individual"
          icon="zmdi-account"
          selected={activeView == "individual"}
        />
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(ReportDrawer);
