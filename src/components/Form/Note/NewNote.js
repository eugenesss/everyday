import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";
import Button from "@material-ui/core/Button";

class NewNote extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  clearNoteForm() {
    this.setState({ title: "", content: "" });
  }

  isDisabled(content) {
    if (content) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div>
        <TabsHeader title="New Note" />
        <form className="pr-40" noValidate autoComplete="off">
          <TextField
            id="noteTitle"
            label="Title"
            className="w-40"
            value={this.state.title}
            onChange={this.handleChange("title")}
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="noteContent"
            label="Content"
            multiline
            rows="3"
            value={this.state.content}
            onChange={this.handleChange("content")}
            className="w-100"
            margin="dense"
            variant="outlined"
          />
          <div className="mt-30">
            <Button
              onClick={() => this.clearNoteForm()}
              className="mr-15"
              variant="contained"
            >
              Clear
            </Button>
            <Button
              color="primary"
              disabled={this.isDisabled(this.state.content)}
              variant="contained"
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewNote;
