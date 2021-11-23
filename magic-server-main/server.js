const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//import routes
const authRoutes = require("./routes/auth.js")

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Servidor do Project Magic." });
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com Sucesso');
});


//middlewares
app.use('/api', authRoutes);


const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server ta rodando na ${PORT}.`);
});