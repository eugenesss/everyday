import React, {PureComponent} from "react";

class FormInputLayout extends PureComponent {


  render() {

    return(
      <div className="row border-top py-30 px-30 justify-content-md-center">
        <div className="col-4 px-20">
          <div>
            <h2>{this.props.title}</h2>
            <p className="text-muted">{this.props.desc}</p>
          </div>
        </div>
        <div className="col-7 px-20">{this.props.children}</div>
      </div>
    )
   }
}

export default FormInputLayout;
