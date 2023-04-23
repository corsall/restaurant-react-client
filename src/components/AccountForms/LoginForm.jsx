import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import UserService from "../../API/UserService";

function LoginForm({setIsRegisterForm}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function  login(e){
        e.preventDefault();
        console.log(userName, password);
        const loginUser = {
            "userName": userName,
            "password": password
        }
        await UserService.login(loginUser);
    }


    return (
        <>
            <label>Login</label>
            <MyInput type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="UserName"/>
            <MyInput type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
            <MyButton onClick={login}>Login</MyButton>
            <span onClick={() => setIsRegisterForm(true)}>Create account</span>
        </>
    );
}

export default LoginForm;
