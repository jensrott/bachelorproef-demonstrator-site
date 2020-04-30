import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";

import Layout from "../styles/Layout";
import Container from "../styles/Container";
import PageTitle from "../styles/PageTitle";
import ErrorMessage from "../styles/ErrorMessage";

import "./styles/auth.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: "",
      hidden: true,
      eyeClassName: "far fa-eye-slash"
    };
    this.OnChange = this.OnChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/demonstrator");
    }
    if (nextProps.errors.errMsg) {
      // console.log(nextProps.errors.errMsg);
      this.setState({ errors: nextProps.errors.errMsg });
    }
  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  OnSubmit(e) {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(data);
    // console.log(data);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
    if (this.state.hidden) {
      this.setState({ eyeClassName: "far fa-eye" });
    } else {
      this.setState({ eyeClassName: "fa fa-eye-slash" });
    }
  }

  render() {
    const { errors, username, eyeClassName, hidden, password } = this.state;
    return (
      <Layout>
        <Container>
          <PageTitle>Login</PageTitle>
          {errors ? <ErrorMessage message={errors} /> : ""}
          <div className="center-horizontal">
            <div className="card">
              <form onSubmit={e => this.OnSubmit(e)}>
                <div className="login_body">
                  <div className="form_field">
                    <input
                      name="username"
                      type="text"
                      placeholder="Gebruikersnaam"
                      required
                      onChange={e => this.OnChange(e)}
                      value={username}
                    />
                  </div>
                  <div className="form_field password-container">
                    <input
                      name="password"
                      type={hidden ? "password" : "text"}
                      placeholder="Paswoord"
                      required
                      onChange={e => this.OnChange(e)}
                      value={password}
                    />
                    <i onClick={this.toggleShow} className={eyeClassName} />
                  </div>
                  <div className="button_container">
                    <input type="submit" value="LOGIN" />
                    <p>
                      Nog geen account? <Link to="/register">Registreer</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
