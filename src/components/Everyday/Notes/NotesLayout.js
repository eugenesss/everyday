import React from "react";
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "./Components/DisplayAllNotes";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";

const NotesLayout = ({ handleAddNote, allNotes }) => {
  return (
    <div className="row no-gutters">
      <div
        className="col-3"
        style={{ backgroundColor: "#e6e6e6", paddingBottom: "480px" }}
      >
        <TabsHeader title="New Note" customClasses="bg-dark" />
        <div className="px-20 mt-60">
          <NewNote handleAddNote />
        </div>
      </div>
      <div className="col-9">
        <DisplayAllNotes notes={allNotes} />
      </div>
    </div>
  );
};

export default NotesLayout;
