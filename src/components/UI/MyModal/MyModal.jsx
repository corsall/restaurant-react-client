import React, {useState } from "react";
import cl from "./MyModal.module.css";
import RegisterForm from "../../AccountForms/RegisterForm";
import LoginForm from "../../AccountForms/LoginForm";

function MyModal({visible, setVisible}) {
    const rootClasses = [cl.myModal];
    if (visible) {
        rootClasses.push(cl.active);
    }

    const [isRegisterForm, setIsRegisterForm] = useState(false);

    return (
        <div className={rootClasses.join(' ')} onClick={() => {setVisible(false); setIsRegisterForm(false)}}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>  
                {isRegisterForm ? <RegisterForm/> : <LoginForm setIsRegisterForm={setIsRegisterForm}/>}
            </div>
        </div>
    );
}

export default MyModal;
