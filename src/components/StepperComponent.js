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
  const style = {
    color: "#fff",
    bgcolor: "rgba(250, 250, 250, 0.1)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    p: "13px, 24px, 13px, 24px                 ",
  };
  const [radio, setRadio] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
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
            borderLeft: "5px solid green",
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
                    fontSize: "13px",
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
          xs={11}
          sm={10}
          sx={{
            my: 5,
            placeSelf: "start",
            mx: "auto",
            // border: "1px solid yellow",
          }}
        >
          {activeStep === 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "baseline",
                // border: "1px solid green",
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
                  alignContent: "center",
                  alignItems: "start",
                  width: "90%",
                }}
                control={
                  <TextField
                    placeholder="Awesome NFT Project"
                    onChange={(e) => setInput1(e.target.value)}
                    sx={{
                      // width: "60%",
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
                  maxWidth: "90%",
                }}
                control={
                  <TextField
                    placeholder="Alphaguilty.io/awesomenftpunch"
                    onChange={(e) => setInput1(e.target.value)}
                    sx={{
                      // width: "60%",
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
              <Typography variant="h6" color="#2B8CE5" m={5}>
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
                  fontWeight: " 500",
                  fontSize: "32px",
                  lineHeight: "38px",
                }}
              >
                What is your main goal with AlphaQuest?{" "}
              </Typography>
              <RadioGroup
                name="radio-buttons-group"
                value={value}
                onChange={handleChange}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
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
