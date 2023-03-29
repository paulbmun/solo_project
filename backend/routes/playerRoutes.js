const express = require('express')
const router = express.Router()
const { getPlayer, setPlayer, updatePlayer, deletePlayer } = require('../controllers/playerController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getPlayer).post(protect, setPlayer)
router.route('/:id').put(protect, updatePlayer).delete(protect, deletePlayer)

module.exports = router