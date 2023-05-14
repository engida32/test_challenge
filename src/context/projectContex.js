import React, { createContext, useState } from "react";

const ProjectContext = createContext();

function ProjectProvider(props) {
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectUrl: "www",
    workerCount: 4,
    type: "",
    email: "",
    aim: "",
    category: [],
  });

  const updateProjectData = (data) => {
    setProjectData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <ProjectContext.Provider value={{ projectData, updateProjectData }}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export { ProjectContext, ProjectProvider };
