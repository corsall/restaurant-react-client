import axios from "axios";

export default class TableService {
    static async getTable(table) {
        try {
            const response = await axios.get(`https://localhost:7197/api/${table}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getTableHeader(table) {
        try {
            const response = await axios.get(`https://localhost:7197/api/${table}/header`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async postTableRow(table, newRow) {
        try {
            const response = await axios.post(`https://localhost:7197/api/${table}`, newRow);
            
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteTableRow(table, rowToRemove) {
        try {
            await axios.delete(`https://localhost:7197/api/${table}/${Object.values(rowToRemove)[0]}`)
        } catch (error) {
            console.log(error);
        }
    }

    static async updateTableRow(table, rowToUpdate) {
        try {
            await axios.put(`https://localhost:7197/api/${table}/${Object.values(rowToUpdate)[0]}`, rowToUpdate)
        } catch (error) {
            console.log(error);
        }
    }
}
