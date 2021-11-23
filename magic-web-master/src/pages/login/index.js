import React, { useState } from "react";

import axios from "axios";
import AuthService from '../../services/authService'
import { Link } from 'react-router-dom';

import history from '../history';

import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { AiFillFacebook } from 'react-icons/ai';
import Logo from '../../assets/login.png';
import Background from '../../assets/background.png';

import "./style.css";
import "react-tabs/style/react-tabs.css";

const Login = () => {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signin = (e) =>{
    e.preventDefault();
    return axios({
      method: "POST",
      url: "https://project-magic-server.herokuapp.com/api/signin",
      data: { email: email, password: password },
    }).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        history.push("/dashboard")
        window.location.reload(); 
        console.log("logado com sucesso");
      }
    });
  };

  const responseSuccessGoogle = (response) => {
    axios({
      method: "POST",
      url: "https://project-magic-server.herokuapp.com/api/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        history.push("/dashboard")
        window.location.reload(); 
        console.log("logado com sucesso");
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
    },(error) => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        console.log(error.reponse);
    });
  };

  return (
    <>
      <div className="content">
        <div className="background-left-content">
          <img src={Background} alt="Background" className="background-img"/>
        </div>
        <div className="login">
          <img src={Logo} alt="Logo" className="logo"/>
              <div className="d-flex tabs">
                <Link to="/login" className="tab-active">Login</Link>
                <Link to="/register" className="tab-disabled">Registrar-se</Link>
              </div>
              <form onSubmit={e => signin(e)}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    Nunca compartilhe seu login com ninguém
                  </small>
                <button
                  type="submit"
                  class="btn btn-primary btn-block btn-submit mt-2"
                >
                  Entrar
                </button>
                </form>
                <div className="mt-5">
                  <div className="d-flex">
                    <FacebookLogin
                      appId="402954964167003"
                      autoLoad={false}
                      callback={responseFacebook}
                      render={renderProps => (
                        <button className="btn btn-primary btn-block btn-facebook" onClick={renderProps.onClick}><AiFillFacebook/> Entrar com Facebook</button>
                      )}
                    />
                    <GoogleLogin
                      clientId="538455386283-rrf4bib8m9eu3k97ajpt9ka9bobejla3.apps.googleusercontent.com"
                      buttonText="Entrar com Google"
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
export default Login;
