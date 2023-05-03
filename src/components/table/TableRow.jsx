import React, { useContext } from "react";
import MyButton from "../UI/button/MyButton";
import { TableContext } from "../../context/TableGlobal";;

function TableRow({ row, setDataToEdit }) {
    const { deleteTableRow } = useContext(TableContext);


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
                <MyButton onClick={() =>{
                    deleteTableRow(Object.values(row)[0])
                }}>Delete</MyButton>
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
