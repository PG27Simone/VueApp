const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({ message: 'OK' });
})

app.get('/api/leaderboard-summary', (req, res) => {
    const summaryData = [
        {player: 'Reid', score: 120},
        {player: 'Simone', score: 200},
        {player: 'Spencer', score: -2}
    ]
    res.json(summaryData);
});

app.get('*', (req, res) => {
    {
        res.sendFile(Path2D.join(__dirname, 'index.html'));
    }
});

app.listen(PORT, () => {
    console.log(`Backend running at http:localhost:${PORT}`)
});