import React, { Component } from "react";
import { connect } from "react-redux";

class DateConvert extends Component {
  constructor(props) {
    super(props);
  }

  convertDate = (dd, mm, yyyy, d) => {
    var day;
    var date = dd;
    var month;
    var year = yyyy;
    switch (mm) {
      case 0:
        month = "Jan"
        break;
      case 1:
        month = "Feb"
        break;
      case 2:
        month = "Mar"
        break;
      case 3:
        month = "Apr"
        break;
      case 4:
        month = "May"
        break;
      case 5:
        month = "Jun"
        break;
      case 6:
        month = "Jul"
        break;
      case 7:
        month = "Aug"
        break;
      case 8:
        month = "Sep"
        break;
      case 9:
        month = "Oct"
        break;
      case 10:
        month = "Nov"
        break;
      case 11:
        month = "Dec"
        break;
    }
    switch (d) {
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
    return (
      day + " - " + date + " / " + month + " / " + year  
    )
  }
    render() {
      const { dd, mm, yyyy, d} = this.props
      return (
        <span>{this.convertDate(dd, mm, yyyy, d)}</span>
      )
    }
};

export default connect(
  null
)(DateConvert);