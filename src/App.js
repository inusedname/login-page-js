import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import { authenticateUser } from "./data/AccountProvider";
import { HomeScreen } from "./components/HomeScreen";
import ErrorPopup from "./components/ErrorPopup";

function App () {

    const [user, setUser] = useState(null);
    const [responseErrorMsg, setResponseErrorMsg] = useState("");

    const onLoginFormSubmitted = details => {
        const user = authenticateUser(details);
        if (user == null) {
            setResponseErrorMsg("Not found account");
        } else {
            setResponseErrorMsg("");
            setUser(user);
        }
    }
    const onLogoutClicked = () => {
        setUser(null);
    }
    const onSignupClicked = () => {
        alert("User want to signup");
    }
    const onSocialMediaSelected = name => {
        let msg = "User want to sign in through ";
        switch (name) {
            case "Facebook":
                msg += 'Facebook';
                break;
            case "Google":
                msg += 'Google';
                break;
            default:
                break;
        }
        alert(msg)
    }
    const onErrorMsgClosed = () => {
        setResponseErrorMsg("");
    }
    return (
        <div className="App">
            <div className="not-found" style={{ width: '335px' }}>
                {
                    responseErrorMsg !== "" ?
                        <ErrorPopup detail={responseErrorMsg} onDismiss={onErrorMsgClosed} /> :
                        ""
                }
            </div>
            {
                user == null ?
                    <LoginForm onSubmit={onLoginFormSubmitted}
                        onSignup={onSignupClicked}
                        onSocialMediaSignin={onSocialMediaSelected}
                    /> :
                    <HomeScreen user={user}
                        onLogoutClick={onLogoutClicked} />
            }
        </div>
    );
}

export default App;