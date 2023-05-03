import { useState, useEffect } from "react";
import TableService from "../API/TableService";


//hook for data that uses user input section
function useTableData( ) {
    const [rowsInput, setRowsInput] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [tableKeys, setTableKeys] = useState([]);
    const [tableIds, setTableIds] = useState({});

    useEffect(() => {
        refreshUserInput('Clients');
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function setDataToEdit(dataToEdit) {
        setIsEditMode(true);
        setRowsInput(dataToEdit);
    }

    async function refreshUserInput(currentTable) {
        setIsEditMode(false);
        setRowsInput(Array(rowsInput.length).fill(""));
        const keys = await TableService.getTableKeys(currentTable);
        setTableKeys(keys);
        const ids = await TableService.getTableIds(currentTable);
        setTableIds(ids);
    }

    return {
        inputData: {
            rowsInput,
            isEditMode,
            tableKeys,
            tableIds
        },
        setDataToEdit,
        setRowsInput,
        setIsEditMode,
        refreshUserInput
    };
}

export default useTableData;
