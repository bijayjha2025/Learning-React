
import { useReducer} from "react";
import { AppContext } from "./AppContext";

const initialState = { user: null };

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };

        default:
            return state;
    }
}

export function AppProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}
