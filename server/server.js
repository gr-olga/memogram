// import express from 'express';
const express = require("express");
const pictures = require("./pictures.json");
// import pictures from "./pictures.json";

const app = express();
const port = 4000;


app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    console.log("hello");
    res.json(pictures);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



