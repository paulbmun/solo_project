const express = require('express')
const router = express.Router()
const { getPlayers, setPlayers, updatePlayers, deletePlayers } = require('../controllers/playerController')

router.route('/').get(getPlayers).post(setPlayers)
router.route('/:id').put(updatePlayers).delete(deletePlayers)

module.exports = router