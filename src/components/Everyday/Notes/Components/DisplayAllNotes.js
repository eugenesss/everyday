import React from "react";
import List from "@material-ui/core/List";
import { Scrollbars } from "react-custom-scrollbars";
import SingleNote from "./SingleNote";
import NoNoteDisplay from "./NoNoteDisplay";

const DisplayAllNotes = ({ notes, onClickEdit, onClickDelete, action }) => {
  return (
    <div className="blog-list-wrap">
      <Scrollbars
        className="rct-scroll"
        autoHeight
        autoHeightMin={600}
        autoHeightMax={800}
      >
        <List className="p-0">
          {notes && notes.length > 0 ? (
            notes.map((note, key) => {
              return (
                <SingleNote
                  key={key}
                  note={note} /* note onClickEdit onClickDelete action */
                />
              );
            })
          ) : (
            <NoNoteDisplay />
          )}
        </List>
      </Scrollbars>
    </div>
  );
};

export default DisplayAllNotes;
