import React from "react";
import { Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

// helpers
import { getAppLayout } from "Helpers/helpers";

const PageTitleBar = ({ title, createLink, location }) => {
  return (
    <div className="page-title d-flex justify-content-between align-items-center">
      {title && (
        <div className="page-title-wrap">
          <h2 className="">{title}</h2>
        </div>
      )}
      {createLink && (
        <Link to={`/${getAppLayout(location)}${createLink}`}>
          <Fab
            size="small"
            variant="round"
            color="primary"
            className="text-white"
            aria-label="add"
          >
            <i className="zmdi zmdi-plus" />
          </Fab>
        </Link>
      )}
    </div>
  );
};

export default withRouter(PageTitleBar);
