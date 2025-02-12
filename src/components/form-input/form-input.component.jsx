import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, value, ...otherProps}) => {
   return(<div className="group">
      <input className="form-input" value={value} onChange={handleChange} {...otherProps}/>
      {
          label ? (<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
              {label}
          </label>) : null
      }
   </div>)
};

export default FormInput;