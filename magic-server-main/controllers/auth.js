const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
var nodemailer = require("nodemailer");

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    "538455386283-rrf4bib8m9eu3k97ajpt9ka9bobejla3.apps.googleusercontent.com",
    "OBF6flsOoPG2-W5QyGqpnOkr",
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token:
      "1//04zfkz8rewF3UCgYIARAAGAQSNwF-L9Irx7HY6y-R564HdbA-Lq1VzUBI7UVuPRuSEQW5DTQpqbDgtZ0_IgI81JmpJWbAt2e2WPM",
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "rafa.dev.medeiros@gmail.com",
      accessToken,
      clientId:
        "538455386283-rrf4bib8m9eu3k97ajpt9ka9bobejla3.apps.googleusercontent.com",
      clientSecret: "OBF6flsOoPG2-W5QyGqpnOkr",
      refreshToken:
        "1//04zfkz8rewF3UCgYIARAAGAQSNwF-L9Irx7HY6y-R564HdbA-Lq1VzUBI7UVuPRuSEQW5DTQpqbDgtZ0_IgI81JmpJWbAt2e2WPM",
    },
  });
  return transporter;
};

const sendEmail = async (emailOptions) => {};

//Create user
exports.signup =  (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  User.findOne({ email }).exec( async(err, user) => {
    if (user) {
      return res.status(400).json({ error: "Esse email já possui uma conta." });
    }
    const token = jwt.sign(
      { name, email, password },
      process.env.JWT_ACC_ACTIVE,
      { expiresIn: "20m" }
    );

    var mailOptions = {
      subject: "Ativação de conta Project Magic",
      text: `Acesse o link para verificação: https://magic-web.vercel.app/confirm-user/${token}`,
      to: email,
      from: "rafa.dev.medeiros@gmail.com",
    };
    let emailTransporter = await createTransporter();
    emailTransporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({
          error: error.message,
        });
      }
      return res.json({
        message: "Um email foi enviado por favor verifique sua conta",
      });
    });
  });
};

exports.activateAccount = (req, res) => {
  const { token } = req.body;
  console.log("dale");
  if (token) {
    jwt.verify(token, process.env.JWT_ACC_ACTIVE, function (err, decodedToken) {
      if (err) {
        return res
          .status(400)
          .json({ error: "Verificação incorreta ou expirada." });
      }
      const { name, email, password } = decodedToken;
      User.findOne({ email }).exec((err, user) => {
        if (user) {
          return res
            .status(400)
            .json({ error: "Esse email já possui uma conta." });
        }
        let newUser = new User({ name, email, password });
        newUser.save((err, sucess) => {
          if (err) {
            console.log("Erro no cadastro durante a verificação", err);
            return res.status(400), json({ error: "Error activating account" });
          }
          res.json({
            message: "Cadastrado com sucesso!",
          });
        });
      });
    });
  } else {
    return res.json({ error: "Alguma coisa deu errado, tente novamente!" });
  }
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (user === null) {
      return res.status(400).json({
        error: "Esse usuario não existe, cadastre-se primeiro",
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        error: "Email ou senha incorretos",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SIGNIN_KEY, {
      expiresIn: "7d",
    });
    const { _id, name, email } = user;

    res.json({
      token,
      user: { _id, name, email },
    });
  });
};

exports.googlelogin = (req, res) => {
  const { tokenId } = req.body;

  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "538455386283-rrf4bib8m9eu3k97ajpt9ka9bobejla3.apps.googleusercontent.com",
    })
    .then((response) => {
      const { email_verified, name, email } = response.payload;
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: "Esse usuario não existe, cadastre primeiro",
            });
          } else {
            if (user) {
              const token = jwt.sign(
                { _id: user._id },
                process.env.JWT_SIGNIN_KEY,
                { expiresIn: "7d" }
              );
              const { _id, name, email } = user;

              res.json({
                token,
                user: { _id, name, email },
              });
            } else {
              let password = email + process.env.JWT_SIGNIN_KEY;
              let newUser = new User({ name, email, password });
              newUser.save((err, data) => {
                if (err) {
                  return res.status(400).json({
                    error: "Algo deu errado no cadastro.",
                  });
                }
                const token = jwt.sign(
                  { _id: data._id },
                  process.env.JWT_SIGNIN_KEY,
                  { expiresIn: "7d" }
                );
                const { _id, name, email } = newUser;

                res.json({
                  token,
                  user: { _id, name, email },
                });
              });
            }
          }
        });
      }
      console.log(response.payload);
    });
  console.log();
};

exports.facebooklogin = (req, res) => {
  const { userID, accessToken } = req.body;

  let urlGraphFacebook = `https://graph.facebook.com/2v.11/${userID}/?fields=id,name,email&acess_token=${accessToken}`;

  fetch(urlGraphFacebook, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      const { email, name } = response;

      User.findOne({ email }).exec((err, user) => {
        if (err) {
          return res.status(400).json({
            error: "Esse usuario não existe, cadastre primeiro",
          });
        } else {
          if (user) {
            const token = jwt.sign(
              { _id: user._id },
              process.env.JWT_SIGNIN_KEY,
              { expiresIn: "7d" }
            );
            const { _id, name, email } = user;

            res.json({
              token,
              user: { _id, name, email },
            });
          } else {
            let password = email + process.env.JWT_SIGNIN_KEY;
            let newUser = new User({ name, email, password });
            newUser.save((err, data) => {
              if (err) {
                return res.status(400).json({
                  error: "Algo deu errado no cadastro.",
                });
              }
              const token = jwt.sign(
                { _id: data._id },
                process.env.JWT_SIGNIN_KEY,
                { expiresIn: "7d" }
              );
              const { _id, name, email } = data;

              res.json({
                token,
                user: { _id, name, email },
              });
            });
          }
        }
      });
    });
};
