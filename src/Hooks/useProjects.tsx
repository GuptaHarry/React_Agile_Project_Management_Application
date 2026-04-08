import ProjectsContext from "../Context/ProjectsContext";
import { useContext } from "react";
export default function useProjects(){
    const ctx = useContext(ProjectsContext);
    if(!ctx)
                throw new Error("Error occured");
    return ctx;

}


