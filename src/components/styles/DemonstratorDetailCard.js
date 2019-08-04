import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Post = styled.li`
  position: relative;
  border: none;
  border-radius: 1rem;
  padding: 0.8rem 1rem;
  box-shadow: rgba(0, 0, 8, 0.08) 0px 4px 8px 0px;
  margin: 2rem;
  width: 100%;
  font-weight: bold
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? "0 0 100%" : "0 0 49%")};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? "0 0 100%" : "0 0 32%")};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
`;

const MovieWrapper = styled.div`
  width: 100%;
  display: block;
  border-radius: 1rem;
`;

const Img = styled.img`
  width: 100%;
  display: block;
  border-radius: 1rem;
`;

const Title = styled.h2`
  font-size: 1em;
  color: #707070;
  text-align: center;
  margin: 2rem 0;
`;

const DemonstratorDetailCard = ({ title, imgLink, movieLink }) => {
  return (
    <Post>
      <MovieWrapper>
        {movieLink ? <ReactPlayer controls={true} url={movieLink} /> : ""}
      </MovieWrapper>
      <Img src={imgLink} />
      <Title>{title}</Title>
    </Post>
  );
};

export default DemonstratorDetailCard;
