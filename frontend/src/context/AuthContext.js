import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id:
            "6493fb783be6ae44a300ad5a",
        username:
            "bans1mp",
        email:
            "iamsarthakgandotra@gmail.com",

        profilePicture:
            "",
        coverPicture:
            "",

        followers:
            [],

        followings:
            [],
        isAdmin:
            false
        },
    
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}