import React from "react";
import List from "@material-ui/core/List";
import { Scrollbars } from "react-custom-scrollbars";
import SingleNote from "./SingleNote";

const DisplayAllNotes = ({ notesData, onClickEdit, onClickDelete, action }) => {
  return (
    <div className="blog-list-wrap">
      <Scrollbars
        className="rct-scroll"
        autoHeight
        autoHeightMin={100}
        autoHeightMax={600}
        autoHide
      >
        <List className="p-0">
          <SingleNote /* note onClickEdit onClickDelete action */ />
          <SingleNote /* note onClickEdit onClickDelete action */ />
          <SingleNote /* note onClickEdit onClickDelete action */ />
          <SingleNote /* note onClickEdit onClickDelete action */ />
          <SingleNote /* note onClickEdit onClickDelete action */ />
          <SingleNote /* note onClickEdit onClickDelete action */ />
          <SingleNote /* note onClickEdit onClickDelete action */ />
        </List>
      </Scrollbars>
    </div>
  );
};

export default DisplayAllNotes;
