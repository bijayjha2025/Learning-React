
import React, {useContext} from "react";
import { AppContext } from "./AppContext";

const Profile = () => {
    const {state, dispatch} = useContext(AppContext);

    const handleLogin = () => {
        dispatch({type: "LOGIN", payload: {name: "Bijay Jha"}});
    }

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    }

    return (
        <div>
            <h2>Profile Component</h2>
            {state.user ? (
                <div>
                    <p>Welcome, {state.user.name}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>Please log in.</p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}

export default Profile;