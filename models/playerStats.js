// models/playerStats.js

const mongoose = require('mongoose');

const playerStatsSchema = new mongoose.Schema({
    playerName: String,
    kills: Number,
    deaths: Number,
    // Otros campos de estadísticas de interés
});

const PlayerStats = mongoose.model('PlayerStats', playerStatsSchema);

module.exports = PlayerStats;