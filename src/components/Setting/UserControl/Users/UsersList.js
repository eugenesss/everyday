import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

//Page req
import MUIDataTable from "mui-datatables";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import AddUserDialog from "Components/Setting/UserControl/Users/AddUserDialog"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { getAllUsers, showAddUser, hideAddUser } from "Actions";

const styles = theme => ({
  icon: {
   height: 24,
   width: 24,
  }
});

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllUsers()
  }

  //Convert API to DataTable Array
  convertData(user) {
    var data = [];
    data.push(
      user.id,
      user.fullName,
      user.email,
      user.contact,
      user.role,
      user
    );
    return data;
  }

  onClickReload = () => {
    console.log("reload")
  }
  onClickDelete = (user) => {
    console.log(user)
  }

  render() {
    const { 
      classes,

      users, 
      usersLoading, 
      isAddUser,
      userToAdd,

      showAddUser,
      hideAddUser,
     } = this.props;
    const data = users && users.map(user => this.convertData(user));
    const columns = [
      {
        name: "ID",
        options: { display: "excluded", filter: false, sort: false }
      },
      {
        name: "Name",
        options: {
          customBodyRender: (value, tableMeta) => {
            return (
              // <NavLink to={`user/${tableMeta.rowData[0]}`}>{value}</NavLink>
              <div>{value}</div>
            );
          }
        }
      },
      { name: "Email" },
      { name: "Contact" },
      {
        name: "Role",
        options: {
          customBodyRender: (value) => {
            return (
              <div>{value}</div>
            );
          }
        }
      },
      {
        name: "Actions",
        options: {
          filter: false,
          customBodyRender: value => {
            return (
              <React.Fragment>
                <Tooltip id="tooltip-icon" title="Delete">
                  <IconButton
                    className="text-danger mr-2"
                    aria-label="Delete User"
                    onClick={() => {
                      this.onClickDelete(value);
                    }}
                  >
                    <i className="zmdi zmdi-delete" />
                  </IconButton>
                </Tooltip>
                
              </React.Fragment>
            );
          }
        }
      }
    ];
    const options = {
      filterType: "dropdown",
      filter: false,
      sort: false,
      responsive: "scroll",
      selectableRows: false,
      download: false,
      print: false,
      textLabels: { body: { noMatch: "No Users to display" } },
      customToolbar: () => {
        return (
          <React.Fragment>
            <Tooltip id="tooltip-icon" title="Refresh">
              <IconButton
                className="text-secondary"
                aria-label="Refresh List"
                onClick={() => {
                  this.onClickReload();
                }}
              >
                <i className={"zmdi zmdi-refresh " + classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip id="tooltip-icon" title="Add User">
            <IconButton
              className="text-secondary mr-2"
              aria-label="Add User"
              onClick={() => { showAddUser() }}
            >
              <i className={"zmdi zmdi-account-add " + classes.icon} />
            </IconButton>
          </Tooltip>
        </React.Fragment>
        );
      }
    };
    return (
      <RctCollapsibleCard fullBlock>
        <MUIDataTable
          title={"Users"}
          columns={columns}
          data={data}
          options={options}
        />
        <AddUserDialog
          open={isAddUser}
          handleClose={hideAddUser}
          userToAdd={userToAdd}
        />
        {usersLoading && <RctSectionLoader />}
      </RctCollapsibleCard>
    );
  }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ usersState }) => {
  const { users, usersLoading, isAddUser, userToAdd } = usersState;
  return { users, usersLoading, isAddUser, userToAdd };
};

export default connect(
  mapStateToProps,
  { getAllUsers, showAddUser, hideAddUser }
)(withStyles(styles)(UsersList));

