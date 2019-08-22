import React, {PureComponent} from "react";
// Page Title Bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import IntlMessages from "Util/IntlMessages";
import FormSubmitButtons from "Components/Form/Components/FormSubmitButtons";

class FormWrapper extends PureComponent {

  render() {

    return(
      <React.Fragment>
        <PageTitleBar
          title={<IntlMessages id={this.props.title} />}
          allowBack
          actionButton={
            <FormSubmitButtons
              onSave={this.props.onSave}
              onSaveNew={this.props.onSaveNew}
              disabled={this.props.disabled}
              edit={this.props.edit}
            />
          }
        />
        {this.props.children}
        <div className="row mb-30">
          <div className="col text-right">
            <FormSubmitButtons
              onSave={this.props.onSave}
              onSaveNew={this.props.onSaveNew}
              disabled={this.props.disabled}
              edit={this.props.edit}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default FormWrapper;
