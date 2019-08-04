import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  border: none;
  border-radius: 2rem;
  padding: 1rem 4rem;
  text-align: center;
  letter-spacing: 1.5px;
  color: #ffffff;
  cursor: pointer;
  background-color: #eb8555;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 0.5rem 3.3rem;
    font-size: 0.9rem;
  }
`;

const BackButton = ({ link, icon }) => {
  return (
    <Button to={`${link}`}>
      <i className={`${icon}`} />
    </Button>
  );
};

export default BackButton;
