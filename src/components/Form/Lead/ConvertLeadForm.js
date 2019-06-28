import React from "react";

// Form Components
import TextField from "@material-ui/core/TextField";
import AmountInput from "Components/Form/Components/Inputs/AmountInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const ConvertLeadForm = ({ dealStage, dealDetails, handleChange }) => {
  return (
    <div>
      <div className="form-group">
        <FormControl fullWidth>
          <AmountInput
            value={dealDetails.amount}
            label="Deal Amount"
            onChange={e => handleChange("amount", e.target.value)}
          />
        </FormControl>
      </div>
      <div className="form-group">
        <FormControl fullWidth>
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            id="name"
            defaultValue={dealDetails.name}
            onChange={e => handleChange("name", e.target.value)}
            fullWidth
            label="Deal Name"
          />
        </FormControl>
      </div>
      <div className="form-group">
        <FormControl fullWidth>
          <TextField
            id="date"
            label="Closing Date"
            type="date"
            defaultValue={dealDetails.closingDate}
            onChange={e => handleChange("closingDate", e.target.value)}
            InputLabelProps={{
              shrink: true
            }}
          />
        </FormControl>
      </div>
      <div className="form-group">
        <FormControl fullWidth>
          <InputLabel shrink htmlFor="stage">
            Stage
          </InputLabel>
          <Select
            value={dealDetails.stageId ? dealDetails.stageId : ""}
            onChange={e => handleChange("stageId", e.target.value)}
          >
            {dealStage.map((stage, key) => {
              return (
                <MenuItem key={key} value={stage.id}>
                  {`${stage.name} - ${stage.chance}%`}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default ConvertLeadForm;
