import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { Fab } from "@material-ui/core";
import Avatar from "Components/Everyday/Avatar";

//Helper
import { getTheDate, getTheTime } from "Helpers/helpers";

const SingleNote = ({ note, onClickEdit, onClickDelete, action }) => {
  return (
    <ListItem
      button
      className="post-item align-items-center justify-content-between py-25 px-30"
    >
      <div className="post-content d-flex">
        <div className="post-img mr-10">
          <Avatar
            name={note.creatorInfo ? note.creatorInfo.name : "U"}
            size={40}
          />
        </div>
        <div className="post-info">
          <h4 className="mb-5">{note.name}</h4>
          <p className="mb-5">{note.content}</p>
          <div className="meta-info fs-12 text-muted mb-5">
            <div className="d-inline-block">
              <span className="mr-10 d-inline-block">
                <i className="zmdi zmdi-calendar mr-5" />
                {getTheDate(note.createdAt)}
              </span>
              <span className="mr-10 d-inline-block">•</span>
            </div>
            <span className="mr-10 d-inline-block">
              <i className="zmdi zmdi-time mr-5" />
              {getTheTime(note.createdAt)}
            </span>
            <span className="mr-10 d-inline-block">•</span>
            <span className="mr-15 d-inline-block">
              <p className="mb-0 fs-12 text-muted">
                <i>{note.creatorInfo && note.creatorInfo.name}</i>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex hover-action">
        <Fab
          variant="round"
          size="small"
          className="btn-primary text-white m-5"
        >
          <i className="zmdi zmdi-edit" />
        </Fab>
        <Fab variant="round" size="small" className="btn-danger text-white m-5">
          <i className="zmdi zmdi-delete" />
        </Fab>
      </div>
    </ListItem>
  );
};

export default SingleNote;
