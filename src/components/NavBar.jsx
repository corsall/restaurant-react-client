import React, { useEffect, useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import UserService from "../API/UserService";

function NavBar() {
    const [modal, setModal] = useState(false);
    const [userLabel, setUserLabel] = useState("Unauthorized");

    useEffect(() => {
        if(localStorage.getItem("user") !== null){
            setUserLabel(JSON.parse(localStorage.getItem("user")).userName);
        }
    }, []);

    return (
        <div className="navBar">
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
