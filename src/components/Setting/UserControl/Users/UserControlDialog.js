import React from "react";

import DialogRoot from "Components/Dialog/DialogRoot";
import UserControlForm from "Components/Form/Setting/General/UserControlForm";

const UserControlDialog = ({ handleClose, show, userToEdit }) => {
  return (
    <DialogRoot
      show={show}
      handleHide={handleClose}
      //size="md"
      title="User Control Settings"
    >
      <UserControlForm userToEdit={userToEdit} />
    </DialogRoot>
  );
};

export default UserControlDialog;
