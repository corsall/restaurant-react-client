import { React, useState } from "react";
import RestaurantsTable from "./components/table/RestaurantTable";
import "./styles/App.css";
import "./styles/tableStyles.css";
import UsersInput from "./components/UsersInput";
import SearchSection from "./components/SearchSection";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
    const [currentTable, setCurrentTable] = useState("Clients");
    const [searchQuery, setSearchQuery] = useState("");
    const [dataToEdit, setDataToEdit] = useState([]);
    const [isRefreshed, setIsRefreshed] = useState(false);

    return (
        <>
            <Toaster position="bottom-left" reverseOrder={false} />
            <div className="sideBar">
                <SearchSection
                    setIsRefreshed={setIsRefreshed}
                    setCurrentTable={setCurrentTable}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <hr style={{ margin: "15px 0" }} />
                <UsersInput
                    isRefreshed={isRefreshed}
                    currentTable={currentTable}
                    setIsRefreshed={setIsRefreshed}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                />
            </div>
            <div className="main">
                <NavBar />
                <RestaurantsTable
                    currentTable={currentTable}
                    isRefreshed={isRefreshed}
                    setIsRefreshed={setIsRefreshed}
                    setDataToEdit={setDataToEdit}
                    searchQuery={searchQuery}
                />
            </div>
        </>
    );
}

export default App;
