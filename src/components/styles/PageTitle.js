import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => (props.small ? "1rem 0 4rem 0" : "0 0 3rem 0")};
  line-height: 1.2;
  color: #707070;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 2rem;
  }
`;

const PageTitle = props => {
  return <Title>{props.children}</Title>;
};

export default PageTitle;
