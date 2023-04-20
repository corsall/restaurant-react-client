import React from "react";
import classes from "./MySelect.module.css";

function MySelect({ options, defaultValue, onChange, setIsRefreshed }) {
    function selectTable(table){
        onChange(table);
        setIsRefreshed(false);
    }

    return (
        <select
            className={classes.mySlct}
            onChange={event => selectTable(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}

        </select>
    );
}

export default MySelect;
