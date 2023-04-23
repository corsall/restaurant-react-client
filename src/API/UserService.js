import axios from "axios";

export default class UserService {
    //TODO: fix error handling logic
    static async register(registerBody) {
        try {
            const response = await axios.post(`https://localhost:7197/api/Account/register`, registerBody).catch(error => {console.log(error)});
            console.log("Response: " + response);
            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
                console.log("User registered successfully");
            } else {
                console.log("User registration failed");
            }
            return response.status;
        } catch (error) {
            console.log(error);
        }
    }

    static async login(loginBody) {
        try {
            const response = await axios.post(`https://localhost:7197/api/Account/login`, loginBody);
            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
                console.log("User has successfully logged in");
            } else {
                console.log("User login failed");
            }
            return response.status;
        } catch (error) {
            console.log(error);
        }
    }

    static logout(){
        localStorage.removeItem("user");
    };

    static getCurrentUser(){
        return localStorage.getItem("user");
    };
}