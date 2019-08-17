import React, { Component } from "react";

import Layout from "../styles/Layout";
import Container from "../styles/Container";
import PageTitle from "../styles/PageTitle";
import BackButton from "../styles/BackButton";

class About extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <PageTitle>Over</PageTitle>
          <div className="row mb-3">
            <BackButton link="/demonstrator" icon="fas fa-home" />
          </div>
          <div className="row mb-3">
            <p>
              Deze website geeft een overzicht van de fysische demonstrator
              welke gebouwd is in het kader van de bachelorproef "Domotica
              starterskit voor jonge gezinnen". De verschillende onderdelen en
              functionaliteiten van de demonstrator worden beschreven naast een
              mogelijkheid om het allemaal eens zelf in real-time uit te
              proberen (controle via Home Assistant dashboard en monitoring via
              IP Camera). Deze demonstrator tracht een correct beeld te geven
              van typische toepassingsmogelijkheden van een modern domotica
              systeem voor jonge gezinnen.
            </p>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default About;
