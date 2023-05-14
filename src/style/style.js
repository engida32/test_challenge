import { Circle } from "@mui/icons-material";
import {
  StepConnector,
  Typography,
  stepConnectorClasses,
  styled,
} from "@mui/material";
export const style = {
  color: "#fff",
  bgcolor: "rgba(250, 250, 250, 0.1)",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  p: "13px, 24px, 13px, 24px                 ",
};

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2B8CE6",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2B8CE6",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
export const VQontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2B8CE6",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2B8CE6",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
    height: "60px",
  },
}));

export const QontoStepIcon = styled(Circle)(({ theme, active }) => ({
  color: active ? "#2B8CE6" : "gray",
}));

export const QontoTypography = styled(Typography)(({ active }) => ({
  color: active ? "#2B8CE6" : "gray",
}));
