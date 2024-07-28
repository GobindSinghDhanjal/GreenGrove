"use client";
import React from "react";
import Subscribe from "./Subscribe";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  // Function to handle navigation
  const navigateTo = (path) => {
    router.push(path);
  };
  return (
    <div className="footer">
    <div className="sub-container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <h1>GreenGrove</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          <ul>
            <li onClick={() => navigateTo("/terms")}>Terms & Conditions</li>
            <li onClick={() => navigateTo("/contact")}>Contact Us</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={5}></Grid>
      </Grid>
      </div>
    </div>
  );
};

export default Footer;
