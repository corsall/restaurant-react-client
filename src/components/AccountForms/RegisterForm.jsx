import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import UserService from "../../API/UserService";

function RegisterForm({setUserLabel}) {
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function  register(e){
        e.preventDefault();
        console.log(userName, phoneNumber, email, password);
        const registerUser = {
            "userName": userName,
            "phoneNumber": phoneNumber,
            "email": email,
            "password": password
        }
        const response = await UserService.register(registerUser);
        if(response === 200){
            await UserService.login(registerUser);
            console.log(JSON.parse(localStorage.getItem("user")).userName);
            setUserLabel(JSON.parse(localStorage.getItem("user")).userName);
        }
    }

    
    return (
        <>
            <label>Register</label>
            <MyInput type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="UserName"/>
            <MyInput type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="PhoneNumber"/>
            <MyInput type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
            <MyInput type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
            <MyButton onClick={register}>Register</MyButton>
        </>

    );
}

export default RegisterForm;