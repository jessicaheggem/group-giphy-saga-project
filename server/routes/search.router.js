const express = require('express');
const pool = require('../modules/pool');
const axios = require ('axios');

const router = express.Router();


router.get('/', (req, res) => {
    console.log('got to /search');
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}q=${req.query}`)
    .then(response =>{
        console.log(response.data);
        res.send(response.data) 
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500)
    })
})


module.exports = router;