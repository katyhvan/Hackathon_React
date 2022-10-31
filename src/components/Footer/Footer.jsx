import React from "react";
import { Container } from "react-bootstrap";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#000",
          color: "#fff",
          position: "fixed",
          bottom: "0",
        }}
      >
        <Container
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <div>
            <TwitterIcon
              style={{ color: "#fff", marginRight: "10px", cursor: "pointer" }}
              onClick={() => window.open("https://twitter.com/Nike")}
            />
            <FacebookIcon
              style={{ color: "#fff", marginRight: "10px", cursor: "pointer" }}
              onClick={() => window.open("https://www.facebook.com/nike")}
            />
            <YouTubeIcon
              style={{ color: "#fff", marginRight: "10px", cursor: "pointer" }}
              onClick={() => window.open("https://www.youtube.com/user/nike")}
            />
            <InstagramIcon
              style={{ color: "#fff", marginRight: "10px", cursor: "pointer" }}
              onClick={() => window.open("https://www.instagram.com/nike/")}
            />
          </div>
        </Container>
        <div style={{ textAlign: "center", margin: "10px", cursor: "pointer" }}>
          <span style={{ marginRight: "20px" }}>
            <LocationOnIcon
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => window.open("https://jobs.nike.com/nyc")}
            />
            United States
          </span>
          <span>© 2022 Nike, Inc. All Rights Reserved</span>
        </div>
      </Container>
    </>
  );
};

export default Footer;
