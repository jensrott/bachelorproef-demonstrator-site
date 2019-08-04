import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { shakeAnimation } from "./helpers/animations";
import { NavContainer } from "./NavContainer";

import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

import logo from "../../assets/svg/lamp_yellow.svg";

const Header = styled.header`
  background-color: #fafafa;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.175);
  color: #fff;
  padding: 0rem 3rem;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`;

const Li = styled.li`
  margin: 1rem;
  padding: 1rem;
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

const activeLinkStyle = {
  color: "#000"
};

class Menu extends Component {
  logout = () => {
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <Header>
        <NavContainer>
          <Ul>
            <li style={{ marginRight: "auto" }}>
              <NavLink to="/" activeStyle={activeLinkStyle}>
                <Logo src={logo} alt="header-logo" />
              </NavLink>
            </li>
            <Li>
              <NavLink to="/about/" activeStyle={activeLinkStyle}>
                Over
              </NavLink>
            </Li>
            <Li>
              <a style={{ cursor: "pointer" }} to="#">
                Demonstrator
              </a>
            </Li>

            {isAuthenticated === true ? (
              <Li>
                <NavLink
                  onClick={this.logout}
                  to="/login"
                  activeStyle={activeLinkStyle}
                >
                  Uitloggen
                </NavLink>
              </Li>
            ) : (
              <Li>
                <NavLink to="/login" activeStyle={activeLinkStyle}>
                  Login
                </NavLink>
              </Li>
            )}
          </Ul>
        </NavContainer>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Menu);
