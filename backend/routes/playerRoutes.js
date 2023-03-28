const express = require('express')
const router = express.Router()
const { getPlayer, setPlayer, updatePlayer, deletePlayer } = require('../controllers/playerController')

router.route('/').get(getPlayer).post(setPlayer)
router.route('/:id').put(updatePlayer).delete(deletePlayer)

module.exports = router