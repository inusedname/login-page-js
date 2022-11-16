import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

const accounts = [
    {
        name: "Quang",
        email: "admin@vstd",
        password: "1234",
    },
    {
        name: "JavaScript",
        email: "account1@vstd",
        password: "123",
    }
]


function App() {

    const [error, setError] = useState("");
    const [remember, setRemember] = useState("false")

    const Signup = () => {
        alert("User want to signup");
    }

    const Login = details => {
        const user = Authenticate(details);

        if (user == null) {
            setError("Not found account");
        } else {
            setError("");
            alert(`User ${user.name} logged in.`);
        }
    }

    const Authenticate = details => {
        console.log(details);
        let user;
        accounts.forEach((account) => {
            if (details.email == account.email && details.password == account.password)
                user = { name: account.name, email: account.email, remember: details.remember };
        });
        return user;
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
    return (
        <div className="App">
            <LoginForm onSubmit={Login} errorMsg={error} onSignup={Signup} onSocialMediaSignin={SocialMediaSignin} />
        </div>
    );
}

export default App;