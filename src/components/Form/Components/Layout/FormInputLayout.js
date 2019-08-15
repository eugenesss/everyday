import React from "react";

const FormInputLayout = props => (
  <div className="row border-top py-30 px-30 justify-content-md-center">
    <div className="col-4 px-20">
      <div>
        <h2>{props.title}</h2>
        <p className="text-muted">{props.desc}</p>
      </div>
    </div>
    <div className="col-7 px-20">{props.children}</div>
  </div>
);

export default FormInputLayout;
