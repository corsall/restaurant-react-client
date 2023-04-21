import { React, useMemo, useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import TableService from "../API/TableService";
import MyInputSelect from "./UI/select/MyInputSelect";

//TODO:
function UsersInput({ currentTable, setIsRefreshed, dataToEdit, isRefreshed }) {
    const [rowsInput, setRowsInput] = useState([]);
    const [tableHeader, setTableHeader] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const [tableKeys, setTableKeys] = useState([]);
    const [tableIds, setTableIds] = useState({});

    useMemo(async () => {
        if (isRefreshed === false) {
            setTableIds(await TableService.getTableIds());
        }
    }, [isRefreshed]);

    useMemo(() => {
        setRowsInput(dataToEdit);
        setIsEditMode(true);
    }, [dataToEdit]);

    useMemo(async () => {
        setTableHeader(await TableService.getTableHeader(currentTable));
        setRowsInput(Array([]).fill(""));
        setIsEditMode(false);
        setTableKeys(await TableService.getTableKeys(currentTable));
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
            setRowsInput(Array(rowsInput.length).fill(""));
            setIsEditMode(false);
            setIsRefreshed(false);
            return;
        }

        await TableService.postTableRow(currentTable, newRow);
        setRowsInput(Array(rowsInput.length).fill(""));
        setIsRefreshed(false);
    }

    function clearForm(e) {
        e.preventDefault();
        //clear inputs
        setIsEditMode(false);
        setIsRefreshed(false);
        setRowsInput(Array(rowsInput.length).fill(""));
    }

    return (
        <form>
            {headers.map((key, index) => {
                if (tableKeys.includes(headerKeys[index]) && (index !== 0)) {
                    return (
                        <MyInputSelect
                            key={key}
                            value = {rowsInput[index] || headers[index]}
                            options={tableIds[headerKeys[index]]}
                            defaultValue={headers[index]}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setRowsInput(() => {
                                    let copy = [...rowsInput];
                                    copy[index] = e.target.value;
                                    return copy;
                                });
                            }}
                        />
                    );
                } else {
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
                            disabled={isEditMode && index === 0 ? true : false}
                        />
                    );
                }
            })}
            <MyButton onClick={addNewRow}>Save</MyButton>
            <MyButton onClick={clearForm}>Clear</MyButton>
        </form>
    );
}

export default UsersInput;
