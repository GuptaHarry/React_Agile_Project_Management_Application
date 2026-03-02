import HomePage from './Components/HomePage';
import {  Routes, Route } from 'react-router-dom'
import ProjectsPage from './Components/Projects/ProjectsPage';
import ProjectDetailsPage from './Components/Projects/ProjectDetailsPage';
import UsersPage from "./Components/Users/UsersPage";
function App() {

  return (
    <>
       
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="//projects/:projectId/stories/:storyId" element={<ProjectDetailsPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
      </Routes>
  
    </>
  )
}

export default App
