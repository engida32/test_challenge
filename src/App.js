import { Box } from "@mui/material";
import StepperPage from "./components/StepperComponent";
import ProjectCard from "./components/Project";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        background: "#101313",
        minHeight: "100vh",
      }}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<StepperPage />} />
          <Route path="/project" element={<ProjectCard />} />
        </Routes>
      </HashRouter>
    </Box>
  );
}

export default App;
