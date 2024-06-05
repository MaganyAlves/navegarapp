const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.post('http://192.168.15.154:8081/receita',async (req, res) => {
  //const receita = req.body;
  console.log('Rodando o controller');
  //res.status(201).send();
});