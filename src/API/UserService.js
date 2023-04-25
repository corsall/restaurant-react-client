import axios from "axios";
import { toast } from "react-hot-toast";

export default class UserService {

    static url = "https://restaurants-api-corsall.azurewebsites.net/api/";

    static async register(registerBody) {
        try {
            const response = await axios.post(`${this.url}Account/register`, registerBody);
            localStorage.setItem("user", JSON.stringify(response.data));
            return response;
        } catch (error) {
            return error;
        }
    }

    static async login(loginBody) {
        try {
            const response = await axios.post(
                `${this.url}Account/login`,
                loginBody
            );
            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
                toast.success("Logged in successfully");
            } else {
                toast.error("Login failed");
            }
            console.log(response.status);
            return response.status;
        } catch (error) {
            console.log(error);
        }
    }

    static logout() {
        localStorage.removeItem("user");
        toast.success("Logged out successfully");
    }

    static getCurrentUser() {
        return localStorage.getItem("user");
    }
}
