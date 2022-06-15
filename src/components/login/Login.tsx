import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import { sendLoginRequest } from '../../apis/Api';

const Login = () => {

    const [errorMessages, setErrorMessages] = useState({ name: '', message: '' });
    const navigate = useNavigate();

    const renderErrorMessage = (name: string) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    /* const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "admin",
            password: "admin"
        }
    ]; */

    const errors = {
        username: "invalid username",
        password: "invalid password"
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        var { username, password } = document.forms[0];
        const userData = await sendLoginRequest({ username: username.value, password: password.value });
        //database.find((user) => user.username === username.value);

        // Compare user info
        if (userData) {
            if (userData.password !== password.value) {
                setErrorMessages({ name: "password", message: errors.password });
            } else {
                if (username.value == 'admin')
                    navigate("/dashboard-admin");
                else
                    navigate("/dashboard-user");
            }
        } else {
            setErrorMessages({ name: "username", message: errors.username });
        }
    };

    return (
        <div className='login'>
            <div className="login-form">
                <div className="title">Sign In</div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label>Username </label>
                            <input type="text" name="username" required />
                            {renderErrorMessage("username")}
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" name="password" required />
                            {renderErrorMessage("password")}
                        </div>
                        <div className="button-container">
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;