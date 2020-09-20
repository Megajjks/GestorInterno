import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#F3F4F8",
    primary: "#FF5023",
    grey: "#828282",
    black: "#000000",
    white: "#FFFFFF",
    greylight: "#707070",
    greyTitle: "#707070",
    orange: "#FF5023",
    highPriority: "#E73D3A",
    mediumPriority: "#F9C44A",
    lowPriority: "#55DE99",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
