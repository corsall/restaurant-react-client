import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import UserService from "../../API/UserService";

function LoginForm({setIsRegisterForm, setUserLabel}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function  login(e){
        e.preventDefault();
        const loginUser = {
            "userName": userName,
            "password": password
        }
        const response = await UserService.login(loginUser);
        if(response === 200){
            setUserLabel(JSON.parse(localStorage.getItem("user")).userName);
        }
    }


    return (
        <>
            <label>Login</label>
            <MyInput type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="UserName"/>
            <MyInput type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
            <MyButton onClick={login}>Login</MyButton>
            <span className="registerBtn" onClick={() => setIsRegisterForm(true)}>Create account</span>
        </>
    );
}

export default LoginForm;
