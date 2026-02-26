import { useEffect, useState } from "react";
import  {loadState, saveState } from '../Storage/storage';
import type { AppState } from "../Types/appstate";
import { mockProjects } from "../Mock/projects";
import { mockUsers } from "../Mock/users";
import { mockStories } from "../Mock/stories";
import {ProjectsProvider} from "../Context/ProjectsContext";
import { UsersProvider } from "../Context/UsersContext";
import { UsersStoriesProvider } from "../Context/StoriesContext";
import {STORAGE_KEY} from '../Storage/storage';


export default function AppProvider ({children}: {
    children : React.ReactNode;
}){
 
   const [initialState] = useState( ()=>{
    const stored = loadState<AppState>();

    if(stored)
        return stored;

    const seed = {
        projects : mockProjects,
        users : mockUsers,
        stories : mockStories,
    };

    saveState(seed);
    return seed;
   })

   const [projects , setProjects]= useState(initialState.projects);
   const[ users, setUsers]= useState(initialState.users);
   const  [stories , setStories ] = useState(initialState.stories);
 
    useEffect(()=>{
        saveState({
            projects,
            users,
            stories
        })
    } , [projects,users,stories]);

     useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;

      const newState = loadState<AppState>();

      if (!newState) return;

      // Update only if changed
      setProjects(newState.projects);
      setUsers(newState.users);
      setStories(newState.stories);
    };

    window.addEventListener("storage", handleStorageChange);
     },[]);

    return (
        <ProjectsProvider value={{projects,setProjects}}>
            <UsersProvider value={{users,setUsers}}>
                <UsersStoriesProvider value={{stories,setStories}}>
                    {children}
                </UsersStoriesProvider>
            </UsersProvider>
        </ProjectsProvider>
    )
}
