import { Box } from "@mui/material";
import StepperPage from "./components/StepperComponent";
import { ProjectContext, ProjectProvider } from "./context/projectContex";
import { useContext } from "react";
import ProjectCard from "./components/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { projectData, updateProjectData } = useContext(ProjectContext);
  console.log({ projectData });
  return (
    <BrowserRouter>
      <Box
        sx={{
          background: "#101313",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<StepperPage />} />
          <Route path="/project" element={<ProjectCard />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
