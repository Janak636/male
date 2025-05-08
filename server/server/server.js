/* eslint-env node */
const express = require('express');
const cors = require('cors');
const path = require('path'); // Add this at the top with other requires
const {getAllPlayers, getPlayerById, getPlayersByClubId, getPlayerStatistics, addPlayer, getTopPlayers, deletePlayer} = require("./service/playersService");
const {getAllClubs, getClubById, addClub, getTopClubs, deleteClub, getClubTopPlayers} = require("./service/clubsService");
const {getAllTournaments, getTournamentById, addTournament, getOngoingTournaments, deleteTournament} = require("./service/tournamentsService");
const {getMatchByTournamentId, addMatchToTournament, getOngoingMatches, getMatchById} = require("./service/matchesService");
const {getAllLocations} = require("./service/locationsService");

const app = express();

// All middleware first
app.use(cors({
  origins: ['http://localhost:8080', process.env.CLOUD_URL]
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Static files middleware after other middleware

// Then all your API routes
app.get("/api/players", getAllPlayers);
app.get("/api/players/:id", getPlayerById);
app.get("/api/players/club/:id", getPlayersByClubId);
app.get("/api/players/statistics/:id", getPlayerStatistics);
app.get("/api/players/top/:limit", getTopPlayers);
app.post("/api/players", addPlayer);
app.delete("/api/players/:playerId", deletePlayer);
app.get("/api/clubs", getAllClubs);
app.get("/api/clubs/:id", getClubById);
app.get("/api/clubs/top/:limit", getTopClubs);
app.post("/api/clubs", addClub);
app.delete("/api/clubs/:clubId", deleteClub);
app.get("/api/clubs/:id/top-players", getClubTopPlayers);
app.get("/api/tournaments", getAllTournaments);
app.get("/api/tournaments/ongoing", getOngoingTournaments);
app.get("/api/tournaments/:id", getTournamentById);
app.post("/api/tournaments", addTournament);
app.delete("/api/tournaments/:tournamentId", deleteTournament);
app.get("/api/matches/ongoing", getOngoingMatches);
app.get("/api/matches/:id", getMatchById);
app.get("/api/matches/tournament/:id", getMatchByTournamentId);
app.post("/api/matches", addMatchToTournament);
app.delete("/api/matches/:matchId");
app.get("/api/locations", getAllLocations);
app.get("/", (req, res) => {
  res.send("Welcome to the Football API! Try /api/players or /api/clubs");
});

// The catch-all route should be last, after all API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Finally, start the server
app.listen(3000, () => {
  console.log("✅ Server is running at http://localhost:3000")});
