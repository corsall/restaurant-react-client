import React, { useContext, useEffect} from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { TableContext } from "../../context/TableGlobal";

function RestaurantTable({ searchQuery, setDataToEdit }) {

    const {getTable, getTableHeader } = useContext(TableContext);

    useEffect(() => {
        getTable();
        getTableHeader();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <table>
            <TableHead/>
            <TableBody searchQuery={searchQuery} setDataToEdit={setDataToEdit}/>
        </table>
    );
}

export default RestaurantTable;
