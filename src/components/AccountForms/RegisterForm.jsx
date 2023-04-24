import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import UserService from "../../API/UserService";

function RegisterForm({setUserLabel}) {
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [state, setState] = useState({});

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
        if(response.status === 200){
            setErrors([]);
            await UserService.login(registerUser);
            setUserLabel(JSON.parse(localStorage.getItem("user")).userName);
            setErrors("Success. User logged in");
            setState({color: "green"});
        } else {
            if(Object.values(response.response.data)[2] === 400){
                const errorMessage = Object.values(response.response.data)[4];
                setErrors(Object.values(errorMessage));
            }
            else{
                console.log(Object.values(response.response.data)[2]);
                setErrors(Object.values(response.response.data));
            }
        }
    }

    
    return (
        <>
            <label>Register</label>
            <MyInput type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="UserName"/>
            <MyInput type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="PhoneNumber"/>
            <MyInput type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
            <MyInput type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
            <div className="registerStatus">
                <MyButton onClick={register}>Register</MyButton>
                <span style={state} className="registerErrors">{errors}</span>
            </div>
        </>

    );
}

export default RegisterForm;
