import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import ActionButtonGroup from "./ActionButtons/ActionButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  actionButton: {
    marginLeft: theme.spacing(3),
    boxShadow: theme.custom.boxShadow
  }
}));

const PageTitleBar = ({
  title,
  customButton,
  actionButton,
  actionGroup,
  history
}) => {
  const classes = useStyles();
  return (
    <div className="page-title d-flex justify-content-between align-items-center">
      <div className="page-title-wrap">
        <IconButton onClick={() => history.goBack()} aria-label="back">
          <ArrowBack fontSize="small" />
        </IconButton>
        <h2 className="">{title && title}</h2>
      </div>
      <div className="d-flex">
        {customButton && customButton}
        {actionButton &&
          actionButton.map((button, key) => (
            <Button
              key={key}
              variant="contained"
              className={`${button.classes} ${classes.actionButton}`}
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        {actionGroup && <ActionButtonGroup buttons={actionGroup} />}
      </div>
    </div>
  );
};

export default withRouter(PageTitleBar);
