import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const NormalLink = styled(Link)``;

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

const Button = styled(Link)`
  border: none;
  border-radius: 2rem;
  width: 100%;
  padding: 10px;
  margin: 0;
  text-align: center;
  letter-spacing: 1.5px;
  color: #ffffff;
  cursor: pointer;
  background-color: #eb8555;
  display: flex;
  flex-flow: column;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const DemonstratorCard = ({ title, imgLink, slug }) => {
  return (
    <Post>
      <NormalLink to={`/demonstrator/${slug}`}>
        <Img src={imgLink} />
      </NormalLink>
      <Title>{title}</Title>
      <Button to={`/demonstrator/${slug}`}>Detail</Button>
    </Post>
  );
};

export default DemonstratorCard;
