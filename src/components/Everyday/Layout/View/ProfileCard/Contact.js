import React from "react";
import Avatar from "Components/Everyday/Avatar";
import { Call, Email, Language } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, Fab } from "@material-ui/core";

const useStyles = makeStyles({
  fab: {
    boxShadow: "none",
    marginRight: "1.5rem"
  },
  icon: {
    fontSize: "1rem"
  }
});

function Contact(props) {
  const classes = useStyles();
  const { name, subHeading, noAvatar, call, email, website } = props;
  return (
    <div className="profile-card-header">
      <div className="media">
        {!noAvatar && (
          <div className="media-left mr-25">
            <Avatar name={name} size={100} customClasses="d-inline-block" />
          </div>
        )}
        <div className="profile-title media-body my-auto">
          <h2 className="mb-5">{name}</h2>
          <span>{subHeading}</span>
        </div>
      </div>
      <div className="d-flex text-center mt-30">
        {call && (
          <Tooltip id="tooltip-icon" title="Call">
            <Fab
              className={classes.fab}
              color="default"
              size="small"
              href={`tel:${call}`}
            >
              <Call className={classes.icon} />
            </Fab>
          </Tooltip>
        )}
        {email && (
          <Tooltip id="tooltip-icon" title="Email">
            <Fab
              className={classes.fab}
              color="default"
              size="small"
              href={`mailto:${email}`}
            >
              <Email className={classes.icon} />
            </Fab>
          </Tooltip>
        )}
        {website && (
          <Tooltip id="tooltip-icon" title="Visit Website">
            <Fab
              className={classes.fab}
              color="default"
              size="small"
              href={`http://${website}`}
              target="_blank"
            >
              <Language className={classes.icon} />
            </Fab>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

export { Contact };
