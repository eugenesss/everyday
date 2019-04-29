/**
 * Quick Links
 */
import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";

// helpers
import { getAppLayout } from "Helpers/helpers";

// intl messages
import IntlMessages from "Util/IntlMessages";

const QuickLinks = ({ location }) => (
  <UncontrolledDropdown
    nav
    className="list-inline-item quciklink-dropdown tour-step-1"
  >
    <DropdownToggle nav className="header-icon p-0">
      <Tooltip title="Quick Add" placement="bottom">
        <i className="zmdi zmdi-plus" />
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
            <span className="text-white font-weight-bold">Quick Add</span>
          </div>
          <ul className="list-unstyled mb-0 dropdown-list">
            <li>
              <Link to={`/${getAppLayout(location)}/crm/new/lead`}>
                <i className="zmdi zmdi-account-circle text-primary mr-10" />
                <IntlMessages id="sidebar.newLead" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/crm/new/customer`}>
                <i className="zmdi zmdi-accounts-outline text-primary mr-10" />
                <IntlMessages id="sidebar.newCustomer" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/crm/new/account`}>
                <i className="zmdi zmdi-city-alt text-primary mr-10" />
                <IntlMessages id="sidebar.newAccount" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/crm/new/deal`}>
                <i className="text-primary zmdi zmdi-case mr-10" />
                <IntlMessages id="sidebar.newDeal" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/acct/new/quotation`}>
                <i className="zmdi zmdi-receipt text-success  mr-10" />
                <IntlMessages id="sidebar.newQuotation" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/acct/new/invoice`}>
                <i className="text-success zmdi zmdi-shopping-cart mr-10" />
                <IntlMessages id="sidebar.newInvoice" />
              </Link>
            </li>
            <li>
              <Link to={`/${getAppLayout(location)}/acct/new/credit_note`}>
                <i className="text-success zmdi zmdi-store mr-10" />
                <IntlMessages id="sidebar.newCredit_note" />
              </Link>
            </li>
          </ul>
        </div>
      </Scrollbars>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default withRouter(QuickLinks);
