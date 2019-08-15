import React from "react";
import MatButton from "@material-ui/core/Button";

const FormSubmitResetButtons = ({ onSubmit, onSaveNew, disabled, edit }) => {
  return (
    <div className="row mb-30">
      <div className="col-md-9" />
      <div className="col-md-3 text-right">
        <div className="d-block pr-20">
          {!edit && onSaveNew && (
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
            className="text-white ml-20"
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
