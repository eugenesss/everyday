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
  }
  componentWillMount() {
    this.props.getAllUsers();
  }

  onChange(field, val) {
    this.setState({ [field]: val });
  }
  render() {
    const { show, handleHide, users, action, name } = this.props;
    return (
      <DialogRoot
        title="Transfer Record"
        size="sm"
        show={show}
        handleHide={handleHide}
      >
        <div className="row">
          <div className="col-3">New Owner</div>
          <div className="col-9">
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
