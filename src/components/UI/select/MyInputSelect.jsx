import React from "react";
import classes from "./MyInputSelect.module.css";

function MyInputSelect({options, defaultValue, ...props}) {

    const textStyle = {color: props.value === defaultValue? '#757575' : '' };
    return (
        <select style={textStyle} 
            className={classes.mySlct}
            {...props}
        >
            <option disabled>{defaultValue}</option>
            {options.map(option =>
                <option value={option} key={option}>{option}</option>
            )}

        </select>
    );
}

export default  MyInputSelect;
