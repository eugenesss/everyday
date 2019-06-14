


export const EmailValidator= (e) =>{
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailState  = ''
    if (emailRex.test(e)) {
        emailState = 'has-success'
    } else {
        emailState = 'has-danger'
    }
    return emailState
}


export const PasswordValidator = (password, repassword) => {
    let passwordState  = ""
    if (password === repassword) {
      passwordState = 'has-success'
    } else {
      passwordState = 'has-danger'
    }
    return passwordState
} 


export const StepperZeroValidator = (props, emailState, passwordState) => {
    const {companyInfo, userInfo } = props

    if (userInfo.firstName.length < 3 && userInfo.lastName < 3) {
        return false
    }
       
   if (companyInfo.name.length < 3) {
        return false
   }
  
   if (emailState !== "has-success") {
        return false
   }

   if (passwordState !== "has-success") {
        return false
    }

    return true
} 
