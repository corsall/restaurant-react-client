import { React, useState} from "react";
import RestaurantsTable from "./components/table/RestaurantTable";
import "./styles/App.css";
import "./styles/tableStyles.css";
import UsersInput from "./components/UsersInput";
import SearchSection from "./components/SearchSection";

function App() {
    const [currentTable, setCurrentTable] = useState("Clients");
    const [searchQuery, setSearchQuery] = useState("");
    const [dataToEdit, setDataToEdit] = useState([]);
    const [isRefreshed, setIsRefreshed] = useState(false);

    return (
        <>
            <SearchSection
                setIsRefreshed={setIsRefreshed}
                setCurrentTable={setCurrentTable}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <UsersInput
                currentTable={currentTable}
                setIsRefreshed={setIsRefreshed}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            <RestaurantsTable
                currentTable={currentTable}
                isRefreshed={isRefreshed}
                setIsRefreshed={setIsRefreshed}
                setDataToEdit={setDataToEdit}
                searchQuery={searchQuery}
            />
        </>
    );
}

export default App;
