import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import { Authenticate } from "./data/AccountProvider";
import { HomeScreen } from "./components/HomeScreen";
import ErrorPopup from "./components/ErrorPopup";
import { display } from "@mui/system";

function App () {

    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const Signup = () => {
        alert("User want to signup");
    }

    const Login = details => {
        const user = Authenticate(details);
        if (user == null) {
            setError("Not found account");
        } else {
            setError("");
            setUser(user);
        }
    }

    const Signout = () => {
        setUser(null);
    }

    return (
        <div className="App">
            <div className="not-found" style={{ width: '335px' }}>
                {
                    error !== "" ?
                        <ErrorPopup detail={error} onDismiss={() => setError("")} /> :
                        ""
                }
            </div>
            {
                user == null ?
                    <LoginForm onSubmit={Login}
                        onSignup={Signup}
                        onSocialMediaSignin={SocialMediaSignin}
                    /> :
                    <HomeScreen user={user}
                        onLogoutClick={Signout} />
            }
        </div>
    );
}

const SocialMediaSignin = name => {
    const msg = "User want to sign in through ";
    switch (name) {
        case "Facebook":
            alert(msg + "Facebook")
            break;
        case "Google":
            alert(msg + "Google")
            break;
        default:
            break;
    }
}

export default App;