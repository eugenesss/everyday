import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class NewNote extends Component {
  state = {
    name: "",
    content: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  clearNoteForm() {
    this.setState({ name: "", content: "" });
  }

  isDisabled(content) {
    if (content) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { handleAddNote } = this.props;
    return (
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          id="notename"
          label="Title"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="dense"
          variant="outlined"
        />
        <TextField
          id="noteContent"
          label="Content"
          multiline
          rows="9"
          value={this.state.content}
          onChange={this.handleChange("content")}
          fullWidth
          margin="dense"
          variant="outlined"
        />
        <div className="mt-30">
          <Button
            onClick={() => this.clearNoteForm()}
            className="mr-15 text-white"
            variant="contained"
            color="secondary"
          >
            Clear
          </Button>
          <Button
            color="primary"
            onClick={() => handleAddNote(this.state)}
            disabled={this.isDisabled(this.state.content)}
            variant="contained"
          >
            Add
          </Button>
        </div>
      </form>
    );
  }
}

export default NewNote;
