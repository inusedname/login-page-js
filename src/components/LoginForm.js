/* eslint-disable react/prop-types */

import React from 'react'
import { useState, useEffect } from 'react'
import { EmailOutlined, Google } from '@mui/icons-material'
import { LockOutlined } from '@mui/icons-material'
import FacebookIcon from '@mui/icons-material/Facebook';
import { isAnyTextFieldsEmpty, isValidEmail } from '../validators/LoginFormValidator.js'
import ErrorPopup from './ErrorPopup.js';

const FacebookStyle = { color: '#4267B2' };

const submitAvailable = (details) => {
    const available = !isAnyTextFieldsEmpty(details) && isValidEmail(details.email);
    return available;
}

const getErrorDetail = (details) => {
    let errorDetail = "";
    if (isAnyTextFieldsEmpty(details)) {
        errorDetail += "- All required fields must be filled\n";
    }
    if (!isValidEmail(details.email)) {
        errorDetail += "- Email is invalid\n";
    }
    return errorDetail;
}

function LoginForm ({ onSubmit, onSignup, onSocialMediaSignin }) {
    const [dontShowError, setDontShowError] = useState(true);
    const [details, setDetails] = useState({ email: "", password: "", remember: false });
    const [error, setError] = useState("");

    const submitHandler = e => {
        setDontShowError(false);
        e.preventDefault();
        if (submitAvailable(details)) {
            onSubmit(details);
        }
    }

    useEffect(() => {
        setError(getErrorDetail(details));
    }, [details]);

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>LOGIN</h2>
                {!dontShowError && error !== "" ? (
                    <ErrorPopup detail={error} onDismiss={() => setDontShowError(true)} />
                ) : ""}
                <div className="form-text-input-group">
                    <EmailOutlined className='form-input-icon' />
                    <input type="email" name='email' id='email' placeholder='Email' onChange={e => setDetails({ ...details, email: e.target.value })} />
                </div>
                <div className="form-text-input-group">
                    <LockOutlined className='form-input-icon' />
                    <input type="password" name='password' id='password' placeholder='Password' onChange={e => setDetails({ ...details, password: e.target.value })} />
                </div>
                <div className="form-remember-me-group">
                    <input type="checkbox" name="remember-me" id="remember-me" value="remember" onChange={e => setDetails({ ...details, remember: e.target.checked })} />
                    <label htmlFor="checkbox">Remember me</label>
                </div>
                <input type="submit" value="LOGIN" />
                <div className="form-other-signin-group">
                    <h6>Or login with</h6>
                    <div className="signup-sites">
                        <div className="site-bt" onClick={() => onSocialMediaSignin("Facebook")}>
                            <FacebookIcon className='site-icon' fontSize='small' style={FacebookStyle} />
                            <span style={FacebookStyle}>Facebook</span>
                        </div>
                        <div className="site-bt" onClick={() => onSocialMediaSignin("Google")}>
                            <img src="https://freesvg.org/img/1534129544.png" alt='google icon' />
                            Google
                        </div>
                    </div>
                </div>
                <div className="form-signup">
                    Not a member?&ensp;<u className="link-signup" onClick={onSignup}> Sign up now</u>
                </div>
            </div>
        </form>
    )
}

export default LoginForm