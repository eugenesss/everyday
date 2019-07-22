import React from "react";
import MatButton from "@material-ui/core/Button";

const FormSubmitResetButtons = ({ onSubmit, onSaveNew, disabled }) => {
  return (
    <div className="row mb-30">
      <div className="col-md-10" />
      <div className="col-md-2 text-right">
        <div className="d-block">
          {onSaveNew && (
            <MatButton
              variant="contained"
              onClick={() => onSaveNew()}
              disabled={!disabled}
            >
              Save and New
            </MatButton>
          )}
          <MatButton
            variant="contained"
            color="primary"
            className="text-white ml-10"
            onClick={() => onSubmit()}
            disabled={!disabled}
          >
            Save
          </MatButton>
        </div>
      </div>
    </div>
  );
};

export default FormSubmitResetButtons;
