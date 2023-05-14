import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ProjectContext } from "../context/projectContex";
import { useNavigate } from "react-router-dom";
import {
  QontoConnector,
  QontoStepIcon,
  QontoTypography,
  VQontoConnector,
  style,
} from "../style/style";

function StepperPage() {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const { projectData, updateProjectData } = useContext(ProjectContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateProjectData({ [name]: value });
  };
  const incrementWorkerCount = () => {
    updateProjectData({ workerCount: projectData.workerCount + 1 });
  };

  const decrementWorkerCount = () => {
    updateProjectData({ workerCount: projectData.workerCount - 1 });
  };
  return (
    <Box
      sx={{
        border: "1px solid ",
        minHeight: "100%",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          background: "#101313",
          minHeight: "100vh",
        }}
      >
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
            background: "#101313",
            boxShadow: "1px 0px 0px #2D3232",
            position: "relative",
            overflow: "clip",
            borderTopLeftRadius: "5px solid green",
          }}
        >
          <Stepper
            activeStep={activeStep}
            connector={<VQontoConnector />}
            orientation="vertical"
          >
            <Step>
              <StepLabel
                StepIconComponent={QontoStepIcon}
                StepIconProps={{ active: activeStep >= 0 }}
              >
                <QontoTypography variant="h6" active={activeStep >= 0}>
                  Start First Project
                </QontoTypography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                StepIconComponent={QontoStepIcon}
                StepIconProps={{ active: activeStep >= 1 }}
              >
                <QontoTypography variant="h6" active={activeStep >= 1}>
                  Project Details
                </QontoTypography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                StepIconComponent={QontoStepIcon}
                StepIconProps={{ active: activeStep >= 2 }}
              >
                <QontoTypography variant="h6" active={activeStep >= 2}>
                  Project Details
                </QontoTypography>
              </StepLabel>
            </Step>
          </Stepper>
          <Box
            sx={{
              borderRadius: "50%",
              width: "100%",
              background:
                "radial-gradient(50% 50% at 50% 50%, #101313 38.02%, rgba(16, 19, 19, 0) 100%)",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                width: "100%",
                border: "1px solid #2D3232",
                height: "240px",
                position: "absolute",
                bottom: -150,
                left: 0,
                right: 0,
                bg: "#101313",
                boxSize: "border-box",

                background:
                  "linear-gradient(280.87deg, #87F696 20.45%, #00FFFF 41.25%, #9C16EF 72.03%, #4200FF 94.43%)",

                opacity: 0.5,
                filter: "blur(32.5px)",
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
            alignSelf: "center",
            justifyContent: "center",
            background: "#101313",
            mx: 2,
            width: {
              xs: "60%",
              sm: "80%",
            },
          }}
        >
          <Stepper
            activeStep={activeStep}
            connector={<QontoConnector />}
            orientation={"horizontal"}
          >
            <Step>
              <StepLabel
                StepIconComponent={QontoStepIcon}
                StepIconProps={{ active: activeStep >= 0 }}
              >
                <Typography
                  variant="h6"
                  color={activeStep === 0 ? "white" : "gray"}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                    },
                  }}
                >
                  Start First Project
                </Typography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                StepIconComponent={QontoStepIcon}
                StepIconProps={{ active: activeStep >= 1 }}
              >
                <Typography
                  color={activeStep === 1 ? "white" : "gray"}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                    },
                    fontSize: "13px",
                  }}
                >
                  Project Details
                </Typography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                StepIconComponent={QontoStepIcon}
                StepIconProps={{ active: activeStep >= 2 }}
              >
                <Typography
                  variant="h6"
                  color={activeStep === 2 ? "white" : "gray"}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                    },
                  }}
                >
                  Project Details
                </Typography>
              </StepLabel>
            </Step>
          </Stepper>
        </Grid>

        <Grid
          item
          xs={11}
          sm={10}
          sx={{
            my: 5,
            placeSelf: "start",
          }}
        >
          {activeStep === 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "baseline",
              }}
            >
              <Typography variant="h6" color="#2B8CE5" m={4}>
                To Create Quest you need firstly create Project{" "}
              </Typography>
              <Typography variant="h5" color="#fff" mb={2}>
                Add New Project{" "}
              </Typography>
              <FormControlLabel
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column-reverse",
                  justifyContent: "center",
                  alignContent: "start",
                  alignItems: "start",
                  maxWidth: "90%",
                }}
                control={
                  <TextField
                    placeholder="Awesome NFT Project "
                    type="text"
                    name="projectName"
                    value={projectData.projectName}
                    onChange={handleInputChange}
                    sx={{
                      width: "100%",
                      my: 2,
                      color: "#fff",
                      borderRadius: "10px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",

                      "& .MuiInputBase-input": {
                        color: "#fff",
                        width: "100%",
                        "&::placeholder": {
                          color: "#fff",
                        },
                      },
                    }}
                  />
                }
                label={` Project Name (It can be changed later)  `}
                labelPlacement="start"
              />

              <FormControlLabel
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column-reverse",
                  justifyContent: "center",
                  alignContent: "start",
                  alignItems: "start",
                  maxWidth: "90%",
                }}
                control={
                  <TextField
                    placeholder="Alphaguilty.io/awesomenftpunch"
                    type="url"
                    name="projectUrl"
                    defaultValue={projectData?.projectUrl}
                    value={projectData.projectUrl}
                    onChange={handleInputChange}
                    sx={{
                      width: "100%",
                      my: 2,
                      color: "#fff",
                      borderRadius: "10px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",

                      "& .MuiInputBase-input": {
                        color: "#fff",
                        "&::placeholder": {
                          color: "#fff",
                        },
                      },
                    }}
                  />
                }
                label="Project URL (It cannot be changed after creation)"
                labelPlacement="start"
              />
              <Typography variant="h6" color="#fff" m={5}>
                Project Category (It cannot be changed after creation){" "}
              </Typography>
              <Stack
                direction="row"
                gap={2}
                sx={{
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "start",
                  maxWidth: "90%",
                }}
              >
                <Chip label="NFT" sx={style} />
                <Chip
                  label="GameFi"
                  sx={{
                    color: "#2B8CE5",
                    bgcolor: "#217AFF1A",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    p: "13px, 24px, 13px, 24px                 ",
                  }}
                />
                <Chip label="DeFi" sx={style} />
                <Chip label="DAO" sx={style} />
                <Chip label="SocialFi" sx={style} />
                <Chip label="Metaverse" sx={style} />
                <Chip label="Tools" sx={style} />
                <Chip label="Ecosystem" sx={style} />
                <Chip label="Others" sx={style} />
              </Stack>
              <Button
                onClick={handleNext}
                sx={{
                  width: {
                    xs: "90%",
                    sm: "80%",
                    md: "20%",
                    lg: "25%",
                    xl: "25%",
                  },
                  mt: 5,
                  color: "#101313",
                  bgcolor: "#2B8CE5",
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Add Project
              </Button>
            </Box>
          )}
          {activeStep === 1 && (
            <Box
              sx={{
                m: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "start",
              }}
            >
              <Typography
                mb={4}
                align="start"
                sx={{
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "24px",
                  color: "#2B8CE6",
                }}
              >
                Project Details{" "}
              </Typography>

              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "32px",
                }}
              >
                What is your main goal with AlphaQuest?{" "}
              </Typography>
              <RadioGroup
                type="text"
                name="aim"
                value={projectData.aim}
                onChange={handleInputChange}
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <FormControlLabel
                  value="Grow My Community"
                  control={<Radio sx={{ color: "gray" }} />}
                  label="Grow My Community"
                  sx={{
                    color: "#ffff",

                    borderRadius: "4px",
                    "&.Mui-checked": {
                      borderColor: "green",
                      backgroundColor: "lightgreen",
                    },
                  }}
                />
                <FormControlLabel
                  value="Activate Existing Members"
                  control={<Radio sx={{ color: "gray" }} />}
                  label="Activate Existing Members"
                  sx={{
                    color: "#ffff",

                    borderRadius: "4px",
                    "&.Mui-checked": {
                      borderColor: "green",
                      backgroundColor: "lightgreen",
                    },
                  }}
                />
                <FormControlLabel
                  value="Understand My Members"
                  control={<Radio sx={{ color: "gray" }} />}
                  label="Understand My Members"
                  sx={{
                    color: "#ffff",
                    borderRadius: "4px",
                    "&.Mui-checked": {
                      borderColor: "green",
                      backgroundColor: "lightgreen",
                    },
                  }}
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio sx={{ color: "gray" }} />}
                  label="Other"
                  sx={{
                    color: "#ffff",

                    borderRadius: "4px",
                    "&.Mui-checked": {
                      borderColor: "green",
                      backgroundColor: "lightgreen",
                    },
                  }}
                />
              </RadioGroup>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  justifyItems: "flex-start",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "32px",

                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "70%",
                    lg: "50%",
                  },
                }}
              >
                <Button
                  onClick={handleBack}
                  sx={{
                    maxWidth: "50%",
                    mt: 5,
                    padding: "13px 34px",
                    color: "#FAFAFA",
                    background: "rgba(250, 250, 250, 0.1) ",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  sx={{
                    width: "50%",
                    padding: "13px 24px",

                    mt: 5,
                    color: "#101313",
                    bgcolor: "#2B8CE5",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  Add Project
                </Button>
              </Box>
            </Box>
          )}
          {activeStep === 2 && (
            <Box
              sx={{
                m: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "start",
              }}
            >
              <Box>
                <Typography
                  mb={4}
                  align="start"
                  sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    color: "#2B8CE6",
                  }}
                >
                  Project Details{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: " 500",
                    fontSize: "28px",
                  }}
                >
                  How many full-time workers on the project?{" "}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "50%",
                    lg: "40%",
                  },
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    background: "rgba(250, 250, 250, 0.1)",
                    backdropFilter: "blur(10px)",
                    fontSize: "33px",
                    height: "100%",
                  }}
                  onClick={decrementWorkerCount}
                >
                  -
                </Button>

                <TextField
                  type="number"
                  name="workerCount"
                  value={projectData.workerCount}
                  onChange={handleInputChange}
                  sx={{
                    m: 2,
                    color: "white",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    "& .MuiInputBase-input": {
                      color: "white",
                      "&::placeholder": {
                        color: "white",
                      },
                    },
                  }}
                  disabled={projectData.workerCount === 0}
                />

                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    background: "rgba(250, 250, 250, 0.1)",
                    backdropFilter: "blur(10px)",
                    fontSize: "33px",
                    height: "100%",
                  }}
                  onClick={incrementWorkerCount}
                >
                  +
                </Button>
              </Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: " 500",
                  fontSize: "28px",
                  my: 4,
                }}
              >
                Are you pre or post product launch?{" "}
              </Typography>
              <RadioGroup
                name="type"
                value={projectData.type}
                onChange={handleInputChange}
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <FormControlLabel
                  value="Pre Product"
                  control={<Radio sx={{ color: "gray" }} />}
                  label="Pre Product"
                  sx={{
                    color: "#ffff",

                    borderRadius: "4px",
                    "&.Mui-checked": {
                      borderColor: "green",
                      backgroundColor: "lightgreen",
                    },
                  }}
                />

                <FormControlLabel
                  value="Post Product"
                  control={<Radio sx={{ color: "gray" }} />}
                  label="Post Product"
                  sx={{
                    color: "#ffff",

                    borderRadius: "4px",
                    "&.Mui-checked": {
                      borderColor: "green",
                      backgroundColor: "lightgreen",
                    },
                  }}
                />
              </RadioGroup>

              <FormControlLabel
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column-reverse",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "start",
                  width: "90%",
                  my: 4,
                }}
                control={
                  <TextField
                    placeholder="awesomenft@gmail.com"
                    type="email"
                    name="email"
                    value={projectData.email}
                    onChange={handleInputChange}
                    sx={{
                      my: 2,
                      color: "#fff",
                      borderRadius: "10px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",

                      "& .MuiInputBase-input": {
                        color: "#fff",
                        "&::placeholder": {
                          color: "#fff",
                        },
                      },
                    }}
                  />
                }
                label={
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "33px",
                    }}
                  >
                    {" "}
                    Contact Email{" "}
                  </span>
                }
                labelPlacement="start"
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  justifyItems: "flex-start",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "32px",

                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "70%",
                    lg: "50%",
                  },
                }}
              >
                <Button
                  onClick={handleBack}
                  sx={{
                    maxWidth: "50%",
                    mt: 5,
                    padding: "13px 34px",
                    color: "#FAFAFA",
                    background: "rgba(250, 250, 250, 0.1) ",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={() => navigate("/project")}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "50%",
                      lg: "50%",
                    },
                    padding: "13px 24px",
                    mt: 5,
                    color: "#101313",
                    bgcolor: "#2B8CE5",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  Create Project
                </Button>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default StepperPage;
