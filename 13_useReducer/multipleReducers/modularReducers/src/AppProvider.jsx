
import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { authReducer, authInitialState } from "./authReducer";
import { cartReducer, cartInitialState } from "./cartReducer";

export const AppProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

    const rootValue= {
        auth: { state: authState, dispatch: authDispatch },
        cart: { state: cartState, dispatch: cartDispatch }
    };

    return (
        <AppContext.Provider value={rootValue}>
            {children}
        </AppContext.Provider>
    );
}