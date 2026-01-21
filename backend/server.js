import express from 'express';

const app = express();

app.use(express.json());

app.listen(3000);

app.get('/', async(req, res) => {
    res.json({ message: "Server is healthy!"})
})