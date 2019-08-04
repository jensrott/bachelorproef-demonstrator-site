import React from "react";
import { ThemeProvider } from "styled-components";
// import Helmet from "react-helmet";
// import favicon from '../images/favicon.ico' TODO create my own favicon
import GlobalStyle from "../styles/config/global";
import theme from "../styles/config/theme";
// import config from "../utils/siteConfig";
import Menu from "./Menu";
import Footer from "./Footer";

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      {/* <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet> */}

      <ThemeProvider theme={theme}>
        <>
          <Menu />
          <div className="siteContent">{children}</div>
          <Footer />
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  );
};

export default Template;
