import React from "react";
import BgCard from "Components/Everyday/BgCard";
import TextField from "@material-ui/core/TextField";

const LeadDetailsTab = props => (
  <BgCard>
    <h3>Key Information</h3>
    <div className="row justify-content-start">
      <div className="col-3">
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          fullWidth
          defaultValue="Hello World"
          margin="dense"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <div className="col-3">
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          fullWidth
          defaultValue="Hello World"
          margin="dense"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
    </div>

    <p>Company Details</p>
    <p>Description Details</p>
  </BgCard>
);

export default LeadDetailsTab;
