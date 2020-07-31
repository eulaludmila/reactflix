import React from 'react';

const FormField = ({value, onChange, label,name,type}) => {
    return(
        <div>
         <label>
            {label}
            <input
              type={type}
              value={value}
              name={name}
             onChange={onChange}
            />
          </label>
        </div>
    )
}

export default FormField;