const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const  router  =  express.Router();

router.use(bodyParser.urlencoded({ extended:  false }));
router.use(bodyParser.json());



router.post('/register', (req, res) => {
    res.status(200).send({ access_token:  '' });
});




router.post('/login', (req, res) => {
    res.status(200).send({ access_token:  '' });
});
