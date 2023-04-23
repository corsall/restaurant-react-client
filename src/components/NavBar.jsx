import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import UserService from "../API/UserService";

function NavBar() {
    const [modal, setModal] = useState(false);
    const [userLabel, setUserLabel] = useState("Unauthorized");

    return (
        <div className="navBar">
            <p>{(localStorage.getItem("user"))? localStorage.getItem("user").userName : " "}</p>
            <p>{userLabel}</p>
            <MyButton onClick={() => setModal(true)}>
                Login
            </MyButton>
            <MyButton onClick={() => {UserService.logout(); setUserLabel("Unauthorized")}}>
                Logout
            </MyButton>
            <MyModal setUserLabel={setUserLabel} visible={modal} setVisible={setModal}/>
        </div>
    );
}

export default NavBar;
