/**
 * Quick Links
 */
import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

// helpers
import { getAppLayout } from "Helpers/helpers";

// intl messages
import IntlMessages from "Util/IntlMessages";

const QuickLinks = ({ location }) => (
  <UncontrolledDropdown
    nav
    className="list-inline-item quciklink-dropdown tour-step-1"
  >
    <DropdownToggle nav className="p-0">
      <Tooltip title="Quick Links" placement="bottom">
        <IconButton aria-label="bell">
          <i className="zmdi zmdi-apps text-white" />
        </IconButton>
      </Tooltip>
    </DropdownToggle>
    <DropdownMenu>
      <Scrollbars
        className="rct-scroll"
        autoHeight
        autoHeightMin={100}
        autoHeightMax={350}
      >
        <div className="dropdown-content">
          <div className="dropdown-top d-flex justify-content-between rounded-top bg-primary">
            <span className="text-white font-weight-bold">Quick Links</span>
          </div>
          <ul className="list-unstyled mb-0 dropdown-list">
            <li>
              <Link to={`/${getAppLayout(location)}/crm/leads`}>
                <i className="zmdi zmdi-account-circle text-primary mr-10" />
                <IntlMessages id="sidebar.leads" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/crm/deals`}>
                <i className="zmdi zmdi-accounts-outline text-primary mr-10" />
                <IntlMessages id="sidebar.deals" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/acct/quotations`}>
                <i className="zmdi zmdi-city-alt text-success mr-10" />
                <IntlMessages id="sidebar.quotations" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/acct/invoices`}>
                <i className="text-success zmdi zmdi-case mr-10" />
                <IntlMessages id="sidebar.invoices" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/reports`}>
                <i className="text-info zmdi zmdi-chart mr-10" />
                <IntlMessages id="sidebar.reports" />
              </Link>
            </li>
          </ul>
        </div>
      </Scrollbars>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default withRouter(QuickLinks);
