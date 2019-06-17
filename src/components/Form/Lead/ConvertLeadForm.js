import React, { Component } from "react";
import { connect } from "react-redux";

// Form Components
import TextField from "@material-ui/core/TextField";
import AmountInput from "Components/Form/Components/Inputs/AmountInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import {
  unmountConvertLead,
  handleChangeConvertLead,
  getDealStage
} from "Actions";

class ConvertLeadForm extends Component {
  componentWillMount() {
    this.props.getDealStage();
  }

  render() {
    const { dealDetails } = this.props.leadToConvert;
    const { dealStage } = this.props;
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
              value={dealDetails.stageId ? dealDetails.stageId : ""}
              onChange={e =>
                this.props.handleChangeConvertLead("stageId", e.target.value)
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
  const { leadState, crmField } = crmState;
  const { leadToConvert } = leadState;
  const { dealStage } = crmField;
  return { leadToConvert, dealStage };
};

export default connect(
  mapStateToProps,
  { unmountConvertLead, handleChangeConvertLead, getDealStage }
)(ConvertLeadForm);
