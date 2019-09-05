import React from "react";

import BgCard from "Components/Everyday/BgCard";
import RecordsList from "Components/Everyday/RecordsList";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { PersonAdd, Edit } from "@material-ui/icons";

import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import { listOptions } from "Helpers/helpers";

const UsersList = ({ tableData, loading, action }) => {
  const columns = [
    {
      label: "Name",
      name: "name"
    },
    { label: "Email", name: "email" },
    {
      label: "Mobile",
      name: "baseContact",
      options: { customBodyRender: value => (value ? value.mobile : "") }
    },
    {
      label: "Actions",
      name: "id",
      options: {
        filter: false,
        customBodyRender: value => {
          return (
            <React.Fragment>
              <Tooltip id="tooltip-icon" title="Edit Role">
                <IconButton
                  aria-label="More Options"
                  onClick={() => {
                    action.openUserControlDialog(value);
                  }}
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Tooltip>
            </React.Fragment>
          );
        }
      }
    }
  ];

  listOptions.viewColumns = false;
  listOptions.customToolbar = () => (
    <Tooltip id="tooltip-icon" title="Add User">
      <IconButton
        className="mr-2"
        aria-label="Add User"
        onClick={action.openAddUserDialog}
      >
        <PersonAdd />
      </IconButton>
    </Tooltip>
  );
  return (
    <BgCard fullBlock>
      <RecordsList
        title={"All Users"}
        columns={columns}
        data={tableData}
        options={listOptions}
      />
      {loading && <RctSectionLoader />}
    </BgCard>
  );
};

export default UsersList;
