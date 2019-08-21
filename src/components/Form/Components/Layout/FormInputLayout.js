import React from "react";
import classname from "classnames";

const FormInputLayout = props => (
  <div className="row py-30 px-30 justify-content-md-center">
    <div className="col-4 px-20">
      <div>
        <h2>{props.title}</h2>
        <p className="text-muted">{props.desc}</p>
      </div>
    </div>
    <div
      className={classname("col-7 px-20 ", { "offset-md-1": props.fullWidth })}
    >
      {props.children}
    </div>
  </div>
);

export default FormInputLayout;
