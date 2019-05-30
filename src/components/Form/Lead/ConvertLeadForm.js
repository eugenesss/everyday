import React, { Component } from "react";
import { connect } from "react-redux";

// Form Components
import TextField from "@material-ui/core/TextField";
import AmountInput from "Components/Form/Components/Inputs/AmountInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { unmountConvertLead, handleChangeConvertLead } from "Actions";

import { dealStage } from "Components/DummyData";

class ConvertLeadForm extends Component {
  state = {};
  render() {
    const { dealDetails } = this.props.leadToConvert;
    return (
      <div>
        <div className="form-group">
          <FormControl fullWidth>
            <AmountInput
              label="Deal Amount"
              onChange={e =>
                this.props.handleChangeConvertLead("amount", e.target.value)
              }
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
              onChange={e =>
                this.props.handleChangeConvertLead("name", e.target.value)
              }
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
              onChange={e =>
                this.props.handleChangeConvertLead(
                  "closingDate",
                  e.target.value
                )
              }
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
              value={dealDetails.stage ? dealDetails.stage : ""}
              onChange={e =>
                this.props.handleChangeConvertLead("stage", e.target.value)
              }
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
  }
}
const mapStateToProps = ({ crmState }) => {
  const { leadState } = crmState;
  const { leadToConvert } = leadState;
  return { leadToConvert };
};

export default connect(
  mapStateToProps,
  { unmountConvertLead, handleChangeConvertLead }
)(ConvertLeadForm);
