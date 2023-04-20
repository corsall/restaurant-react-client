import React from "react";
import MyButton from "../UI/button/MyButton";
import TableService from "../../API/TableService";

function TableRow({ row, setIsRefreshed, currentTable, setDataToEdit }) {
    async function remove(row) {
        await TableService.deleteTableRow(currentTable, row);
        setIsRefreshed(false);
    }

    return (
        <tr>
            {Object.entries(row).map(([k, value], index) => {
                return (
                    <td key={Object.values(row)[0] + index} id={k}>
                        {value}
                    </td>
                );
            })}

            <td className="buttons">
                <MyButton onClick={() => remove(row)}>Delete</MyButton>
            </td>
            <td className="buttons">
                <MyButton onClick={() => setDataToEdit(Object.values(row))}>
                    Edit
                </MyButton>
            </td>
        </tr>
    );
}

export default TableRow;
