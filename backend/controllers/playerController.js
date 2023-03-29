const asyncHandler = require('express-async-handler')

const Player = require('../models/playerModel')
const User = require('../models/userModel')

const getPlayer = asyncHandler(async (req, res) => {
const player = await Player.find({ user: req.user.id })

  res.status(200).json(player)
})

const setPlayer = asyncHandler(async (req, res) => {
  // console.log(req.body)

  if (!req.body.name) {
    res.status(400)
    throw new Error('Please add a player field')
  }

  const player = await Player.create({
    name: req.body.name,
    user: req.user.id
  })

  res.status(200).json(player)
})

const updatePlayer = asyncHandler(async (req, res) => {
  const player = await Player.findById(req.params.id)

  if(!player) {
    res.status(400)
    throw new Error('Player not found')
  }

  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  if(player.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
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

  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  if(player.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
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