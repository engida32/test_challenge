import React, { useContext } from "react";
import { Container, Paper, Typography, Box, Button } from "@mui/material";
import { ProjectContext } from "../context/projectContex";

function ProjectPage() {
  const { projectData, updateProjectData } = useContext(ProjectContext);

  const handleReset = () => {
    updateProjectData({
      projectName: "",
      projectUrl: "www",
      workerCount: 4,
      type: "",
      email: "",
      aim: "",
    });
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#101313",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "2rem",
          textAlign: "center",
          boxShadow:
            "0px 10px 20px rgba(0, 0, 0, 0.3), 0px 6px 6px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow:
              "0px 20px 30px rgba(0, 0, 0, 0.4), 0px 12px 12px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#EF6C00", marginBottom: "2rem" }}
        >
          <Box
            sx={{
              display: "inline-block",
              padding: "1rem 2rem",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow:
                  "0px 20px 30px rgba(0, 0, 0, 0.4), 0px 12px 12px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            {projectData.projectName}
          </Box>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "#F9A825" }}>
            Project URL
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#101313" }}>
            {projectData.projectUrl}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "#F9A825" }}>
            Worker Count
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#101313" }}>
            {projectData.workerCount}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "#F9A825" }}>
            Aim
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#101313" }}>
            {projectData.aim}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "#F9A825" }}>
            Type
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#101313" }}>
            {projectData.type}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "#F9A825" }}>
            Email
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#101313" }}>
            {projectData.email}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginBottom: "2rem" }}
          onClick={() => {
            window.history.back();
            handleReset();
          }}
        >
          {" "}
          Back{" "}
        </Button>
      </Paper>
    </Container>
  );
}

export default ProjectPage;
