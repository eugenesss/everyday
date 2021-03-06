import React, { PureComponent } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import BgCard from "Components/Everyday/BgCard";
import BaseInput from "Components/Form/Components/BaseInput";
import Avatar from "Components/Everyday/Avatar";

// card component
import { RctCardFooter } from "Components/RctCard";
import { Fab } from "@material-ui/core";
import {
  Edit,
  DeleteOutline,
  CalendarToday,
  AccessTime,
  PersonOutline
} from "@material-ui/icons";

import { getTheDate, getTheTime } from "Helpers/helpers";

export default class Comments extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState(prevState => ({ ...prevState, content: value }));
  }

  render() {
    const { content } = this.state;
    const { comments, addComment } = this.props;
    return (
      <BgCard heading="Notes" fullBlock>
        <Scrollbars
          className="rct-scroll blog-list-wrap"
          autoHeight
          autoHeightMin={100}
          autoHeightMax={400}
          autoHide
        >
          <List className="aqua-ripple p-0">
            {comments.length > 0 ? (
              comments.map((comment, key) => (
                <ListItem
                  key={key}
                  button
                  className="post-item align-items-center justify-content-between py-25 px-30"
                >
                  <div className="post-content d-flex align-items-center">
                    <div className="post-img mr-10">
                      <Avatar
                        name={
                          comment.creatorInfo ? comment.creatorInfo.name : "U"
                        }
                        size={40}
                      />
                    </div>
                    <div className="post-info">
                      <h4 className="mb-5">{comment.name}</h4>
                      <p className="mb-5">{comment.content}</p>
                      <div className="meta-info d-flex text-muted mt-10">
                        <p className="mr-15 mb-0 d-inline-block">
                          <CalendarToday
                            fontSize="inherit"
                            style={{ marginRight: "5px" }}
                          />
                          {getTheDate(comment.createdAt)}
                        </p>
                        <p className="mr-15 mb-0 d-inline-block">
                          <AccessTime
                            fontSize="inherit"
                            style={{ marginRight: "5px" }}
                          />
                          {getTheTime(comment.createdAt)}
                        </p>
                        <p className="mr-15 mb-0 d-inline-block">
                          <PersonOutline
                            fontSize="inherit"
                            style={{ marginRight: "5px" }}
                          />
                          {comment.creatorInfo && comment.creatorInfo.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex hover-action">
                    <Fab variant="round" size="small" className="m-5">
                      <Edit style={{ fontSize: "1rem" }} />
                    </Fab>
                    <Fab variant="round" size="small" className="m-5">
                      <DeleteOutline style={{ fontSize: "1rem" }} />
                    </Fab>
                  </div>
                </ListItem>
              ))
            ) : (
              <div className="text-center py-20">
                <p>No Notes</p>
              </div>
            )}
          </List>
        </Scrollbars>
        <RctCardFooter customClasses="d-flex justify-content-between align-items-center rounded-bottom">
          <BaseInput
            value={content}
            onChange={e => this.onChange(e.target.value)}
            placeholder="Enter your notes here"
            rows={4}
          />
          <Button
            variant="outlined"
            onClick={() => addComment(this.state)}
            disabled={!this.state.content}
            className="ml-20 btn-xs"
          >
            Post
          </Button>
        </RctCardFooter>
      </BgCard>
    );
  }
}
