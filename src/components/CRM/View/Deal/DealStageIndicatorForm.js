import React, { Component } from "react";
import { connect } from "react-redux";
import { enqueueSnackbar, onUpdateDealViewDetail, editDeal } from "Actions";

//Components Req
import FormControl from "@material-ui/core/FormControl";
import AmountInput from "Components/Forms/AmountInput";
import DatePicker from "Components/Forms/DatePicker";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Edit } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

class DealStageIndicatorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountEntry: true,
      dateEntry: true
    };
  }
  handleEditAmountButton() {
    this.setState(state => ({ amountEntry: !state.amountEntry }));
  }
  handleEditDateButton() {
    this.setState(state => ({ dateEntry: !state.dateEntry }));
  }

  handleChange(field, value) {
    this.props.onUpdateDealViewDetail(field, value);
  }

  handleSaveAmount() {
    this.setState({ amountEntry: true });
    this.props.editDeal(this.props.dealView);
    this.props.enqueueSnackbar({
      message: "Deal Amount Updated",
      options: {
        variant: "success"
      }
    });
  }
  handleSaveDate() {
    this.setState({ dateEntry: true });
    this.props.editDeal(this.props.dealView);
    this.props.enqueueSnackbar({
      message: "Closing Date Updated",
      options: {
        variant: "success"
      }
    });
  }
  render() {
    const { amountEntry, dateEntry } = this.state;
    const { dealView } = this.props;
    return (
      <div className="pl-10">
        <h3>Indicators</h3>
        <div className="row mt-30 mb-30">
          <div className="col-md-8">
            <FormControl fullWidth>
              {/*  <InputLabel htmlFor="amount">Deal Amount</InputLabel> */}
              <AmountInput
                label="Deal Amount"
                disabled={amountEntry}
                value={dealView.amount}
                onChange={e => this.handleChange("amount", e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {amountEntry && (
                        <IconButton
                          aria-label="Toggle amount edit"
                          onClick={() => this.handleEditAmountButton()}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                      )}
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          </div>
          <div className="col-md-4">
            {!amountEntry && (
              <div>
                <Button
                  variant="contained"
                  size="small"
                  color="default"
                  className="text-white mr-10 mb-10"
                  onClick={() => this.handleEditAmountButton()}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="text-white mr-10 mb-10"
                  onClick={() => this.handleSaveAmount()}
                >
                  Save
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="row mt-30 mb-30">
          <div className="col-md-8">
            <FormControl fullWidth>
              <DatePicker
                disabled={dateEntry}
                onChange={date =>
                  this.handleChange("closedOn", date.format("YYYY-MM-DD"))
                }
                value={dealView.closedOn}
                InputProps={{
                  endAdornment: dateEntry && (
                    <InputAdornment position="end">
                      <IconButton
                        style={{ marginBottom: "30px" }}
                        aria-label="Toggle closing date edit"
                        onClick={() => this.handleEditDateButton()}
                      >
                        <Edit fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          </div>
          <div className="col-md-4">
            {!dateEntry && (
              <div>
                <Button
                  variant="contained"
                  size="small"
                  color="default"
                  className="text-white mr-10 mb-10"
                  onClick={() => this.handleEditDateButton()}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="text-white mr-10 mb-10"
                  onClick={() => this.handleSaveDate()}
                >
                  Save
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ deal }) => {
  const { dealView } = deal;
  return { dealView };
};

export default connect(
  mapStateToProps,
  { enqueueSnackbar, onUpdateDealViewDetail, editDeal }
)(DealStageIndicatorForm);
