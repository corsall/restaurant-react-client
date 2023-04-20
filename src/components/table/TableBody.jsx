import React from "react";
import TableRow from "./TableRow";

function TableBody({ tableData, setIsRefreshed, currentTable, setDataToEdit }) {
    return (
        <tbody>
            {tableData.map((row) => (
                <TableRow
                    // In my table first value of each row is always unique
                    key={Object.values(row)[0]}
                    row={row}
                    setIsRefreshed={setIsRefreshed}
                    currentTable={currentTable}
                    setDataToEdit={setDataToEdit}
                />
            ))}
        </tbody>
    );
}

export default TableBody;
