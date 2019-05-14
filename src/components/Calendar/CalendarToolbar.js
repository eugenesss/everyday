import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import { convertMonth, convertDay } from "Helpers/helpers";

import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Chip from '@material-ui/core/Chip';


const CalendarToolbar = (toolbar) => {
  var today = new Date()

  const goToToday = () => {
    toolbar.onNavigate('TODAY');
  }
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  }
  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  }
    return (
      <React.Fragment>
        {toolbar.view == "day" ? (
          <div className="toolbar-container mb-10">
            <Row>
              <Col>
                <Button variant="contained" color="primary" onClick={goToToday} className="mr-10">
                  Today
                </Button>
                <Chip label={
                   convertDay(today.getDay()) + " - " +
                   today.getDate() + " / " + 
                   convertMonth(today.getMonth()) + " / " + 
                   today.getFullYear()
                } variant="outlined" />
              </Col>
              <Col>
                <h2 className="text-right">{toolbar.label}</h2>
              </Col>
            </Row>
          </div>
        ) : (
          <div className="toolbar-container mb-10">
            <Row>
              <Col>
                <Button variant="contained" color="primary" onClick={goToToday} className="mr-10">
                  Today
                </Button>
                <Chip label={
                  convertDay(today.getDay()) + " - " +
                  today.getDate() + " / " + 
                  convertMonth(today.getMonth()) + " / " + 
                  today.getFullYear()
                } variant="outlined" />
              </Col>
              <Col>
                <h2 className="text-center">{toolbar.label}</h2>
              </Col>
              <Col>
                <div className="navigation-buttons float-right">
                  <Tooltip title="Previous">
                    <Fab
                      size="small"
                      color="primary"
                      variant="extended"
                      className="text-white mr-15"
                      aria-haspopup="true"
                      onClick={goToBack}
                    >
                      <i className="material-icons">navigate_before</i>
                    </Fab>
                  </Tooltip>
                  <Tooltip title="Next">
                    <Fab
                      size="small"
                      color="primary"
                      variant="extended"
                      className="text-white mr-15"
                      onClick={goToNext}
                    >
                      <i className="material-icons">navigate_next</i>
                    </Fab>
                  </Tooltip>
                  
                </div>
              </Col>
            </Row>
          </div>
        )}
        
      </React.Fragment>
    )
};

export default connect(
  null
)(CalendarToolbar);