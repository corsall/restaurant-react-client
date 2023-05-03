import React, { useContext, useMemo, useState } from "react";
import TableRow from "./TableRow";
import { TableContext } from "../../context/TableGlobal";

function TableBody({setDataToEdit, searchQuery}) {
    const [filteredTableData, setFilteredTableData] = useState([]);
    const { table } = useContext(TableContext);

    useMemo(() => {
        const regex = RegExp(searchQuery);
        let filteredData = table.filter(
            (row) =>
                !Object.values(row)
                    .map((value) => (value === null ? "" : value.toString()))
                    .reduce((a, c) => a * !c.match(regex), true)
        );
        setFilteredTableData(filteredData);
    }, [searchQuery]);

    return (
        <tbody>
            {((filteredTableData.length ===0)? table: filteredTableData).map((row) => (
                <TableRow
                    // In my table first value of each row is always unique
                    key={Object.values(row)[0]}
                    row={row}
                    setDataToEdit={setDataToEdit}
                />
            ))}
        </tbody>
    );
}

export default TableBody;
