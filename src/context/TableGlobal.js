import React, { createContext, useReducer } from "react";
import TableService from "../API/TableService";
import AppReducer from "./AppReducer";

const initialState = {
    tableHeader: [],
    currentTable: 'Clients',
    table: [],
    loading: true,
}
//Global context
export const TableContext = createContext(initialState);

//Provider
export const TableProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function setNewTable(tableName){
        const newTable = await TableService.getTable(tableName);
        const newTableHeader = await TableService.getTableHeader(tableName);

        dispatch({
            type: 'SET_NEW_TABLE',
            newCurrentTable: tableName,
            newTable: newTable,
            newTableHeader: newTableHeader
        });
    }

    async function getTable(){
        const res = await TableService.getTable(state.currentTable);

        dispatch({
            type: 'GET_TABLE',
            payload: res
        });
    }

    async function getTableHeader(){
        const res = await TableService.getTableHeader(state.currentTable);

        dispatch({
            type: 'GET_TABLE_HEADER',
            payload: res
        });
    }

    async function updateTableRow(tableRow){
        const res = await TableService.updateTableRow(state.currentTable, tableRow);
        if(res !== undefined)
        {
            dispatch({
                type: 'UPDATE_TABLE_ROW',
                payload: res
            });
        }
    }

    async function deleteTableRow(id){
        const res = await TableService.deleteTableRow(state.currentTable, id);
        if(res !== undefined)
        {
            dispatch({
                type: 'DELETE_TABLE_ROW',
                payload: id
            });
        }
    }

    async function addTableRow(tableRow){
        const res = await TableService.postTableRow(state.currentTable, tableRow);
        if(res !== undefined){
            dispatch({
                type: 'ADD_TABLE_ROW',
                payload: res
            });
        }
    }

    return (
        <TableContext.Provider value={{
            tableHeader: state.tableHeader,
            currentTable: state.currentTable,
            table: state.table,
            loading: state.loading,
            getTable,
            updateTableRow,
            deleteTableRow,
            getTableHeader,
            setNewTable,
            addTableRow,
        }}>
            {children}
        </TableContext.Provider>
    );
}
