/* eslint-disable react/prop-types */

import React from 'react'
import { useState, useEffect } from 'react'
import { EmailOutlined, WarningAmberRounded } from '@mui/icons-material'
import { LockOutlined } from '@mui/icons-material'
import FacebookIcon from '@mui/icons-material/Facebook';
import { isEmpty, isValidEmail } from '../validators/LoginFormValidator.js'

function LoginForm ({ onSubmit, onSignup, onSocialMediaSignin }) {
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [details, setDetails] = useState({ email: "", password: "", remember: false });

    const isSubmitAvailable = (details) => {
        const available = !isEmpty(details.email) && !isEmpty(details.password) && isValidEmail(details.email);
        return available;
    }
    const updateErrors = (details) => {
        if (isEmpty(details.email))
            setEmailError("Email is required");
        else
            setEmailError(isValidEmail(details.email) ? "" : "Invalid email");
        setPasswordError(isEmpty(details.password) ? "Password is required" : "");
    }
    const onSubmitClicked = e => {
        updateErrors(details);
        e.preventDefault();
        if (isSubmitAvailable(details)) {
            onSubmit(details);
        }
    }
    const resetErrors = () => {
        setEmailError("");
        setPasswordError("");
    }
    useEffect(() => {
        resetErrors();
    }, [details]);

    return (
        <form onSubmit={onSubmitClicked}>
            <div className="form-inner">
                <h2>LOGIN</h2>
                <div className="text-input-with-error">
                    <TextField placeholder="Email" icon={<EmailOutlined fontSize='small' />} type="email"
                        onChange={e => setDetails({ ...details, email: e.target.value })} />
                    <FieldError error={emailError} />
                </div>
                <div className="text-input-with-error">
                    <TextField placeholder="Password" icon={<LockOutlined fontSize='small' />} type="password"
                        onChange={e => setDetails({ ...details, password: e.target.value })} />
                    <FieldError error={passwordError} />
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

const TextField = ({ placeholder, icon, onChange, type }) => {
    return (
        <div className="form-text-input-group">
            <div className="form-input-icon">
                {icon}
            </div>
            <input type={type} name={type} id={type} placeholder={placeholder} onChange={onChange} />
        </div>
    );
}
const FieldError = ({ error }) => {

    const errorStyle = {
        marginLeft: '0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'red',
        fontSize: '0.7rem',
        marginTop: '0.3rem',
    };

    if (error === "")
        return null;
    return (
        <div className="form-error" style={errorStyle}>
            <WarningAmberRounded fontSize='inherit  ' style={{ marginRight: '0.5rem' }} />
            {error}
        </div>
    );
}

const FacebookStyle = { color: '#4267B2' };

export default LoginForm