import React, { Component } from "react";
import Popover from "@material-ui/core/Popover";

class CalendarPopover extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0, show: false, component: null };
    this.onMouseDownCapture = this.onMouseDownCapture.bind(this);
    this.hide = this.hide.bind(this);
  }

  // Axis for popover
  onMouseDownCapture(e) {
    this.setState({ x: e.pageX, y: e.pageY, show: !this.state.show });
  }

  // close popover
  hide() {
    this.setState({ show: false, component: null });
  }

  render() {
    const { x, y, show, component } = this.state;
    return (
      <React.Fragment>
        <div onMouseDownCapture={this.onMouseDownCapture}>{children}</div>
        <Popover
          id={"calendar-popover"}
          open={show}
          onClose={this.hide}
          anchorReference="anchorPosition"
          anchorPosition={{ top: y, left: x }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          elevation={2}
        >
          {component}
        </Popover>
      </React.Fragment>
    );
  }
}

export default CalendarPopover;
