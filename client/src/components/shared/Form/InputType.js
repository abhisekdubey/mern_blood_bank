import React from 'react';

const InputType = ({ labelText, labelFor, inputType, name, value, onChange }) => {

    return (
        <>
            <div className="mb-1">
                <label htmlFor={labelFor} className="form-label">{labelText}</label>
                <input
                    className="form-control"
                    name={name}
                    type={inputType}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default InputType;