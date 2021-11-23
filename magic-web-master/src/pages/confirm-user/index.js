import React from "react";
import { Route } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/login.png";
import history from "../history";
import axios from "axios";


function Confirm() {

  const url = window.location.href;
  const res = url.split("/");
  const token = res[4];

  const confirmAccont = (e) => {
    
    axios({
      method: "POST",
      url: "https://project-magic-server.herokuapp.com/api/email-activate",
      data: { token: token },
    }).then(
      (response) => {
        console.log(response.data.message);
        console.log("conta confirmada");
        history.push("/login");
        window.location.reload(); 
      },
      (error) => {
        console.log(error.response.data.error);
      }
    );

    e.preventDefault();
  };

  return (
    <Route>
      <div className="box-register">
        <div class="box-left text-white">
          <div class="card-body">
            <img className="ml-5 logo" src={Logo} alt="register" />
            <h2 class="ml-5">Email confirmado!</h2>
            <p className="ml-5">
              Agora só falta alguns dados para você finalizar seu casdastro.
            </p>
          </div>
        </div>
        <div class="box-formRegister">
          <form onSubmit={(e) => confirmAccont(e)}>
            <div className="form-register form">
              <h1 className="display-3 mb-4 title-register">
                {" "}
                Dados Cadastrais
              </h1>

              <div className="form-group mb-4">
                <input
                  placeholder="Dado 01"
                  type="text"
                  className="form-control"
                  name="email"
                />
              </div>

              <div className="form-group mb-4">
                <input
                  type="password"
                  placeholder="Dado 02"
                  className="form-control"
                  name="password"
                />
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      placeholder="Dado 03"
                      className="form-control"
                      name="firstname"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div className="form-group mb-4">
                    <input
                      placeholder="Dado 04"
                      type="text"
                      className="form-control"
                      name="lastname"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Dado 05"
                  className="form-control"
                  name="phonenumber"
                />
              </div>
              <div className="form-group mt-4">
                <button
                  className="btn btn-primary btn-block btn-register btn-confirm"
                  type="submit"
                >
                  Finalizar Cadastro
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Route>
  );
}
export default Confirm;
