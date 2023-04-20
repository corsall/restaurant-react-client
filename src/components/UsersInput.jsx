import { React, useEffect, useMemo, useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import TableService from "../API/TableService";

//TODO:
function UsersInput({
    currentTable,
    setIsRefreshed,
    dataToEdit
}) {
    const [rowsInput, setRowsInput] = useState([]);
    const [tableHeader, setTableHeader] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);

    useMemo(() => {
        setRowsInput(dataToEdit);
        setIsEditMode(true);
    }, [dataToEdit]);

    useMemo(async () => {
        setTableHeader(await TableService.getTableHeader(currentTable));
        setRowsInput(Array(rowsInput.length).fill(""));
        setIsEditMode(false);
    }, [currentTable]);

    const headers = Object.keys(tableHeader);
    const headerKeys = Object.values(tableHeader);

    async function addNewRow(e) {
        e.preventDefault();
        const newRow = {};
        for (let i = 0; i < rowsInput.length; i++) {
            newRow[headerKeys[i]] = rowsInput[i];
        }

        if (isEditMode) {
            await TableService.updateTableRow(currentTable, newRow);
            setIsEditMode(false);
            setIsRefreshed(false);
            return;
        }

        await TableService.postTableRow(currentTable, newRow);
        setIsRefreshed(false);
    }

    function clearForm(e) {
        e.preventDefault();
        //clear inputs
        setRowsInput(Array(rowsInput.length).fill(""));
    }

    return (
        <form>
            {headers.map((key, index) => {
                return (
                    <MyInput
                        key={key}
                        value={rowsInput[index] || ""}
                        onChange={(e) => {
                            setRowsInput(() => {
                                let copy = [...rowsInput];
                                copy[index] = e.target.value;
                                return copy;
                            });
                        }}
                        type="text"
                        placeholder={key}
                        disabled={(isEditMode && index === 0) ? true : false}
                    />
                );
            })}
            <MyButton onClick={addNewRow}>Save</MyButton>
            <MyButton onClick={clearForm}>Clear</MyButton>
        </form>
    );
}

export default UsersInput;
