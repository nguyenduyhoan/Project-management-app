import { useState } from "react";

import NewProject from "./component/NewProject.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import ProjectSidebar from "./component/ProjectSidebar.jsx";
import SelectedProject from "./component/SelectedProject.jsx";


function App() {
  // Tạo một đối tương để quản lý project thông qua việc sử dúng useState Hook với 3 phần.
  const [projectsState, setprojectsState] = useState(
    {
      selectedProjectId: undefined,
      projects: [],
      tasks: []
    }
  )

  // Viết chức năng thêm Task 
  // Thông qua việc sử dụng useState ta sẽ set lại mảng tasks

  function handleTask(text) {
    //Ở đây dùng hàm setprojectsState để cập nhâp trạng thái
    // Để cập nhập trạng thái ta phải tạo ra một đối tượng mới thông qua việc sử dụng arow function duyệt qua tất cả các phần tử

    setprojectsState((prevState) => {
      // Tạo id ngẫu nhiên cho task
      const taskId = Math.random();
      //Tạo một đối tương task mới
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }
      // Trả về đối tượng project mới chứa mảng tasks mới có chứa đối tương newTask được thêm vào mảng
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }

    })
  }

  function handleDeleteTask(id) {
    setprojectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((tasks) => tasks.id !== id),
      }
    })
  }

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

  function handleDeleteProject() {
    setprojectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
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

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={hanldeCancelProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectedProject={handleSelected} />
      {content}
    </main>
  )
}

export default App;
