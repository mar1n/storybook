import React from "react"
import { addDecorator, addParameters } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import themeDefault from "../components/particles/themeDefault"
import GlobalStyles from "../components/particles/globalStyles"
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

const GlobalWrapper = (storyFn) => (
  <div>
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  </div>
);

addDecorator(GlobalWrapper);


addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});