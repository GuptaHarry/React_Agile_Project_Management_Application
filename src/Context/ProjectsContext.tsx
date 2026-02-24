import { createContext } from "react";
import type { Project } from "../Types/project";

interface ProjectsContextValue {
    projects : Record<string , Project>;
    setProjects : React.Dispatch<React.SetStateAction<Record<string,Project>>
    >; 
}

const ProjectsContext = createContext<ProjectsContextValue | null >(null);
export default  ProjectsContext;


 export  function ProjectsProvider( {

    children ,
     value,
 } : {
    children : React.ReactNode;
    value : ProjectsContextValue;
 }){

    return (
        <ProjectsContext.Provider  value={ value}>
            {children}
        </ProjectsContext.Provider>
    )
}

