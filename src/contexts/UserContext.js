import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        name:'Dhruv Singh',
        station_code:40,
        profile_key:'url'
    })
    return (
        <UserContext.Provider value={{user}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;