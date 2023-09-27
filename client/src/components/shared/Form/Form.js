import React, { useState } from 'react';
import InputType from './InputType';

const Form = ({ formType, submitBtn, formTitle }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'donor',
        name: '',
        organizationName: '',
        hospitalName: '',
        website: '',
        address: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <form>
                <h1 className='text-center'>{formTitle}</h1>
                <hr />
                <div className='d-flex mb-3'>
                    {['donor', 'admin', 'hospital', 'organization'].map((roleOption) => (
                        <div className='form-check ms-2' key={roleOption}>
                            <input
                                type='radio'
                                className='form-check-input'
                                name='role'
                                id={`${roleOption}Radio`}
                                value={roleOption}
                                onChange={handleChange}
                                checked={formData.role === roleOption}
                            />
                            <label htmlFor={`${roleOption}Radio`} className='form-check-label'>
                                {roleOption.charAt(0).toUpperCase() + roleOption.slice(1)}
                            </label>
                        </div>
                    ))}
                </div>
                {(() => {
                    switch (formType) {
                        case 'login':
                            return (
                                <>
                                    <InputType
                                        labelText='Email'
                                        labelFor='forEMail'
                                        inputType='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <InputType
                                        labelText='Password'
                                        labelFor='forPassword'
                                        inputType='password'
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </>
                            );
                        case 'register':
                            return (
                                <>
                                    {(formData.role === 'admin' || formData.role === 'donor') && (
                                        <InputType
                                            labelText='Name'
                                            labelFor='forName'
                                            inputType='text'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    )}
                                    {formData.role === 'organization' && (
                                        <InputType
                                            labelText='Organization Name'
                                            labelFor='forOrganizationName'
                                            inputType='text'
                                            name='organizationName'
                                            value={formData.organizationName}
                                            onChange={handleChange}
                                        />
                                    )}
                                    {formData.role === 'hospital' && (
                                        <InputType
                                            labelText='Hospital Name'
                                            labelFor='forHospitalName'
                                            inputType='text'
                                            name='hospitalName'
                                            value={formData.hospitalName}
                                            onChange={handleChange}
                                        />
                                    )}
                                    <InputType
                                        labelText='Email'
                                        labelFor='forEMail'
                                        inputType='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <InputType
                                        labelText='Password'
                                        labelFor='forPassword'
                                        inputType='password'
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <InputType
                                        labelText='Phone'
                                        labelFor='forPhone'
                                        inputType='text'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <InputType
                                        labelText='Website'
                                        labelFor='forWebsite'
                                        inputType='text'
                                        name='website'
                                        value={formData.website}
                                        onChange={handleChange}
                                    />
                                    <InputType
                                        labelText='Address'
                                        labelFor='forAddress'
                                        inputType='text'
                                        name='address'
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </>
                            );
                        default:
                            return null;
                    }
                })()}
                <div className='d-flex'>
                    <button type='submit' className='btn btn-primary'>
                        {submitBtn}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;