import { Box } from "@mui/material";
import StepperPage from "./components/StepperComponent";
import { ProjectContext, ProjectProvider } from "./context/projectContex";
import { useContext } from "react";

function App() {
  const { projectData, updateProjectData } = useContext(ProjectContext);
  console.log({ projectData });
  return (
    <Box
      sx={{
        background: "#101313",
        minHeight: "100vh",
      }}
    >
      <StepperPage />
    </Box>
  );
}

export default App;
