import React, { useContext, useMemo, useState } from "react";
import { TableContext } from "../../context/TableGlobal";

function TableHead() {
    const { tableHeader } = useContext(TableContext);

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
