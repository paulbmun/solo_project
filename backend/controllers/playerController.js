const asyncHandler = require('express-async-handler')
const Player = require('../models/playerModel')

const getPlayer = asyncHandler(async (req, res) => {
const player = await Player.find()

  res.status(200).json(player)
})

const setPlayer = asyncHandler(async (req, res) => {
  // console.log(req.body)

  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a player field')
  }

  const player = await Player.create({
    text: req.body.text
  })

  res.status(200).json(player)
})

const updatePlayer = asyncHandler(async (req, res) => {
  const player = await Player.findById(req.params.id)

  if(!player) {
    res.status(400)
    throw new Error('Player not found')
  }

  const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedPlayer)
})

const deletePlayer = asyncHandler(async (req, res) => {
  const player = await Player.findById(req.params.id)
  console.log(player)

  if(!player) {
    res.status(400)
    throw new Error('Player not found')
  }

  await Player.deleteOne({ _id: player._id })

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getPlayer,
  setPlayer,
  updatePlayer,
  deletePlayer,
}