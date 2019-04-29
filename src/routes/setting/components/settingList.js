import React from "react";
import ReactTooltip from "react-tooltip";

const SettingList = ({ type, settings, children }) => (
  <div className="pricing-box">
    <div className="pricing-head">
      <h2 className={`mb-0`}>{type}</h2>
    </div>
    <div className="plan-info bg-transparent">
      <ul className="list-unstyled plan-info-listing">
        {children.map((child, key) => (
          <li className="d-flex justify-align-start" key={key}>
            {child}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default SettingList;
