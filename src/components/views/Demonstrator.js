import React, { Component } from "react";

import Layout from "../styles/Layout";
import Container from "../styles/Container";
import PageTitle from "../styles/PageTitle";
import PageSubTitle from "../styles/PageSubTitle";
import DemonstratorCard from "../styles/DemonstratorCard";
import CardList from "../styles/CardList";
import QuestionMark from "../styles/QuestionMark";

import "../styles/helpers/bootstrap-grid.css";
import "./styles/demonstrator.css";
import "./styles/tippy-theme.css";

import "react-tippy/dist/tippy.css";

import axios from "axios";

import ReactPlayer from "react-player";
import ScrollUpButton from "react-scroll-up-button";
import { Element, scroller } from "react-scroll";
import { Tooltip } from "react-tippy";

class Demonstrator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }
  componentDidMount() {
    axios
      .get("https://auth-rest-api.herokuapp.com/data")
      .then(res => this.setState({ cards: res.data }));
  }

  scrollTo = () => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };
  render() {
    const { cards } = this.state;
    const scrollUpButtonStyles = {
      backgroundColor: "#EB8555",
      borderRadius: "100%",
      width: "60px",
      height: "60px",
      color: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    };
    return (
      <Layout>
        <Container>
          <ScrollUpButton style={scrollUpButtonStyles} />
          <PageTitle>De domotica demonstrator</PageTitle>
          <div className="row mb-3 space-between">
            <Tooltip
              theme="domotica"
              title="Over"
              position="bottom"
              trigger="mouseenter"
            >
              <QuestionMark link="/about" icon="fas fa-question" />
            </Tooltip>
            <Tooltip
              theme="domotica"
              title="Onderdelen"
              position="bottom"
              trigger="mouseenter"
            >
              <i onClick={this.scrollTo} className="fas fa-cogs cog-icon" />
            </Tooltip>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <PageSubTitle>Demo</PageSubTitle>
              <div className="center-horizontal">
                <ReactPlayer
                  width="1700px"
                  height="500px"
                  controls={true}
                  url={"https://www.youtube.com/watch?v=1M0qa4KtY_M"}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div style={{ marginBottom: "2rem" }}>
                <PageSubTitle>Zelf eens uitproberen ?</PageSubTitle>
              </div>
              <Tooltip
                theme="domotica"
                title="Ga naar Home Assistant"
                position="bottom"
                trigger="mouseenter"
              >
                <a href="http://hassio.local:8123" className="control-ha">
                  <p>Verbinden met de demonstrator</p>
                  <i className="fas fa-arrow-right" />
                </a>
              </Tooltip>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <Element name="scroll-to-element">
                <div>
                  <PageSubTitle id="onderdelen">Onderdelen</PageSubTitle>
                </div>
              </Element>
            </div>
          </div>

          <CardList>
            {cards.map((card, index) => (
              <DemonstratorCard
                key={index}
                title={card.title}
                imgLink={card.landing_image}
                slug={card.id}
              />
            ))}
          </CardList>
        </Container>
      </Layout>
    );
  }
}

export default Demonstrator;
