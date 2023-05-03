import { React, useContext} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MyInputSelect from "./UI/select/MyInputSelect";
import { TableContext } from "../context/TableGlobal";

function UsersInput({ inputData, setRowsInput, setIsEditMode }) {

    const { tableHeader, updateTableRow, addTableRow } = useContext(TableContext);

    const headers = Object.keys(tableHeader);
    const headerKeys = Object.values(tableHeader);

    async function addNewRow(e) {
        e.preventDefault();
        const newRow = {};
        for (let i = 0; i < inputData.rowsInput.length; i++) {
            newRow[headerKeys[i]] = inputData.rowsInput[i];
        }
        
        if (inputData.isEditMode) {
            updateTableRow(newRow);
            setIsEditMode(false);
            return;
        }

        addTableRow(newRow);
    }

    function clearForm(e) {
        e.preventDefault();
        setIsEditMode(false);
        setRowsInput(Array(inputData.rowsInput.length).fill(""));
    }

    return (
        <form>
            {headers.map((key, index) => {
                if (
                    inputData.tableKeys.includes(headerKeys[index]) &&
                    index !== 0
                ) {
                    return (
                        <MyInputSelect
                            key={key}
                            value={inputData.rowsInput[index] || headers[index]}
                            options={inputData.tableIds[headerKeys[index]]}
                            defaultValue={headers[index]}
                            onChange={(e) => {
                                setRowsInput(() => {
                                    let copy = [...inputData.rowsInput];
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
                            value={inputData.rowsInput[index] || ""}
                            onChange={(e) => {
                                setRowsInput(() => {
                                    let copy = [...inputData.rowsInput];
                                    copy[index] = e.target.value;
                                    return copy;
                                });
                            }}
                            type="text"
                            placeholder={key}
                            disabled= { inputData.isEditMode && index === 0 ? true : false }
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
