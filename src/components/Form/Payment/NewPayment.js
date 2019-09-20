import React, {PureComponent} from 'react'
import { Form, FormGroup, Label, Col } from "reactstrap";
import TextField from '@material-ui/core/TextField';
import {KeyboardDatePicker} from '@material-ui/pickers';
import Moment from 'moment'

const paymentOption =  [{name:'Paypal', value: 'Paypal'}, {name:'Stripe', value: 'Stripe'}, {name:'Bank FAST', value: 'Bank FAST'}]
const paymentDifferenceOptions =  [{name:'Keep Open', value: 'Keep Open'}, {name:'Fully Reconcile', value: 'Fully Reconcile'}]


import AmountInput from "Components/Form/Components/Inputs/AmountInput";
import FormInput from "Components/Form/Components/FormInput";
import DatePickerInput from "Components/Form/Components/Pickers/DatePicker";


export default class PaymentList extends PureComponent {
    
    constructor(props) {
        super(props)   
        
        this.companyList = this.props.companyList

        // this.state = (
        //     {
        //         customer: '',
        //         invoiceId: '',
        //         amount : 0,
        //         paymentMethod: '',
        //         date: new Date(),
        //         paymentRef: '',
        //         memo : '',
        //         paymentDifference: 'Keep Open'
        //     }
        // )
    }



    handleChange = (a, b) => {


        if(a == "customerName"){
            const filterItem = this.props.companyList.filter(e => {
                if(e.value == b){
                    return e
                }
            })
            this.props._renderAllInvoicesForOneCompany(filterItem[0])
            return this.props.onSetState(a, b, filterItem[0])
        }

        this.props.onSetState(a, b, )
        // this.setState({[a]: b})
    }
  


    render(){

        const {customerName, paymentMethod, paymentDifference, amount, paymentRef , memo, date} = this.props.state
        
        return(
        
            <div className="row">
                
                <div className="col-md-6"></div>
                <div className="col-md-6">  
                    <DatePickerInput
                        label="Payment Date"
                        value={Moment(date).format('LLL')}
                        required={!date}
                        onChange={date =>
                            this.handleChange('date', e._d)
                        }
                    />
                </div>
           

                <div className="col-md-6">


                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                         <FormInput
                            label="Company"
                            value={customerName}
                            selectValues={this.props.companyList}
                            target="customerName"
                            handleChange={this.handleChange}
                        /> 
                    {/* </div> */}
                
                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                        
                        <FormInput
                            label="Payment Method"
                            value={paymentMethod}
                            required={!paymentMethod}
                            selectValues={paymentOption}
                            target="paymentMethod"
                            handleChange={this.handleChange}
                        />                
                    {/* </div> */}

                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                        
                        <FormInput
                            label="Reconciled"
                            value={paymentDifference}
                            // required={!paymentDifference}
                            selectValues={paymentDifferenceOptions}
                            target="paymentDifference"
                            handleChange={this.handleChange}
                        />  
                    {/* </div> */}

                </div>

                <div  className="col-md-6">

                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                        <AmountInput
                            label="Amount"
                            value={amount}
                            required={!amount}
                            target='amount'
                            onChange={e => {
                                this.handleChange("amount", e.target.value)
                            }}
                        />
                    {/* </div> */}


                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                        
                        <FormInput
                            label="Payment Ref"
                            value={paymentRef}
                            placeholder={"e.g. 003/10"}
                            required={!paymentRef}
                            target='paymentRef'
                            handleChange={this.handleChange}
                        />

                    {/* </div> */}

                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                        
                        <FormInput
                            label="Memo"
                            value={memo}
                            target="memo"
                            handleChange={this.handleChange}
                        />
                    {/* </div> */}

                </div>

             
            
            </div>
          
        )
    }


}