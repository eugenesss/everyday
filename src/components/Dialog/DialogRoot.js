import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const DialogRoot = ({
  show,
  handleHide,
  children,
  title,
  size,
  close,
  dialogAction
}) => {
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth={size}
        open={show}
        onClose={handleHide}
        aria-labelledby="max-width-dialog-title"
      >
        {title && (
          <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
        )}
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          {close ? (
            <Button onClick={handleHide} color="primary" variant="contained">
              Close
            </Button>
          ) : null}
          {dialogAction && dialogAction}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogRoot;
