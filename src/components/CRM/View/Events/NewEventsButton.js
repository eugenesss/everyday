import React from "react";
import MatButton from "@material-ui/core/Button";

const NewEventsButton = ({ handleOnClick }) => {
  return (
    <MatButton onClick={handleOnClick} className="text-primary mb-10">
      + New Event
    </MatButton>
  );
};

export default NewEventsButton;
