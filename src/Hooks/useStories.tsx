import  StoriesContext  from "../Context/StoriesContext";
import { useContext } from "react";
export default function useProjects(){
    const ctx = useContext(StoriesContext);
    if(!ctx)
                throw new Error("Error occured");
    return ctx;

}


