import React from "react";
import ListItem from "@material-ui/core/ListItem";

const NoNoteDisplay = () => {
  return (
    <ListItem className="post-item align-items-center py-25 px-30">
      <div className="post-content mx-auto">
        <div className="post-info text-center">
          <h4 className="mb-5">No Notes to display</h4>
          <p>Start by creating one on the side</p>
        </div>
      </div>
    </ListItem>
  );
};

export default NoNoteDisplay;
