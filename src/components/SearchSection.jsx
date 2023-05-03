import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function SearchSection({refreshUserInput, searchQuery, setSearchQuery}) {

    return (
        <>
            <MySelect refreshUserInput={refreshUserInput}/>
            <MyInput
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="🔎Search..."
            />
        </>
    );
}

export default SearchSection;
