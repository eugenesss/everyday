import React from "react";
import Avatar from "@material-ui/core/Avatar";

const IconAvatar = ({ fullName, size, customClasses }) => {
  var getInitials = fullName => {
    var names = fullName.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  var getFontSize = () => {
    if (size == "40") return "12px";
    else if (size == "60") return "18px";
    else if (size == "80") return "24px";
    else if (size == "100") return "26px";
    else if (size == "120") return "28px";
    else return "12px";
  };

  return (
    <Avatar
      className={`size-${size} rounded-circle ${customClasses}`}
      style={{ fontSize: getFontSize(), margin: "auto" }}
    >
      {getInitials(fullName)}
    </Avatar>
  );
};

export default IconAvatar;
