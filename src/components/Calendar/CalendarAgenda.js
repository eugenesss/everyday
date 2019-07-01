import React from "react";

import BigCalendar from 'react-big-calendar';


// filteredEvents = showEvents.filter(e => {
//   if (e.start.toDateString() === tomorrow.toDateString() + 1) {
//     filteredEvents.push(e)
//   }
// })


const CalendarAgenda = ({showEvents, classes, defaultDate}) => {
    var today = new Date
    var tomorrow = new Date
    var dayAftTom = new Date
    var date
    tomorrow.setDate(today.getDate() + 1)
    dayAftTom.setDate(today.getDate() + 2)
    switch (defaultDate) {
      case "today":
        date = today
        break;
      case "tomorrow":
        date = tomorrow
        break;
      case "dayAftTom":
        date = dayAftTom
        break;
    }
    
    return (
      <React.Fragment>
        <BigCalendar
          events={showEvents}
          className={classes.textField + " " + classes.agendaToday}
          defaultView={"agenda"}
          views={["agenda"]}
          toolbar={false}
          length={0}
          defaultDate={date}
        />
      </React.Fragment>
    )
};

export default CalendarAgenda