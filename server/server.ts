import express from 'express';
import pictures from "./pictures.json";

const app = express();
const port = 4000;


app.get('/pictures', (req, res) => {
    res.json(pictures);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



