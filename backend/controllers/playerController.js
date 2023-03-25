const asyncHandler = require('express-async-handler')

const getPlayers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get player' })
})

const setPlayers = asyncHandler(async (req, res) => {
  console.log(req.body)

  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a player field')
  }

  res.status(200).json({ message: 'Set player' })
})

const updatePlayers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update player ${req.params.id}` })
})

const deletePlayers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete player ${req.params.id}` })
})

module.exports = {
  getPlayers,
  setPlayers,
  updatePlayers,
  deletePlayers,
}