import React from "react";
import { Audiowide } from "next/font/google";
import { StyledLogo } from "./Logo.styled";
import { Typography } from "@mui/material";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

interface LogoProps {
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
}



const Logo: React.FC<LogoProps> = ({ size = "medium", style }) => {
  const BASE_SIZE_REM = 2;

  const getSize = () => {
    switch (size) {
      case "small":
        return 1;
      case "medium":
        return 2;
      case "large":
        return 3;
      default:
        return 2;
    }
  };
  const fontSize = `${BASE_SIZE_REM * getSize()}rem`;

  return (
    <StyledLogo
      className={`${audiowide.className}`}
      style={{
        fontSize: fontSize,
      }}
    >
      R2N
    </StyledLogo>
  );
};

export { Logo };
