// server.js

const express = require('express');
const mongoose = require('mongoose');
const PlayerStats = require('./models/playerStats'); // Define el modelo de datos para las estadísticas de los jugadores

const app = express();
const PORT = 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb+srv://root:dLcZgQzXHB04CwbH@kitmap.nd8b4wr.mongodb.net/?retryWrites=true&w=majority&appName=KitMap', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Ruta para obtener todas las estadísticas de los jugadores
app.get('/api/playerstats', async (req, res) => {
    try {
        const playerStats = await PlayerStats.find();
        res.json(playerStats);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});