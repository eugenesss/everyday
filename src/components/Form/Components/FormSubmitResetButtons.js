import React from "react";
import MatButton from "@material-ui/core/Button";

const FormSubmitResetButtons = ({ onReset, onSubmit, disabled }) => {
  return (
    <div className="row mb-30">
      <div className="col-md-10" />
      <div className="col-md-2 text-right">
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
      </div>
    </div>
  );
};

export default FormSubmitResetButtons;
