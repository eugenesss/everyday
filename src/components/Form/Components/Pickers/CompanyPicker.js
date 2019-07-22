/**
 * Company Picker in form
 *
 * Requires: handleChange function / value of state / field to target change
 *
 * handleChange func
 * value: state
 * target: string
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

import { getAllAccount } from "Actions";

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input
        },
        ...other
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

const styles = theme => ({
  suggestionsContainerOpen: {
    marginTop: theme.spacing(1)
  },
  suggestion: {
    // display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  }
});

class CompanyPicker extends Component {
  state = {
    value: "",
    suggestions: []
  };

  componentDidMount() {
    this.props.getAllAccount();
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.props.handleChange(this.props.target, newValue);
  };

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
    return inputLength === 0
      ? []
      : this.props.tableData.filter(suggestion => {
          const keep =
            count < 5 &&
            suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;
          if (keep) {
            count += 1;
          }
          return keep;
        });
  }

  render() {
    const { classes, value } = this.props;
    return (
      <Autosuggest
        theme={{
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          classes,
          value: value,
          onChange: this.handleChange
        }}
      />
    );
  }
}

CompanyPicker.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ crmState }) => {
  const { accountState } = crmState;
  const { tableData } = accountState.accountList;
  return { tableData };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getAllAccount }
  )(CompanyPicker)
);
