import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import themeDefault from "../components/particles/themeDefault"
import GlobalStyles from "../components/particles/globalStyles"

const GlobalWrapper = (storyFn) => (
  <div>
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  </div>
);

addDecorator(GlobalWrapper);
