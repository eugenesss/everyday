import React from "react";
import { Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const PageTitleBar = ({ title, createLink, moreButton, extraButtons }) => {
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
                variant="outlined"
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
<<<<<<< HEAD
        {moreButton && moreButton}
=======
        
        {moreButton && moreButton}

>>>>>>> 0251baf287c2d3993eec33f9c8f71397add61447
        <Button
          variant="contained"
          size="small"
          className={`ml-20 ${`button.extraClasses`}`}
          /* onClick={button.handleOnClick} */
        >
          label
        </Button>

        <ButtonGroup variant="contained" /* size="small" */ className="ml-15">

          <Button /* onClick={button.handleOnClick} */>label</Button>
          <Button /* onClick={button.handleOnClick} */>label</Button>
          <Button /* onClick={button.handleOnClick} */>label</Button>

        </ButtonGroup>
      </div>
    </div>
  );
};

export default withRouter(PageTitleBar);
