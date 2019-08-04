import React from "react";
import styled from "styled-components";
import logo from "../../assets/svg/lamp_yellow.svg";
import { Link } from "react-router-dom";

import { shakeAnimation } from "./helpers/animations";
import { NavContainer } from "./NavContainer";

const FooterShadow = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.175);
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5em 2em;
  margin: 0 -1.5em;
`;

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.black};
    &:hover {
      color: ${props => props.theme.colors.light};
    }
    &:visited {
      color: ${props => props.theme.colors.black};
    }
  }
`;

const MadeBy = styled.li`
  font-weight: bold;
  font-size: 1.1rem;
  color: #eb8555;
`;

const Logo = styled.img`
  cursor: pointer;
  transform: rotate(-15deg);
  width: 35px;
  height: auto;
  &:hover {
    animation: ${shakeAnimation} 0.5s ease-out;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    display: none;
  }
`;

const Footer = () => (
  <FooterShadow>
    <NavContainer>
      <List>
        <Item>
          <Link to="/">
            <Logo src={logo} alt="footer-logo" />
          </Link>
        </Item>
        <MadeBy>Ontwikkeld door Jens Rottiers</MadeBy>
      </List>
    </NavContainer>
  </FooterShadow>
);

export default Footer;
