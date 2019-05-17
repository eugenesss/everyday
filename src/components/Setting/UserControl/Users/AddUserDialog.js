import React from "react";

import DialogRoot from "Components/Dialog/DialogRoot";
import AddUserForm from "Components/Form/Setting/General/AddUserForm";


const AddUserDialog = ({handleClose, open}) => {
  return (
    <DialogRoot
      show={open}
      handleHide={handleClose}
      size="md"
      title="Add User"
    >
      <AddUserForm/>
    </DialogRoot>
  );
}



export default AddUserDialog;