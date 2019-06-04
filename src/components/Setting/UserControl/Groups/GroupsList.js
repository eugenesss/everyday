import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars'
import { Col, Row } from "reactstrap";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from "@material-ui/core/IconButton";

import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { getAllGroups, onChangeSelectedGroup, onChangeSelectedGroupHierarchies, addGroup } from 'Actions'

const styles = theme => ({
  root: {
    width: "100%",
    padding: 10,
  },
  listItem: {
    paddingLeft: '0 !important',
    paddingRight: 0,
  },
  paper: {
    width: "100%",
    marginBottom: "calc(20vh)",
  },
  icon: {
    height: 24,
    width: 24,
   },
  block: {
    display: "block !important"
  }
});

class GroupsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllGroups()
  }

  onChange(group) {
    this.props.onChangeSelectedGroup(group);
    this.props.onChangeSelectedGroupHierarchies(group);
  }
  
  render() {
    const { 
      classes,

      groups,
      groupsLoading,
      selectedGroup,

      addGroup,
     } = this.props;

     return (
      <React.Fragment>
        <div className={classes.block}>
          <Row className={"d-flex align-items-center"}>
            <Col>
              <h2 className={"p-10 pt-20 pb-10 m-0 text-center"}>Groups</h2>
            </Col>
            <Col>
              <IconButton
                className="text-primary mt-10 mr-2 float-right"
                aria-label="Add Group"
                onClick={() => addGroup()}
              >
                <i className={"zmdi zmdi-plus " + classes.icon} />
              </IconButton>
            </Col>
          </Row>
          <Scrollbars
              className="rct-scroll"
              autoHeight
              autoHeightMin={'90vh'}
          >
            <List
              component="nav"
              className={classes.root}
            >
              {groups.map(group => (
                <ListItem 
                  key={group.id}
                  button
                  selected={selectedGroup ? selectedGroup.id == group.id : false}
                  onClick={() => this.onChange(group)}
                >
                  <ListItemText primary={group.name} className={classes.listItem}/>
                </ListItem>
              ))}
            </List>
          </Scrollbars>
          {groupsLoading && <RctSectionLoader/>}
        </div>
      </React.Fragment>
    )
  }
}

GroupsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ groupsState }) => {
  const { groups, selectedGroup, groupsLoading } = groupsState;
  return { groups, selectedGroup, groupsLoading };
};

export default connect(
  mapStateToProps,
  { getAllGroups, onChangeSelectedGroup, onChangeSelectedGroupHierarchies, addGroup }
)(withStyles(styles)(GroupsList));
