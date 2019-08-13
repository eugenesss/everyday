import React from "react";
import BigCalendar from "react-big-calendar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "auto",
    minHeight: "200px",
    height: "200px"
  },
  agendaToday: {
    backgroundColor: "primary"
  },
  agendaTomorrow: {
    backgroundColor: "warning"
  },
  agandaDayAft: {
    backgroundColor: "success"
  }
}));

function CalendarAgenda(props) {
  const classes = useStyles();
  const { showEvents, defaultDate } = props;
  var today = new Date();
  var tomorrow = new Date();
  var dayAftTom = new Date();
  var date;
  var bgClass;
  tomorrow.setDate(today.getDate() + 1);
  dayAftTom.setDate(today.getDate() + 2);
  switch (defaultDate) {
    case "today":
      date = today;
      bgClass = classes.agendaToday;
      break;
    case "tomorrow":
      date = tomorrow;
      bgClass = classes.agendaTomorrow;
      break;
    case "dayAftTom":
      date = dayAftTom;
      bgClass = classes.agendaDayAft;
      break;
  }
  return (
    <BigCalendar
      events={showEvents}
      className={classes.root + " " + bgClass}
      defaultView={"agenda"}
      views={["agenda"]}
      toolbar={false}
      length={0}
      defaultDate={date}
    />
  );
}

export default CalendarAgenda;
