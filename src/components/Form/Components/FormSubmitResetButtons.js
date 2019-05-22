import React from "react";
import MatButton from "@material-ui/core/Button";

const FormSubmitResetButtons = ({ onReset, onSubmit, disabled }) => {
  return (
    <div className="d-block">
      <MatButton
        variant="contained"
        color="default"
        className="text-secondary mr-20"
        onClick={() => onReset()}
      >
        Reset
      </MatButton>
      <MatButton
        variant="contained"
        color="primary"
        className="text-white"
        onClick={() => onSubmit()}
        disabled={!disabled}
      >
        Submit
      </MatButton>
    </div>
  );
};

export default FormSubmitResetButtons;
