import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function SearchSection({setIsRefreshed, setCurrentTable, searchQuery, setSearchQuery}) {
    return (
        <>
            <MySelect
                setIsRefreshed={setIsRefreshed}
                onChange={setCurrentTable}
                defaultValue="Обрати таблицю"
                options={[
                    { value: "Clients", name: "Клієнти" },
                    { value: "Orders", name: "Замовлення" },
                    { value: "DeliveryType", name: "Тип замовлення" },
                    { value: "OrderContent", name: "Вміст Замовлення" },
                    { value: "Products", name: "Продукти" },
                ]}
            />
            <MyInput
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
            />
        </>
    );
}

export default SearchSection;
