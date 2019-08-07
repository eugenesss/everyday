import React from 'react';
import NumberFormat from 'react-number-format';

const NumberFormatCustom = (props) =>{

    const {value, name, inputRef, onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        value={value}
        getInputRef={inputRef}
        // onValueChange={values => {
        //   onChange({
        //     target: {
        //       value: values.value,
        //     },
        //   });
        // }}
        onChange={e => onChange(name, e.target.value)}
        thousandSeparator
        prefix="$"
      />
    );
  }

  export default NumberFormatCustom;
