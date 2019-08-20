import React from "react";
import { Fab, Button, ButtonGroup, IconButton } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { ArrowBack } from "@material-ui/icons";

const PageTitleBar = ({
  title,
  createLink,
  moreButton,
  extraButtons,
  actionButton,
  actionGroup,
  history
}) => {
  return (
    <div className="page-title d-flex justify-content-between align-items-center">
      <div className="page-title-wrap">
        <IconButton onClick={() => history.goBack()} aria-label="back">
          <ArrowBack style={{ fontSize: "20px" }} />
        </IconButton>
        <h2 className="">{title && title}</h2>
      </div>
      <div className="d-flex">
        {/* {extraButtons &&
          extraButtons.map((button, key) => {
            return (
              <Button
                className="mr-15"
                key={key}
                variant="outlined"
                onClick={button.handleOnClick}
                //  color={button.color}
              >
                {button.label}
              </Button>
            );
          })} */}

        {/* {createLink && (
          <Link to={createLink}>
            <Tooltip title="Add New" placement="bottom">
              <Fab
                size="small"
                variant="round"
                color="primary"
                className="text-white"
                aria-label="add"
              >
                <i className="zmdi zmdi-plus zmdi-hc-lg" />
              </Fab>
            </Tooltip>
          </Link>
        )} */}

        {moreButton && moreButton}

        {actionButton && actionButton}

        {actionGroup && (
          <ButtonGroup variant="contained" /* size="small" */ className="ml-15">
            <Button /* onClick={button.handleOnClick} */>label</Button>
            <Button /* onClick={button.handleOnClick} */>label</Button>
            <Button /* onClick={button.handleOnClick} */>label</Button>
          </ButtonGroup>
        )}
      </div>
    </div>
  );
};

export default withRouter(PageTitleBar);
