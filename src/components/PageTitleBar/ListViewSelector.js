import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const ListViewSelector = ({
  dropdownOpen,
  toggle,
  options,
  nowShowing,
  onChangeValue
}) => {
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{nowShowing}</DropdownToggle>
      <DropdownMenu>
        {options.map((opt, key) => {
          return (
            <DropdownItem
              style={{ padding: "0.45rem 1.5rem" }}
              onClick={() => onChangeValue(opt)}
              key={key}
            >
              {opt}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ListViewSelector;
