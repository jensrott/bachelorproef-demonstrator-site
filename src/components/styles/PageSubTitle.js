import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-align: left;
  margin: 2rem 0;
  line-height: 1.2;
  color: #eb8555;
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.black};
    &:hover {
      color: ${props => props.theme.colors.light};
    }
  }
`;

const PageSubTitle = props => {
  return (
    <Title id={props.id} small={props.small}>
      {props.children}
    </Title>
  );
};

export default PageSubTitle;
