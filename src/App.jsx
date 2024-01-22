import { useState } from "react";

import NewProject from "./component/NewProject.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import ProjectSidebar from "./component/ProjectSidebar.jsx";
import SelectedProject from "./component/SelectedProject.jsx";


function App() {
  const [projectsState, setprojectsState] = useState(
    {
      selectedProjectId: undefined,
      projects: []
    }
  )

  function handleSelected(id) {
    setprojectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleStartAddProject() {
    setprojectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function hanldeCancelProject() {
    setprojectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleDeleteProject () {
    setprojectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project
      }
    })
  }

  function handleAddProject(projectData) {
    setprojectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }

    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject project={selectedProject}/>;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={hanldeCancelProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectedProject={handleSelected}/>
      {content}
    </main>
  )
}

export default App;
