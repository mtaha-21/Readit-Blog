import React from "react";
import "./Hero.css";
import Box from "@mui/material/Box";

const Hero = () => {
  return (
    <Box
      sx={{
        minWidth: 300,
        // maxWidth: 900,
        height: 400,
        // backgroundColor: "primary.dark",
        position: "absolute",
        marginLeft: "10rem",
      }}
    >
      <div>
        <p className="first-p">Hello! Welcome to</p>
        <h1 className="first-h1">Readit blog</h1>
        <p className="second-p">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
    </Box>
  );
};

export default Hero;
