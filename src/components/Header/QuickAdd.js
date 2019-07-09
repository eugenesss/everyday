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
import { newLead, newCustomer, newAccount, newDeal } from "Helpers/url/crm";

// intl messages
import IntlMessages from "Util/IntlMessages";

const QuickLinks = ({ location }) => (
  <UncontrolledDropdown nav className="list-inline-item notification-dropdown">
    <DropdownToggle nav className="p-0">
      <Tooltip title="Quick Add" placement="bottom">
        <IconButton aria-label="bell">
          <i className="zmdi zmdi-plus text-white" />
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
          <div className="dropdown-top d-flex justify-content-between rounded-top bg-warning">
            <span className="text-white font-weight-bold">New</span>
          </div>
          <ul className="list-unstyled mb-0 dropdown-list">
            <li>
              <Link to={newLead}>
                <i className="zmdi zmdi-account-circle text-primary mr-10" />
                <IntlMessages id="sidebar.lead" />
              </Link>
            </li>
            <li>
              <Link to={newCustomer}>
                <i className="zmdi zmdi-accounts-outline text-primary mr-10" />
                <IntlMessages id="sidebar.customer" />
              </Link>
            </li>
            <li>
              <Link to={newAccount}>
                <i className="zmdi zmdi-city-alt text-primary mr-10" />
                <IntlMessages id="sidebar.account" />
              </Link>
            </li>
            <li>
              <Link to={newDeal}>
                <i className="text-primary zmdi zmdi-case mr-10" />
                <IntlMessages id="sidebar.deal" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/acct/new/quotation`}>
                <i className="zmdi zmdi-receipt text-success  mr-10" />
                <IntlMessages id="sidebar.quotation" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/acct/new/invoice`}>
                <i className="text-success zmdi zmdi-shopping-cart mr-10" />
                <IntlMessages id="sidebar.invoice" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/acct/new/payment`}>
                <i className="text-success zmdi zmdi-card mr-10" />
                <IntlMessages id="sidebar.payment" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/acct/new/credit_note`}>
                <i className="text-success zmdi zmdi-store mr-10" />
                <IntlMessages id="sidebar.credit_note" />
              </Link>
            </li>
          </ul>
        </div>
      </Scrollbars>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default withRouter(QuickLinks);
