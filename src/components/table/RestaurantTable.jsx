import React, {useMemo, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TableService from "../../API/TableService";

function RestaurantTable({
    currentTable,
    isRefreshed,
    setIsRefreshed,
    setDataToEdit,
    searchQuery,
}) {
    const [tableData, setTableData] = useState([]);
    const [filteredTableData, setFilteredTableData] = useState([]);

    useMemo(async () => {
        if (isRefreshed === true) return;
        console.log("fetched Table");
        setTableData(await TableService.getTable(currentTable));
        setIsRefreshed(true);
    }, [isRefreshed, currentTable, setIsRefreshed]);

    useMemo(() => {
        const regex = RegExp(searchQuery);
        let filteredData = tableData.filter(
            (table) =>
                !Object.values(table)
                    .map((value) => (value === null ? "" : value.toString()))
                    .reduce((a, c) => a * !c.match(regex), true)
        );
        setFilteredTableData(filteredData);
    }, [searchQuery, tableData]);

    return (
        <table>
            <TableHead currentTable={currentTable}/>
            <TableBody
                currentTable={currentTable}
                tableData={(filteredTableData.length ===0)? tableData: filteredTableData}
                setIsRefreshed={setIsRefreshed}
                setDataToEdit={setDataToEdit}
            />
        </table>
    );
}

export default RestaurantTable;
