import React, {Component} from 'react'
import { Form, FormGroup, Label, Col } from "reactstrap";
// import FormSelectField from "Components/Form/Components/FormSelectField";
// import FormTextField from "Components/Form/Components/FormTextField";
import TextField from '@material-ui/core/TextField';
// import NumberFormatCustom from "Components/Form/Components/NumberFormatCustom";
import {KeyboardDatePicker} from '@material-ui/pickers';
import Moment from 'moment'

const paymentOption =  [{name:'Paypal', value: 'Paypal'}, {name:'Stripe', value: 'Stripe'}, {name:'Bank FAST', value: 'Bank FAST'}]
const paymentDifferenceOptions =  [{name:'Keep Open', value: false}, {name:'Fully Reconcile', value: true}]

import AmountInput from "Components/Form/Components/Inputs/AmountInput";
import FormInput from "Components/Form/Components/FormInput";
import DatePickerInput from "Components/Form/Components/Pickers/DatePicker";


export default class MakePayment extends Component {
    

    state=({
        
        singlePayment:{
            customer: this.props.invoice.accountId.value,
            customerName: this.props.invoice.accountId.name,
            invoiceId: this.props.invoice.id,
            invoiceQuote: this.props.invoice.quoteID,
            amount : 0,
            paymentMethod: '',
            date: new Date(),
            paymentRef: "",
            memo : '',
            paymentDifference: '',
            userId : localStorage.getItem('user_id'),
        },
        
    })

    handleChange = (a, b) => {
        let singlePayment = {...this.state.singlePayment}
        singlePayment[a] = b
        this.setState({singlePayment: singlePayment})
    }

    _handleSubmitPayment = () => {
        this.props.makePayment(this.state.singlePayment)
    }

    
    render(){

        const {invoice} = this.props

        const {
            amount,
            paymentMethod,
            date,
            paymentRef,
            memo,
            paymentDifference
        }  = this.state.singlePayment


        return(
            <div>

                <div className="row">
                    <div className="col-md-6">
                            <FormInput
                                label="Company"
                                value={invoice.accountId.name}
                                disabled ={true}
                            />  
                    </div>
                    <div className="col-md-6"></div>
                </div>

                <div className="row">

                    <div className="col-md-6">

                        {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <div style={{paddingRight: 10}}>Total Amount:</div>
                            <div>${invoice.totalAmt}</div>
                        </div> */}

                        <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                            {/* <div style={{paddingRight: 10}}>Paid Amount: </div> */}
                            {/* <TextField
                                value={this.state.paidAmount}
                                onChange={this.handleChange}
                                id="formatted-numberformat-input"
                                name="paidAmount"
                                InputProps={{
                                    inputComponent: NumberFormatCustom,
                                }}
                            /> */}
                            <AmountInput
                                label="Amount"
                                value={amount}
                                required={!amount}
                                target='amount'
                                onChange={e => {
                                    this.handleChange("amount", e.target.value)
                                }}
                            />
                            {/* <FormInput
                                label="Payment Method"
                                value={this.state.paymentMethod}
                                required={!this.state.paymentMethod}
                                selectValues={paymentOption}
                                target="paymentMethod"
                                handleChange={this.handleChange}
                            />   */}
                        </div>
                    
                        <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                            {/* <div style={{paddingRight: 10}}>Payment Method: </div> */}
                            {/* <FormSelectField
                                value={this.state.paymentMethod}
                                target={"paymentMethod"}
                                handleChange ={this.handleChange}
                                selectValues={paymentOption}
                            />  */}
                            <FormInput
                                label="Payment Method"
                                value={paymentMethod}
                                required={!paymentMethod}
                                selectValues={paymentOption}
                                target="paymentMethod"
                                handleChange={this.handleChange}
                            />                
                        </div>

                        <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                            {/* <div style={{paddingRight: 10}}>Payment Differences: </div>
                            <FormSelectField
                                value={this.state.paymentDifference}
                                target={"paymentDifference"}
                                handleChange ={this.handleChange}
                                selectValues={paymentDifferenceOptions}
                            />    */}
                            <FormInput
                                label="Reconciled"
                                value={paymentDifference}
                                // required={!paymentDifference}
                                selectValues={paymentDifferenceOptions}
                                target="paymentDifference"
                                handleChange={this.handleChange}
                            />                     
                        </div>

                    </div>

                    <div  className="col-md-6">

                        <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                            {/* <div style={{paddingRight: 10}}>Date: </div>
                            <KeyboardDatePicker
                                margin="normal"
                                style={{marginTop:0}}
                                // id="mui-pickers-date"
                                value={Moment(this.state.date).format('LLL')}
                                onChange={e => this.handleChange('date', e._d)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            /> */}
                            <DatePickerInput
                                label="Date"
                                value={date}
                            />
                        </div>
                    


                        <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                            {/* <div style={{paddingRight: 10}}>Payment Ref: </div>
                            <FormTextField
                                placeholder={"e.g. 003/10"}
                                value={this.state.paymentRef}
                                handleChange={this.handleChange}
                                target={'paymentRef'}
                                //targetType={targetType}
                            /> */}
                            <FormInput
                                label="Payment Ref"
                                placeholder={"e.g. 003/10"}
                                value={paymentRef}
                                required={!paymentRef}
                                target="paymentRef"
                                handleChange={this.handleChange}
                            />  
                        </div>

                        <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                            {/* <div style={{paddingRight: 10}}>Memo: </div>
                            <FormTextField
                                placeholder={"e.g. Invoice SAS/003"}
                                value={this.state.memo}
                                handleChange={this.handleChange}
                                target={'memo'}
                                //targetType={targetType}
                            /> */}
                            <FormInput
                                label="Message"
                                placeholder={"Enter message.."}
                                value={memo}
                                target="memo"
                                handleChange={this.handleChange}
                            />  
                        </div>

                    </div>

                    <div style={{marginTop: 25, display: 'flex'}} className="col-md-12">
                        <div onClick={this._handleSubmitPayment} style={{marginRight: 25}}>Register Payment</div>
                        {/* <div onClick={this._handleSubmitPayment}>Cancel</div> */}
                    </div>
                
                </div>
            </div>
        )
    }


}