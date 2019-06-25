import React from "react";
import { connectModal } from "redux-modal";

import DialogRoot from "Components/Dialog/DialogRoot";
import Button from "@material-ui/core/Button";

const DeleteDialog = props => {
  function handleDelete() {
    props.action();
    props.handleHide();
  }
  const { show, handleHide, name } = props;
  return (
    <DialogRoot
      show={show}
      handleHide={handleHide}
      size="sm"
      title="Delete"
      close={handleHide}
      dialogAction={
        <Button
          onClick={handleDelete}
          className="bg-danger text-white"
          variant="contained"
        >
          Yes, I want to delete
        </Button>
      }
    >
      <p className="fs-18">
        Are you sure you want to delete the record "{name}"?
      </p>
    </DialogRoot>
  );
};
export default connectModal({ name: "delete_dialog" })(DeleteDialog);
