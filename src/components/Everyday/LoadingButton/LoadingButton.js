import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingButton = ({ loading, onClickFunc, color, label }) => {
  return (
    <Button
      variant="contained"
      className={`text-white bg-${color} mr-10 mb-10`}
      onClick={onClickFunc}
    >
      {loading ? <CircularProgress size={22} /> : label}
    </Button>
  );
};

export default LoadingButton;
