import React, { Component } from "react";

import Layout from "../styles/Layout";
import Container from "../styles/Container";
import PageTitle from "../styles/PageTitle";

import DemonstratorDetailCard from "../styles/DemonstratorDetailCard";
import CardList from "../styles/CardList";

import axios from "axios";
import BackButton from "../styles/BackButton";
import PageSubTitle from "../styles/PageSubTitle";

import ScrollUpButton from "react-scroll-up-button";

class DemonstratorDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      images: [],
      movies: []
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`https://auth-rest-api.herokuapp.com/data/${id}`).then(res => {
      this.setState({
        card: res.data,
        images: res.data.images,
        movies: res.data.movies
      });
    });
  }
  render() {
    const { card, images, movies } = this.state;
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
          <PageTitle>{card.title}</PageTitle>
          <div className="row mb-3">
            <BackButton link="/demonstrator" icon="fas fa-arrow-left" />
          </div>
          <div className="row mb-3">
            <p className="demonstrator-detail-text">{card.description}</p>
          </div>
          <div className="row mb-3">
            <img
              className="demonstrator-detail-image"
              src={card.landing_image}
              alt="demonstrator-detail"
            />
          </div>

          {images ? (
            <React.Fragment>
              <div className="row mb-3">
                <PageSubTitle>Details</PageSubTitle>
              </div>
              <CardList>
                {images.map((image, index) => (
                  <DemonstratorDetailCard
                    key={index}
                    imgLink={image.url}
                    title={image.text}
                  />
                ))}
              </CardList>
            </React.Fragment>
          ) : (
            ""
          )}
          {movies ? (
            <React.Fragment>
              <div className="row mb-3">
                <PageSubTitle>Details</PageSubTitle>
              </div>
              <CardList>
                {movies.map((movie, index) => (
                  <DemonstratorDetailCard
                    key={index}
                    movieLink={movie.url}
                    title={movie.text}
                  />
                ))}
              </CardList>
            </React.Fragment>
          ) : (
            ""
          )}
        </Container>
      </Layout>
    );
  }
}

export default DemonstratorDetail;
