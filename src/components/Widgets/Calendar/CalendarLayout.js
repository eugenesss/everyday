import React, {Component} from 'react'
import { connect } from "react-redux";
import { getAllEvents } from "Actions";


import Calendar from 'react-calendar'
import DisplayEvents from './DisplayEvents'
import Moment from 'moment';

class CalendarLayout extends Component {

    componentDidMount() {
        this.props.getAllEvents(true, new Date().toISOString(), Moment(new Date()).add(7, 'day').toISOString());
    }


    render() {
      // console.log(new Date().toTimeString())
      // console.log(new Date().toISOString())
      // console.log(new Date().toISOString())

        return (
            <div style={{display:'flex', flexDirection:'column'}}>
                <Calendar
                    returnValue="range"
                    value = {[new Date(), new Date(Moment(new Date()).add(7, 'day'))]}
                />
                <DisplayEvents
                    myEvents={this.props.myEvents.length > 0? this.props.myEvents : []}
                />
            </div>
        )
    }
}



// map state to props
const mapStateToProps = ({ calendarState }) => {
    const {
      myEvents
    } = calendarState;
    return {
      myEvents
    };
  };
  
  export default connect(
    mapStateToProps,
    {
      getAllEvents,
    }
  )(CalendarLayout);
  

 
  // {"where": {"start": {"lt": "2019-07-18T02:38:03.197Z"}}}

  // :