import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";

export const DashboardView = ({ toggleChange }) => {
  return (
    <List subheader={<ListSubheader>Dashboard View</ListSubheader>}>
      <ListItem button onClick={() => toggleChange("Sales Dashboard")}>
        <ListItemIcon>
          <i className="zmdi zmdi-inbox zmdi-hc-lg" />
        </ListItemIcon>
        <ListItemText primary="Sales Dashboard" />
      </ListItem>
    </List>
  );
};

export const ReportView = ({ toggleChange, openNestedReport, reportState }) => {
  return (
    <List subheader={<ListSubheader>Reports View</ListSubheader>}>
      <ListItem button onClick={() => toggleChange("Leads Report")}>
        <ListItemText primary="Leads Report" />
      </ListItem>
      <ListItem button onClick={() => openNestedReport("deal")}>
        <ListItemText primary="Deals Report" />
        {reportState.deal ? (
          <i className="zmdi zmdi-chevron-down zmdi-hc-lg" />
        ) : (
          <i className="zmdi zmdi-chevron-up zmdi-hc-lg" />
        )}
      </ListItem>
      <Collapse
        component="li"
        in={reportState.deal}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <ListItem
            button
            onClick={() => toggleChange("Deals Report")}
            className="pl-40"
          >
            <ListItemText secondary="Overview" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={() => toggleChange("Accounts Report")}>
        <ListItemText primary="Accounts Report" />
      </ListItem>
      <ListItem button onClick={() => toggleChange("Customers Report")}>
        <ListItemText primary="Customers Report" />
      </ListItem>
      <ListItem button onClick={() => toggleChange("Individual Report")}>
        <ListItemText primary="Individual Report" />
      </ListItem>
    </List>
  );
};
