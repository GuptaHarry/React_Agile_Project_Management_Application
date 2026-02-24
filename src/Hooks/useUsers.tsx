import UsersContext from "../Context/UsersContext";
import { useContext } from "react";
export default function useUsers(){
    const ctx = useContext(UsersContext);
    if(!ctx)
                throw new Error("Error occured");
    return ctx;

}


