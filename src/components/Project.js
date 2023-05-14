import React, { useContext } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Stack,
  Chip,
} from "@mui/material";
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
          color: "#101313",
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
          variant="h5"
          gutterBottom
          sx={{
            color: "#F9A825",
            marginBottom: "2rem",
            borderBottom: "1px solid #F9A825",
          }}
        >
          {" "}
          Project Details{" "}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#EF6C00",
            marginBottom: "2rem",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: "3rem",
              py: "1rem",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow:
                  "0px 20px 30px rgba(0, 0, 0, 0.4), 0px 12px 12px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            {(projectData.projectName, " test")}
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
            Your Aim
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
            Project Type
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
          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 2, color: "#F9A825" }}
          >
            Category
          </Typography>
          <Stack
            direction="row"
            gap={2}
            sx={{
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "100%",
              my: 2,
            }}
          >
            {projectData.category.map((data, index) => (
              <Chip
                key={index}
                label={data.label}
                sx={{
                  backgroundColor: "#101313",
                  color: "#F9A825",
                  borderRadius: "10px",
                  my: "0.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              />
            ))}
          </Stack>
        </Box>
        <Button
          variant="contained"
          sx={{
            marginBottom: "2rem",
            color: "#101313",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.4)",
            },

            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            p: 2,
          }}
          onClick={() => {
            window.history.back();
            handleReset();
          }}
        >
          Reset and Back{" "}
        </Button>
      </Paper>
    </Container>
  );
}

export default ProjectPage;
