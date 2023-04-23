import axios from "axios";

export default class UserService {
    static async register(registerBody) {
        try {
            const response = await axios.post(`https://localhost:7197/api/Account/register`, registerBody);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async login(loginBody) {
        try {
            const response = await axios.post(`https://localhost:7197/api/Account/login`, loginBody);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}