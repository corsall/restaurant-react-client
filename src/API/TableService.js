import axios from "axios";
import authHeader from "./authHeader";
import toast from 'react-hot-toast';

export default class TableService {

    static url = "https://restaurants-api-corsall.azurewebsites.net/api/";

    static async getTable(table) {
        try {
            const response = await axios.get(`${this.url}${table}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getRowById(table,id) {
        try {
            const response = await axios.get(`${this.url}${table}/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getTableHeader(table) {
        try {
            const response = await axios.get(`${this.url}${table}/header`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getTableKeys(table) {
        try {
            const response = await axios.get(`${this.url}${table}/tablekeys`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    //This returns unique ids for each table that have been used
    //Needed for MyInputSelector to list all unique ids for each table
    static async getTableIds() {
        try {
            const response = await axios.get(`https://restaurants-api-corsall.azurewebsites.net/IDs/ids`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async postTableRow(table, newRow) {
        try {
            const response = await axios.post(`${this.url}${table}`, newRow);
            
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteTableRow(table, rowToRemove) {
        try {
            await axios.delete(`${this.url}${table}/${Object.values(rowToRemove)[0]}`, {headers: authHeader()})
        } catch (error) {
            toast.error("only admin can delete");
        }
    }

    static async updateTableRow(table, rowToUpdate) {
        try {
            await axios.put(`${this.url}${table}/${Object.values(rowToUpdate)[0]}`, rowToUpdate,{headers: authHeader()})
        } catch (error) {
            toast.error("only registered users can edit"); 
        }
    }
}
