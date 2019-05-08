import React from "react";
import Icon from '@material-ui/core/Icon';
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Chip from '@material-ui/core/Chip';


const CalendarToolbar = (toolbar) => {
  var convertDate = () => {
    var today = new Date()
    var date = today.getDate();
    var year = today.getFullYear();
    var month;
    switch (today.getMonth() + 1) {
      case 1:
        month = "Jan"
        break;
      case 2:
        month = "Feb"
        break;
      case 3:
        month = "Mar"
        break;
      case 4:
        month = "Apr"
        break;
      case 5:
        month = "May"
        break;
      case 6:
        month = "Jun"
        break;
      case 7:
        month = "Jul"
        break;
      case 8:
        month = "Aug"
        break;
      case 9:
        month = "Sep"
        break;
      case 10:
        month = "Oct"
        break;
      case 11:
        month = "Nov"
        break;
      case 12:
        month = "Dec"
        break;
    }
    var day;
    switch (today.getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
         day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    return (day + " - " + date + " / " + month + " / " + year)
  }

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
                  <Chip label={convertDate()} variant="outlined" />
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
                <Chip label={convertDate()} variant="outlined" />
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