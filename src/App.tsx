import HomePage from './Components/HomePage';
import {  Routes, Route } from 'react-router-dom'
import ProjectsPage from './Components/Projects/ProjectsPage';
import ProjectDetailsPage from './Components/Projects/ProjectDetailsPage';

function App() {

  return (
    <>
       
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
      </Routes>
  
    </>
  )
}

export default App
