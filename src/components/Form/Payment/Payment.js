import React, {Component} from 'react'
import { Form, FormGroup, Label, Col } from "reactstrap";
// import FormSelectField from "Components/Form/Components/FormSelectField";
// import FormTextField from "Components/Form/Components/FormTextField";
import TextField from '@material-ui/core/TextField';
// import NumberFormatCustom from "Components/Form/Components/NumberFormatCustom";
import {KeyboardDatePicker} from '@material-ui/pickers';
import Moment from 'moment'

const paymentOption =  [{name:'Paypal', value: 'Paypal'}, {name:'Stripe', value: 'Stripe'}, {name:'Bank FAST', value: 'Bank FAST'}]
const paymentDifferenceOptions =  [{name:'Keep Open', value: 'Keep Open'}, {name:'Fully Reconcile', value: 'Fully Reconcile'}]


export default class Payment extends Component {

    state=({
        customer: this.props.invoice.accountId.id,
        invoiceId: this.props.invoice.id,
        paidAmount : 0,
        paymentMethod: '',
        date: new Date(),
        paymentRef: '',
        memo : '',
        paymentDifference: []
    })

    handleChange = (a, b) => {
        this.setState({[a]: b})
    }

    _handleSubmitPayment = () => {

        this.props.makePayment(this.state)
    }

    
    render(){

        const {invoice} = this.props

        return(
        
            <div className="row">
                
                <div className="col-md-6">

                    {/* <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <div style={{paddingRight: 10}}>Total Amount:</div>
                        <div>${invoice.totalAmt}</div>
                    </div> */}

                    <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <div style={{paddingRight: 10}}>Paid Amount: </div>
                        <TextField
                            value={this.state.paidAmount}
                            onChange={this.handleChange}
                            id="formatted-numberformat-input"
                            name="paidAmount"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                    </div>
                
                    <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <div style={{paddingRight: 10}}>Payment Method: </div>
                        <FormSelectField
                            value={this.state.paymentMethod}
                            target={"paymentMethod"}
                            handleChange ={this.handleChange}
                            selectValues={paymentOption}
                        />                   
                    </div>

                    <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <div style={{paddingRight: 10}}>Payment Differences: </div>
                        <FormSelectField
                            value={this.state.paymentDifference}
                            target={"paymentDifference"}
                            handleChange ={this.handleChange}
                            selectValues={paymentDifferenceOptions}
                        />                   
                    </div>

                </div>

                <div  className="col-md-6">


                    <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <div style={{paddingRight: 10}}>Customer:</div>
                        <div>{invoice.accountId.name}</div>
                    </div>


                    <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <div style={{paddingRight: 10}}>Date: </div>
                        <KeyboardDatePicker
                            margin="normal"
                            style={{marginTop:0}}
                            // id="mui-pickers-date"
                            value={Moment(this.state.date).format('LLL')}
                            onChange={e => this.handleChange('date', e._d)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </div>
                


                    <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <div style={{paddingRight: 10}}>Payment Ref: </div>
                        <FormTextField
                            placeholder={"e.g. 003/10"}
                            value={this.state.paymentRef}
                            handleChange={this.handleChange}
                            target={'paymentRef'}
                            //targetType={targetType}
                        />
                    </div>

                    <div style={{marginTop: 15, display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <div style={{paddingRight: 10}}>Memo: </div>
                        <FormTextField
                            placeholder={"e.g. Invoice SAS/003"}
                            value={this.state.memo}
                            handleChange={this.handleChange}
                            target={'memo'}
                            //targetType={targetType}
                        />
                    </div>

                </div>

                <div style={{marginTop: 25, display: 'flex'}} className="col-md-12">
                    <div onClick={this._handleSubmitPayment} style={{marginRight: 25}}>Register Payment</div>
                    <div onClick={this._handleSubmitPayment}>Cancel</div>
                </div>
            
            </div>
          
        )
    }


}