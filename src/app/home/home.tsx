"use client"
import { Typography } from "@mui/material";
import { Logo } from "@components";
import { HomeStyled } from "./home.styled";

export default function Home() {
  return (
    <HomeStyled>
      <Logo size="large"></Logo>
      <Logo size="medium"></Logo>
      <Logo size="small"></Logo>
      <Typography
        variant="h6"
        component={"a"}
        href="https://www.linkedin.com/in/andres-artunduaga/"
      >
        About Me
      </Typography>
    </HomeStyled>
  );
}
