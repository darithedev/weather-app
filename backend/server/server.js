import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', async(req, res) => {
    res.json({ message: "Server is healthy!"})
});

app.get('/weather', async (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});