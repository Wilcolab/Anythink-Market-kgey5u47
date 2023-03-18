import React from "react";
import { ThemeProvider } from "styled-components";
import logo from "../../imgs/logo.png";
import theme from "../../styles/theme";

const Banner = () => {

  return (
    <ThemeProvider theme={theme.dark}>
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default Banner;
