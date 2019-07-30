/**
 * Rct Horizontal Menu Layout
 */
import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

// Components
import NavBar from "Components/NavBar";

class RctHorizontalLayout extends Component {
  renderPage() {
    const { children } = this.props;
    return (
      <Scrollbars
        className="rct-scroll"
        autoHide
        autoHideDuration={100}
        style={{ height: "calc(100vh - 100px)" }}
      >
        <div className="rct-page-content">
          {children}
          {/* <Footer /> */}
        </div>
      </Scrollbars>
    );
  }

  render() {
    return (
      <div className="app-horizontal collapsed-sidebar">
        <div className="app-container">
          <div className="rct-page-wrapper">
            <div className="rct-app-content">
              <div className="app-header">
                <NavBar />
              </div>
              <div className="rct-page">{this.renderPage()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RctHorizontalLayout;
