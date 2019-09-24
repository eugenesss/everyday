import React from "react";
import { connect } from "react-redux";
import BgCard from "Components/Everyday/BgCard";
import Comments from "Components/Widgets/Comments";

import { isSameDay, getTheDate, getTheTime } from "Helpers/helpers";
import EditableInput from "Components/Everyday/Profile/Details/EditableInput";
import ShowInput from "Components/Everyday/Profile/Details/ShowInput";

import { addNoteCustomer } from "Actions";

import InvoiceProductInput from "Components/Form/Components/Inputs/Accounting/InvoiceProductInput";
import ViewInvoiceReconcile from "Components/Accounting/Invoice/ViewInvoiceReconcile";



function QuotationOverviewTab(props) {
  const { quotation, payment } = props;
  
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">


            {/* <BgCard contentCustomClasses={"d-flex"}> */}
          
            <BgCard contentCustomClasses={"d-flex flex-column"}>

                <div className="d-flex flex-row">
                    <div className="col-4">                    
                        <ShowInput
                            label="Bill to"
                            value={quotation.billing}
                        />
                    </div>

                    <div className="col-8 d-flex flex-column">
                        
                        <div className="d-flex">

                            <div className="col-4 d-flex">
                                <EditableInput 
                                    style={{color:'#464d69'}}
                                    label="Date of Issue"
                                    input=""
                                    value={getTheDate(quotation.createdAt)}
                                />
                            
                            </div>
                            
                            <div className="col-4 d-flex">
                                <EditableInput 
                                    style={{color:'#464d69'}}
                                    label="Due Date"
                                    value={getTheDate(quotation.dueDate)}
                                />
                            </div>

                            <div className="col-4 d-flex">

                                <EditableInput 
                                    style={{color:'#464d69'}}
                                    label="Amount Due"
                                    amount={quotation.totalAmt}
                                    value={`$${quotation.totalAmt}`}
                                />

                            </div>

                         
                        
                        </div>
            

                    </div>
                </div>


                <div className="d-flex flex-row">
                    <div className="col-12">
                        <InvoiceProductInput
                            products={quotation.quotationLine}
                            quotation={quotation}
                            edit={false}
                            // taxTable={taxTable}
                        />
                    </div>
                </div>


                <div className="d-flex flex-row">
                    <div className="col-12">
                        <ViewInvoiceReconcile
                            // title={nowShowing}
                            // action={action}
                            tableData={payment}
                        />
                    </div>
                </div>

            
            </BgCard>




        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(
  null,
  { addNoteCustomer }
)(QuotationOverviewTab);
