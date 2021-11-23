import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { AiFillFacebook } from "react-icons/ai";
import Logo from "../../assets/login.png";
import Background from "../../assets/background.png";

import "./style.css";
import "react-tabs/style/react-tabs.css";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();

  const signup = (e) => {
    axios({
      method: "POST",
      url: "https://project-magic-server.herokuapp.com/api/signup",
      data: { name: name, email: email, password: password },
    }).then(
      (response) => {
        console.log("registrado com sucesso");
        setSuccessful(true);
        setMessage(response.data.message);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setSuccessful(true);
        setMessage(resMessage);
      }
    );
    e.preventDefault();
  };

  const responseSuccessGoogle = (response) => {
    axios({
      method: "POST",
      url: "https://project-magic-server.herokuapp.com/api/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } else {
        console.log("deu errado", response);
      }
    });
  };

  const responseErrorGoogle = (response) => {};

  const responseFacebook = (response) => {
    axios({
      method: "POST",
      url: "https://project-magic-server.herokuapp.com/api/facebooklogin",
      data: { accessToken: response.accessToken, userID: response.userID },
    }).then((response) => {
      console.log("Facebook login success", response);
    });
  };

  return (
    <>
      <div className="content">
        <div className="background-left-content">
          <img src={Background} alt="Background" className="background-img" />
        </div>
        <div className="login">
          <img src={Logo} alt="Logo" className="logo" />
          <div className="d-flex tabs">
            <Link to="/login" className="tab-disabled">
              Login
            </Link>
            <Link to="/register" className="tab-active">
              Registrar-se
            </Link>
          </div>
          {!successful && (
            <form onSubmit={(e) => signup(e)}>
              <input
                type="text"
                className="form-control"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control mt-3"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                class="btn btn-primary btn-block btn-submit mt-4"
              >
                Cadastrar
              </button>
            </form>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}

          <div className="mt-3">
            <div className="d-flex">
              <FacebookLogin
                appId="402954964167003"
                autoLoad={false}
                callback={responseFacebook}
                render={(renderProps) => (
                  <button
                    className="btn btn-primary btn-block btn-facebook"
                    onClick={renderProps.onClick}
                  >
                    <AiFillFacebook /> Cadastro Facebook
                  </button>
                )}
              />
              <GoogleLogin
                clientId="538455386283-rrf4bib8m9eu3k97ajpt9ka9bobejla3.apps.googleusercontent.com"
                buttonText="Cadastro Google"
                autoLoad={false}
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={"single_host_origin"}
                className="btn btn-primary btn-block btn-google"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
