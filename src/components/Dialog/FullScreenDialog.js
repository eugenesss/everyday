import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const FullScreenDialog = ({ children, show, handleHide, title }) => {
  return (
    <Dialog
      fullScreen
      open={show}
      onClose={handleHide}
      TransitionComponent={Transition}
    >
      <AppBar style={{ position: "relative" }}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleHide} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" className="ml-10" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
};

export default FullScreenDialog;
