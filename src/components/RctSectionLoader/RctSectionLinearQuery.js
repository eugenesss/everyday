import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

const RctSectionLoader = () => (
  <div className="loader-overlay">
    <LinearProgress variant="query" />
  </div>
);

export default RctSectionLoader;
