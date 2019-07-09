import React, { Component } from "react";
import { connect } from "react-redux";
import { connectModal } from "redux-modal";
import DialogRoot from "Components/Dialog/DialogRoot";
import FormSelectField from "Components/Form/Components/FormSelectField";

// Actions
import { getAllUsers } from "Actions";

class TransferRecordModal extends Component {
  constructor(props) {
    super(props);
    this.state = { newOwner: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    this.props.getAllUsers();
  }
  onChange(field, val) {
    this.setState({ [field]: val });
  }
  onSubmit() {
    this.props.action(this.state.newOwner);
    this.props.handleHide();
  }

  render() {
    const { show, handleHide, users, name } = this.props;
    return (
      <DialogRoot
        title="Transfer Record"
        size="sm"
        show={show}
        handleHide={handleHide}
        dialogActionLabel="Transfer"
        dialogAction={this.onSubmit}
      >
        <div className="row">
          <div className="col">
            <p>
              Transfer <strong>{name}</strong> to another user.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-2 offset-md-1 align-self-center">
            <p className="mb-0">New Owner</p>
          </div>
          <div className="col-8 align-self-center">
            <FormSelectField
              value={this.state.newOwner}
              handleChange={this.onChange}
              target="newOwner"
              selectValues={users}
            />
          </div>
        </div>
      </DialogRoot>
    );
  }
}
const mapStateToProps = ({ usersState }) => {
  const { users } = usersState;
  return { users };
};

export default connect(
  mapStateToProps,
  { getAllUsers }
)(connectModal({ name: "transfer_record" })(TransferRecordModal));
