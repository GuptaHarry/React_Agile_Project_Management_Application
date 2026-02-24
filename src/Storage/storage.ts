
const STORAGE_KEY = "agile_app";

export function loadState<T>(): T | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
   
    console.log("Data loaded")
    console.log(JSON.parse(data));
    return JSON.parse(data) as T;
  } catch (error) {
    console.log("Error occured while loading :", error);
    return null;
  }
}


export function saveState (state : unknown){
    try{
        const serialized = JSON.stringify(state);
        console.log("Data Saved")
    console.log(serialized);
        localStorage.setItem(STORAGE_KEY,serialized);
    }catch(error){
        console.log("Error occured while saving",error);
    }
}
