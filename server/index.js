require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const sequelize = require('../db/db.js')

const PORT = process.env.PORT || 3000;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(CLIENT_PATH));

app.post('/createProfile', (req, res) => {
  console.log("hit", req.body);
})

app.put('/updateProfile', (req, res) => {
  console.log('updateProfile hit', req.body);
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
