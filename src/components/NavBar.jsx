import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";

function NavBar() {
    const [modal, setModal] = useState(false);

    return (
        <div className="navBar">
            <MyButton onClick={() => setModal(true)}>
                Login
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}/>
        </div>
    );
}

export default NavBar;
