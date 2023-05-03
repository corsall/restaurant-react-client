import { React, useEffect, useState } from "react";
import RestaurantsTable from "./components/table/RestaurantTable";
import "./styles/App.css";
import "./styles/tableStyles.css";
import UsersInput from "./components/UsersInput";
import SearchSection from "./components/SearchSection";
import NavBar from "./components/NavBar";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { TableProvider } from "./context/TableGlobal";
import useTableData from "./hooks/useUserInput";

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    //custom hook that handles the user input
    const { refreshUserInput, inputData, setDataToEdit, setRowsInput, setIsEditMode} = useTableData();

    //waking up the server, may take a while:(
    useEffect(() => {
        async function fetchData() {
            await axios.get("https://restaurants-api-corsall.azurewebsites.net/api/Clients");
        }
        toast.promise(fetchData(), {
            loading: 'Waking up the server...',
            success: <b>Server is up🔥</b>,
            error: <b>Something went wrong</b>,
        });
    }, []);

    return (
        <TableProvider>
            <Toaster position="bottom-left" reverseOrder={false} />
            <div className="sideBar">
                <SearchSection
                    refreshUserInput={refreshUserInput}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <hr style={{ margin: "15px 0" }} />
                <UsersInput inputData={inputData} setRowsInput={setRowsInput} setIsEditMode={setIsEditMode} />
            </div>
            <div className="main">
                <NavBar />
                <RestaurantsTable searchQuery={searchQuery} setDataToEdit={setDataToEdit}/>
            </div>
        </TableProvider>
    );
}

export default App;
