import React, {Component} from 'react'
import { Form, FormGroup, Label, Col } from "reactstrap";
import TextField from '@material-ui/core/TextField';
import {KeyboardDatePicker} from '@material-ui/pickers';
import Moment from 'moment'

const paymentOption =  [{name:'Paypal', value: 'Paypal'}, {name:'Stripe', value: 'Stripe'}, {name:'Bank FAST', value: 'Bank FAST'}]
const paymentDifferenceOptions =  [{name:'Keep Open', value: 'Keep Open'}, {name:'Fully Reconcile', value: 'Fully Reconcile'}]
const paymentCompany = [ { name: 'Shaking Company', value: 'Shaking Company' }, { name: 'Dry Spices Ba Wang Kua', value: 'Dry Spices Ba Wang Kua' }]


import AmountInput from "Components/Form/Components/Inputs/AmountInput";
import FormInput from "Components/Form/Components/FormInput";
import DatePickerInput from "Components/Form/Components/Pickers/DatePicker";


export default class PaymentList extends Component {
    
    constructor(props) {
        super(props)   
        
        this.companyList = this.props.companyList

        this.state = (
            {
                customer: '',
                invoiceId: '',
                paidAmount : 0,
                paymentMethod: '',
                date: new Date(),
                paymentRef: '',
                memo : '',
                paymentDifference: 'Keep Open'
            }
        )
    }



    handleChange = (a, b) => {
        this.setState({[a]: b})
        // if all items are filled, send to parent
        // this.props.preparePayment()
    }
  


    render(){

        console.log(this.state.customer)

        return(
        
            <div className="row">
                
                <div className="col-md-6"></div>
                <div className="col-md-6">  
                    <DatePickerInput
                        label="Payment Date"
                        value={Moment(this.state.date).format('LLL')}
                        required={!this.state.date}
                        onChange={date =>
                            this.handleChange('date', e._d)
                        }
                    />
                </div>
           

                <div className="col-md-6">


                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                         <FormInput
                            label="Company"
                            value={this.state.customer}
                            selectValues={this.props.companyList}
                            target="customer"
                            handleChange={this.handleChange}
                        /> 
                    {/* </div> */}
                
                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                        
                        <FormInput
                            label="Payment Method"
                            value={this.state.paymentMethod}
                            required={!this.state.paymentMethod}
                            selectValues={paymentOption}
                            target="paymentMethod"
                            handleChange={this.handleChange}
                        />                
                    {/* </div> */}

                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                        
                        <FormInput
                            label="Payment Method"
                            value={this.state.paymentDifference}
                            required={!this.state.paymentDifference}
                            selectValues={paymentDifferenceOptions}
                            target="paymentDifference"
                            handleChange={this.handleChange}
                        />  
                    {/* </div> */}

                </div>

                <div  className="col-md-6">

                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                        <AmountInput
                            label="Paid Amount"
                            value={this.state.paidAmount}
                            required={!this.state.paidAmount}
                            target='paidAmount'
                            onChange={e => {
                                this.handleChange("paidAmount", e.target.value)
                            }}
                        />
                    {/* </div> */}


                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                        
                        <FormInput
                            label="Payment Ref"
                            value={this.state.paymentRef}
                            required={!this.state.paymentRef}
                            target='paymentRef'
                            handleChange={this.handleChange}
                        />

                    {/* </div> */}

                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}> */}
                        
                        <FormInput
                            label="Memo"
                            value={this.state.memo}
                            target="memo"
                            handleChange={this.handleChange}
                        />
                    {/* </div> */}

                </div>

             
            
            </div>
          
        )
    }


}