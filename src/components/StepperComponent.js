import { Circle } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Step,
  StepConnector,
  StepIcon,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function StepperPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setInput1("");
    setInput2("");
    setCheckboxValue(false);
    setRadioValue("");
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  const [value, setValue] = useState(null);

  const handleAutocompleteChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChipClick = (event) => {
    const value = event.currentTarget.getAttribute("data-value");
    setValue(value);
  };

  return (
    <Box>
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
            // pl: 5,
            width: "100%",
            position: "relative",
            overflow: "hidden",
            height: "100vh",
          }}
        >
          <Stepper activeStep={activeStep} orientation={"vertical"}>
            <Step>
              <StepLabel
                StepIconProps={{
                  icon: (
                    <Circle
                      fontSize="large"
                      sx={{
                        color: activeStep === 0 ? "white" : "gray",
                      }}
                    />
                  ),
                }}
              >
                <Typography
                  variant="h6"
                  color={activeStep === 0 ? "white" : "gray"}
                >
                  Start First Project
                </Typography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                StepIconProps={{
                  icon: (
                    <Circle
                      fontSize="large"
                      sx={{
                        color: activeStep === 1 ? "white" : "gray",
                      }}
                    />
                  ),
                }}
              >
                <Typography
                  variant="h6"
                  color={activeStep === 1 ? "white" : "gray"}
                >
                  Project Details
                </Typography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                StepIconProps={{
                  icon: (
                    <Circle
                      fontSize="large"
                      sx={{
                        color: activeStep === 2 ? "white" : "gray",
                      }}
                    />
                  ),
                }}
              >
                <Typography
                  variant="h6"
                  color={activeStep === 2 ? "white" : "gray"}
                >
                  Project Details
                </Typography>
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
                height: "20%",
                position: "absolute",
                bottom: 0,
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
            // make the stepper width  responsive on mobile
            width: {
              xs: "60%",
              sm: "80%",
            },
          }}
        >
          <Stepper activeStep={activeStep} orientation={"horizontal"}>
            <Step>
              <StepLabel
                StepIconProps={{
                  icon: (
                    <Circle
                      fontSize="large"
                      sx={{
                        color: activeStep === 0 ? "white" : "gray",
                      }}
                    />
                  ),
                }}
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
                StepIconProps={{
                  icon: (
                    <Circle
                      fontSize="large"
                      sx={{
                        color: activeStep === 1 ? "white" : "gray",
                      }}
                    />
                  ),
                }}
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
                  }}
                >
                  Project Details
                </Typography>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                StepIconProps={{
                  icon: (
                    <Circle
                      fontSize="large"
                      sx={{
                        color: activeStep === 2 ? "white" : "gray",
                      }}
                    />
                  ),
                }}
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
          xs={12}
          sm={10}
          sx={{
            my: 5,
            placeSelf: "start",
            mx: "auto",
          }}
        >
          {activeStep === 0 && (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "baseline",
                }}
              >
                <Typography variant="h6" color="#2B8CE5" my={4}>
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
                    alignContent: "center",
                    alignItems: "start",
                    width: "90%",
                  }}
                  control={
                    <TextField
                      placeholder="Awesome NFT Project"
                      onChange={(e) => setInput1(e.target.value)}
                      sx={{
                        width: "60%",
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
                  label=" Project Name (It can be changed later)"
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
                    width: "90%",
                  }}
                  control={
                    <TextField
                      placeholder="Alphaguilty.io/awesomenftpunch"
                      onChange={(e) => setInput1(e.target.value)}
                      sx={{
                        width: "60%",
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
                <Box>
                  <Typography variant="h6" color="#2B8CE5" my={5}>
                    Project Category (It cannot be changed after creation){" "}
                  </Typography>
                </Box>
                <Stack
                  direction="row"
                  gap={2}
                  sx={{
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  <Chip
                    label="NFT"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(250, 250, 250, 0.1)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      p: "13px, 24px, 13px, 24px                 ",
                    }}
                  />
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
                  <Chip
                    label="DeFi"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(250, 250, 250, 0.1)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      p: "13px, 24px, 13px, 24px                 ",
                    }}
                  />
                  <Chip
                    label="DAO"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(250, 250, 250, 0.1)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      p: "13px, 24px, 13px, 24px                 ",
                    }}
                  />
                  <Chip
                    label="SocialFi"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(250, 250, 250, 0.1)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      p: "13px, 24px, 13px, 24px                 ",
                    }}
                  />
                  <Chip
                    label="Metaverse"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(250, 250, 250, 0.1)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      p: "13px, 24px, 13px, 24px                 ",
                    }}
                  />
                  <Chip
                    label="Tools"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(250, 250, 250, 0.1)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      p: "13px, 24px, 13px, 24px                 ",
                    }}
                  />

                  <Chip
                    label="Ecosystem"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(250, 250, 250, 0.1)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      p: "13px, 24px, 13px, 24px                 ",
                    }}
                  />
                  <Chip
                    label="Others"
                    sx={{
                      color: "#fff",
                      bgcolor: "rgba(250, 250, 250, 0.1)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      p: "13px, 24px, 13px, 24px                 ",
                    }}
                  />
                </Stack>
                <Button
                  onClick={handleNext}
                  sx={{
                    width: {
                      xs: "98%",
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
                  Add Project{" "}
                </Button>
              </Box>
            </>
          )}
          {activeStep === 1 && (
            <Box
              sx={{
                width: "60%",
                my: 2,
              }}
            >
              <TextField
                label="Input 2"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
              <FormControlLabel
                sx={{ color: "#000" }}
                control={
                  <Checkbox
                    checked={checkboxValue}
                    onChange={(e) => setCheckboxValue(e.target.checked)}
                  />
                }
                label="Checkbox"
              />
              <Button onClick={handleBack}>Back</Button>
              <Button onClick={handleNext}>Next</Button>
            </Box>
          )}
          {activeStep === 2 && (
            <Box
              sx={{
                width: "60%",
                my: 2,
              }}
            >
              <RadioGroup
                value={radioValue}
                onChange={(e) => setRadioValue(e.target.value)}
                sx={{ color: "#000" }}
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="Option 1"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Option 2"
                />
              </RadioGroup>
              <Button onClick={handleBack}>Back</Button>
              <Button type="submit">Submit</Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default StepperPage;
