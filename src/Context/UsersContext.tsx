import { createContext } from "react";
import type { User } from "../Types/user";

interface UsersContextValue {
 users : Record<string , User>;
    setUsers : React.Dispatch<React.SetStateAction<Record<string,User>>
    >; 
}
 const UsersContext = createContext<UsersContextValue | null >(null);
 export default UsersContext;
 
 export  function UsersProvider( {

    children ,
     value,
 } : {
    children : React.ReactNode;
    value : UsersContextValue;
 }){

    return (
        <UsersContext.Provider  value={ value}>
            {children}
        </UsersContext.Provider>
    )
}

