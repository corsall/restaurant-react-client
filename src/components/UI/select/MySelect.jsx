import React, { useContext } from "react";
import classes from "./MySelect.module.css";
import { TableContext } from "../../../context/TableGlobal";

function MySelect({ refreshUserInput }) {
    const { setNewTable, getTable, getTableHeader } = useContext(TableContext);

    async function selectTable(table){
        setNewTable(table);
        refreshUserInput(table);
        getTable();
        getTableHeader();
    }

    const options=[
        { value: "Clients", name: "Клієнти" },
        { value: "Orders", name: "Замовлення" },
        { value: "DeliveryType", name: "Тип замовлення" },
        { value: "OrderContent", name: "Вміст Замовлення" },
        { value: "Products", name: "Продукти" },
    ];

    return (
        <select
            className={classes.mySlct}
            onChange={event => selectTable(event.target.value)}
        >
            <option disabled value="">{"Обрати таблицю"}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
}

export default MySelect;
