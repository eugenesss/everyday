import React from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

import DrawerListCollapsible from "../DrawerComponent/DrawerListCollapsible";
import DrawerListItem from "../DrawerComponent/DrawerListItem";

export const AllReports = ({
  nestedView,
  openNestedView,
  changeReportView
}) => {
  return (
    <List subheader={<ListSubheader>All Reports</ListSubheader>}>
      <DrawerListCollapsible
        icon="zmdi-case"
        title="Deals"
        state={nestedView.deals}
        openNested={() => openNestedView("deals")}
      >
        <DrawerListItem
          onClickListItem={() => changeReportView("All Deals", "allDeals")}
          title="All Deals"
          secondary
        />
      </DrawerListCollapsible>
      <DrawerListCollapsible
        icon="zmdi-account-circle"
        title="Leads"
        state={nestedView.leads}
        openNested={() => openNestedView("leads")}
      >
        <DrawerListItem
          onClickListItem={() =>
            changeReportView("Leads Report", "leadsReport")
          }
          title="leads report"
          secondary
        />
      </DrawerListCollapsible>
      <DrawerListCollapsible
        icon="zmdi-money-box"
        title="Sales"
        state={nestedView.sales}
        openNested={() => openNestedView("sales")}
      >
        <DrawerListItem
          onClickListItem={() =>
            changeReportView("Sales Report", "salesReport")
          }
          title="Invoice Report"
          secondary
        />
        <DrawerListItem
          onClickListItem={() =>
            changeReportView("Sales Report", "salesReport")
          }
          title="Total Income"
          secondary
        />
        <DrawerListItem
          onClickListItem={() =>
            changeReportView("Sales Report", "salesReport")
          }
          title="Proposal Report"
          secondary
        />
        <DrawerListItem
          onClickListItem={() =>
            changeReportView("Sales Report", "salesReport")
          }
          title="Total Value of Customers"
          secondary
        />
      </DrawerListCollapsible>
      <DrawerListItem
        onClickListItem={() =>
          changeReportView("Individual Report", "individual")
        }
        title="Individual"
        icon="zmdi-account"
      />
    </List>
  );
};
