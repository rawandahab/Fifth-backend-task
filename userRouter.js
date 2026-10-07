const express = require('express')
const router = express.Router()

const User = require('../models/userModel')

router.post('/users', async (req, res) => {
    try{
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    }
    catch(error){
        res.status(400).send("An error happened!")
    }
})

router.get('/users', async (req, res) => {
    try{
        const retreivedUsers = await User.find()
        res.send(retreivedUsers)
    }
    catch(error){
        res.send("Can't find users..")
    }
})

router.get('/users/:_id', async (req, res) => {
    try{
        const foundUser = await User.find({_id: req.params._id})
        res.send(foundUser)
    }
    catch(error){
        res.send("Can't find the user with that id..")
    }
})

router.patch('/users/:_id', async (req, res) => {
    try{
        const found = await User.findById(req.params._id)
        found.age = 18
        await found.save()
        res.send(found)
    }
    catch(e){
        res.send("Can't be found!")
    }
})

router.delete('/users/:_id', async (req, res) => {
    try{
        await User.deleteOne({_id: req.params._id})

        res.send("This user is deleted successfully..")
    }
    catch(e){
        res.send("Can't be deleted!")
    }
})

module.exports = router