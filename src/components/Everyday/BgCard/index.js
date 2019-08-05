import React from "react";
import classnames from "classnames";

function BgCard(props) {
  const {
    children,
    heading,
    fullBlock,
    customClasses,
    headingCustomClasses,
    contentCustomClasses,
    actionButton
  } = props;
  return (
    <div className="d-block">
      <div className={`rct-block ${customClasses ? customClasses : ""}`}>
        {heading && (
          <div
            className={`rct-block-title ${
              headingCustomClasses ? headingCustomClasses : ""
            }`}
          >
            <h4>{heading}</h4>
            {(collapsible || reloadable || closeable || editable) && (
              <div className="contextual-link">
                {actionButton && actionButton}
              </div>
            )}
          </div>
        )}
        <div
          className={classnames(
            contentCustomClasses ? contentCustomClasses : "",
            { "rct-block-content": !fullBlock, "rct-full-block": fullBlock }
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default BgCard;
