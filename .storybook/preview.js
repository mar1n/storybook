import React from "react"
import { addDecorator, addParameters } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import themeDefault from "../components/particles/themeDefault"


import ApolloWrapper from "../components/particles/apollo/provider"
import GlobalStyles from "../components/particles/globalStyles"
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

const GlobalWrapper = (storyFn) => (
  <div>
    <ApolloWrapper>
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
    </ApolloWrapper>
  </div>
);

addDecorator(GlobalWrapper);


addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});