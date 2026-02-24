import { createContext } from "react";
import type { UserStory } from "../Types/userstory";

interface UserStoriesContextValue {
    stories : Record<string , UserStory>;
    setStories : React.Dispatch<React.SetStateAction<Record<string,UserStory>>
    >; 
}

const StoriesContext = createContext<UserStoriesContextValue | null >(null);
export default StoriesContext;

 export function UsersStoriesProvider( {

    children ,
     value,
 } : {
    children : React.ReactNode;
    value : UserStoriesContextValue;
 }){

    return (
        <StoriesContext.Provider  value={ value}>
            {children}
        </StoriesContext.Provider>
    )
}
