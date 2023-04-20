import React, { useMemo, useState } from "react";
import TableService from "../../API/TableService";

function TableHead({ currentTable }) {
    const [tableHeader, setTableHeader] = useState({});

    useMemo(async () => {
        setTableHeader(await TableService.getTableHeader(currentTable));
    }, [currentTable]);

    return (
        <thead>
            <tr>
                {Object.keys(tableHeader).map((head, index) => (
                    <th key={index}>{head}</th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHead;
