import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import RecordsList from "Components/Everyday/RecordsList";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Refresh, PersonAdd, Delete, Edit } from "@material-ui/icons";

// import BgCard from "Components/Everyday/BgCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import AccessControl from "Components/AccessControl";

import { accessControlHelper } from "Helpers/accessControlHelper";

import AddUserDialog from "./AddUserDialog";
import UserControlDialog from "./UserControlDialog";
import {
  getAllUsers,
  showAddUser,
  hideAddUser,
  showUserControls,
  hideUserControls
} from "Actions";

const styles = () => ({
  icon: {
    height: 24,
    width: 24
  }
});

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  //Convert API to DataTable Array
  convertData(user) {
    var data = [];
    data.push(
      user.id,
      user.name,
      user.email,
      user.contact,
      //user.access.map( access => {return access.role.name + " (" + access.group.name + ")"}).join(", "),
      user
    );
    return data;
  }

  onClickReload = () => {
    this.props.getAllUsers();
  };
  onClickDelete = id => {
    console.log(id);
  };
  showActions() {
    if (
      accessControlHelper([
        "User:delete",
        "SuperAdmin:update",
        "Password:reset"
      ])
    )
      return "true";
    else return "false";
  }

  render() {
    const {
      classes,

      users,
      usersLoading,
      isAddUser,
      isUserControl,

      showAddUser,
      hideAddUser,
      showUserControls,
      hideUserControls
    } = this.props;

    const data = users && users.map(user => this.convertData(user));
    const columns = [
      {
        label: "ID",
        name: "id",
        options: { display: "excluded", filter: false, sort: false }
      },
      {
        label: "Name",
        name: "name",
        options: {
          customBodyRender: (value, tableMeta) => {
            return (
              <NavLink to={`/app/user/${tableMeta.rowData[0]}`}>
                {value}
              </NavLink>
            );
          }
        }
      },
      { label: "Email", name: "email" },
      { label: "Contact", name: "contact" },
      // {
      //   name: "Role",
      //   options: {
      //     customBodyRender: (value) => {
      //       return (
      //         <div>{value}</div>
      //       );
      //     }
      //   }
      // },
      {
        name: "Actions",
        options: {
          filter: false,
          // display: this.showActions(),
          display: true,
          customBodyRender: value => {
            return (
              <React.Fragment>
                {/* <AccessControl action={["User:delete"]}> */}
                <Tooltip id="tooltip-icon" title="Delete">
                  <IconButton
                    className="text-danger mr-2"
                    aria-label="Delete User"
                    onClick={() => {
                      this.onClickDelete(value);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
                {/* </AccessControl> */}
                {/* <AccessControl action={["SuperAdmin:update", "Password:reset"]}> */}
                <Tooltip id="tooltip-icon" title="More">
                  <IconButton
                    className="text-primary mr-2"
                    aria-label="More Options"
                    onClick={() => {
                      showUserControls(value);
                    }}
                  >
                    <Edit />
                  </IconButton>
                </Tooltip>
                {/* </AccessControl> */}
              </React.Fragment>
            );
          }
        }
      }
    ];
    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      sort: false,
      print: false,
      filter: false,
      download: false,
      viewColumns: false,
      selectableRows: false,
      elevation: 0,
      textLabels: { body: { noMatch: "No Users to display" } },
      customToolbar: () => {
        return (
          <React.Fragment>
            <Tooltip id="tooltip-icon" title="Refresh">
              <IconButton
                aria-label="Refresh List"
                onClick={() => {
                  this.onClickReload();
                }}
              >
                <Refresh />
              </IconButton>
            </Tooltip>
            <AccessControl action={["BaseUser:create"]}>
              <Tooltip id="tooltip-icon" title="Add User">
                <IconButton
                  className="mr-2"
                  aria-label="Add User"
                  onClick={() => {
                    showAddUser();
                  }}
                >
                  <PersonAdd />
                </IconButton>
              </Tooltip>
            </AccessControl>
          </React.Fragment>
        );
      }
    };
    return (
      <React.Fragment>
        <div className="rct-block">
          <RecordsList
            title={"Users"}
            columns={columns}
            data={data}
            options={options}
          />
          {usersLoading && <RctSectionLoader />}
        </div>
        <AddUserDialog open={isAddUser} handleClose={hideAddUser} />
        <UserControlDialog
          open={isUserControl}
          handleClose={hideUserControls}
        />
      </React.Fragment>
    );
  }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ usersState }) => {
  const { users, usersLoading, isAddUser, isUserControl } = usersState;
  return { users, usersLoading, isAddUser, isUserControl };
};

export default connect(
  mapStateToProps,
  { getAllUsers, showAddUser, hideAddUser, showUserControls, hideUserControls }
)(withStyles(styles)(UsersList));
