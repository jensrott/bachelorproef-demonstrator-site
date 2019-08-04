import React from "react";

import Layout from "../styles/Layout";
import Container from "../styles/Container";
import PageTitle from "../styles/PageTitle";

const NotFoundPage = ({ location }) => {
  return (
    <Layout>
      <Container>
        <PageTitle>404</PageTitle>
        <p>Woops! No page for: {location.pathname}</p>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
