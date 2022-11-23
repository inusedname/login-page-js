import React from 'react'
import { useState, useEffect } from 'react'
import { EmailOutlined, WarningAmberRounded } from '@mui/icons-material'
import { LockOutlined } from '@mui/icons-material'
import FacebookIcon from '@mui/icons-material/Facebook';
import { isEmpty, isValidEmail } from '../validators/LoginFormValidator.js'
import PropTypes from 'prop-types';

function LoginForm ({ onSubmit, onSignup, onSocialMediaSignin }) {
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [details, setDetails] = useState({ email: "", password: "", remember: false });

    const isSubmitAvailable = (details) => {
        const available = !isEmpty(details.email) && !isEmpty(details.password) && isValidEmail(details.email);
        return available;
    }
    const updateErrors = (details) => {
        let emailError = "";
        let passwordError = "";

        if (isEmpty(details.email))
            emailError = "Email is required";
        else if (!isValidEmail(details.email))
            emailError = "Invalid email";

        if (isEmpty(details.password))
            passwordError = "Password is required";

        setEmailError(emailError);
        setPasswordError(passwordError);
    }
    const resetErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const onSubmitClicked = e => {
        updateErrors(details);
        e.preventDefault();
        if (isSubmitAvailable(details)) {
            onSubmit(details);
        }
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
                <SubmitButton isEnabled={isSubmitAvailable(details)} />
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

    let errorElement = null;
    if (error)
        errorElement = (
            <div className="form-error" style={errorStyle}>
                <WarningAmberRounded fontSize='inherit' style={{ marginRight: '0.5rem' }} />
                {error}
            </div>
        );
    return errorElement;
}

const SubmitButton = ({ isEnabled }) => {
    let submitButton = null;
    if (isEnabled)
        submitButton = (<input type="submit" value="LOGIN" />);
    else {
        const disabledButtonStyle = {
            backgroundColor: '#e0e0e0',
            color: '#9e9e9e',
            cursor: 'not-allowed',
            display: 'inline-block',
            width: '100%',
            padding: '12px 15px',
            borderRadius: '2px',
            fontWeight: 700,
        };
        submitButton = (<button type="submit" style={disabledButtonStyle}>LOGIN</button>);
    }

    return submitButton;
}


LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSignup: PropTypes.func.isRequired,
    onSocialMediaSignin: PropTypes.func.isRequired,
};
SubmitButton.propTypes = {
    isEnabled: PropTypes.bool.isRequired,
}
FieldError.propTypes = {
    error: PropTypes.string.isRequired,
};
TextField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};


const FacebookStyle = { color: '#4267B2' };

export default LoginForm