import React from "react";
import { NavLink } from "react-router-dom";
import IntlMessages from "Util/IntlMessages";

// actions
import { actionbar } from "./NavLinks";
import Button from "@material-ui/core/Button";
import { MoreHoriz, Add } from "@material-ui/icons";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function SubNav(props) {
  const { childRoutes } = props;
  return (
    <div className="sub-menu justify-content-between">
      <ul className="list-unstyled nav">
        {childRoutes.length > 0 &&
          childRoutes.map((link, key) => (
            <li className="nav-item" key={key}>
              <NavLink
                to={link.path}
                className="nav-link no-arrow"
                activeClassName="active"
              >
                <IntlMessages id={link.title} />
              </NavLink>
            </li>
          ))}
      </ul>
      <div className="action-bar list-inline mb-0">
        <Button /* size="small" */ className="ml-20 bg-success text-white">
          Convert
        </Button>
        <ButtonGroup /* size="small" */ className="ml-15">
          <Button>Import</Button>
          <Button>
            <Add style={{ fontSize: "1rem" }} />
          </Button>
          <Button>
            <MoreHoriz style={{ fontSize: "16px" }} />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
