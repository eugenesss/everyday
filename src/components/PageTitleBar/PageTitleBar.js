import React from "react";
import { Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "reactstrap";

// helpers
import { getAppLayout } from "Helpers/helpers";

const PageTitleBar = ({
  title,
  createLink,
  location,
  moreButton,
  extraButtons
}) => {

  return (
    <div className="page-title d-flex justify-content-between align-items-center">
      {title && (
        <div className="page-title-wrap">
          <h2 className="">{title}</h2>
        </div>
      )}
      <div className="d-flex">
        {extraButtons &&
          extraButtons.map((button, key) => {
            return (
              <Button
                className="mr-15"
                key={key}
                outline
                onClick={button.handleOnClick}
                color={button.color}
              >
                {button.label}
              </Button>
            );
          })}
        {createLink && (
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
        )}
        {moreButton && moreButton}
      </div>
    </div>
  );
};

export default withRouter(PageTitleBar);
