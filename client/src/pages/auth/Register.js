import React from 'react';
import Form from '../../components/shared/Form/Form';

const Register = () => {
    return (
        <>
            <div className='row g-0'>
                <div className='col-md-8 form-banner'>
                    <img src='/assets/images/banner2.jpg' alt='Register' />
                </div>
                <div className='col-md-4 form-container'>
                    <Form formType={'register'} formTitle={'Register'} submitBtn={'Register'} />
                </div>
            </div>
        </>
    )
}

export default Register;