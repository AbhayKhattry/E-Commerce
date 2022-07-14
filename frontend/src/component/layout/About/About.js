import React from "react";
import "./aboutSection.css";
import {Typography, Avatar } from "@material-ui/core";
const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">Founder</Typography>
        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              Founder
            />
            <Typography>Abhay Khattry</Typography>
            <span>
              E-Commerce is the one-stop mart for everything one needs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;