import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const DrawerListItem = ({ onClickListItem, title, icon, secondary }) => {
  return (
    <ListItem button onClick={onClickListItem} className="pl-40">
      {icon && (
        <ListItemIcon>
          <i className={`zmdi ${icon} zmdi-hc-lg`} />
        </ListItemIcon>
      )}
      {secondary ? (
        <ListItemText secondary={title} />
      ) : (
        <ListItemText primary={title} />
      )}
    </ListItem>
  );
};

export default DrawerListItem;
