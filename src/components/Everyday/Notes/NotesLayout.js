import React from "react";
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "./Components/DisplayAllNotes";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";

const NotesLayout = ({ handleAddNote, allNotes }) => {
  return (
    <div className="row no-gutters" style={{ backgroundColor: "#e6e6e6" }}>
      <div className="col-3 pb-40">
        <TabsHeader title="New Note" customClasses="bg-dark" />
        <div className="px-20 mt-60">
          <NewNote handleAddNote={handleAddNote} />
        </div>
      </div>
      <div className="col-9 bg-white">
        <DisplayAllNotes notes={allNotes} />
      </div>
    </div>
  );
};

export default NotesLayout;
