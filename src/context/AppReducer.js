const reducer = (state, action) => {
    switch (action.type) {
        case "GET_TABLE":
            return {
                ...state,
                table: action.payload,
                loading: false,
            };
        case "GET_TABLE_HEADER":
            return {
                ...state,
                tableHeader: action.payload,
            };
        case "UPDATE_TABLE_ROW":
            return {
                ...state,
                table: state.table.map((row) =>{
                    console.log(Object.values(row)[0]);
                    console.log(Object.values(action.payload)[0]);
                    return Object.values(row)[0] === Object.values(action.payload)[0] ? action.payload : row
                })
            };
        case "DELETE_TABLE_ROW":
            return {
                ...state,
                table: state.table.filter(
                    (row) => Object.values(row)[0] !== action.payload
                ),
            };
        case "SET_NEW_TABLE":
            return {
                ...state,
                currentTable: action.newCurrentTable,
                table: action.newTable,
                tableHeader: action.newTableHeader,
            };
        case "ADD_TABLE_ROW":
            return {
                ...state,
                table: [...state.table, action.payload],
            };
        default:
            return state;
    }
};

export default reducer;