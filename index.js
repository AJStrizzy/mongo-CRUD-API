require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const { models } = require('mongoose')

const Character = require('./models/overwatch')

mongoose.connect('mongodb://127.0.0.1:27017/overwatch')

const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.host}: ${db.port}`)
})

db.on('error', (err) => {
    console.log('Error', err)
})

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.send('Overwatch time! Lets get our Kaplan on.')
})

app.get('/character', (req, res) => {
    // const char1 = new Character({
    //     name: 'Reinhardt',
    //     type: 'Tank'
    // })
    // const reinAbility1 = {
    //     name: 'Fire Strike',
    //     description: 'Shoots fireball',
    //     ultimate: false
    // }
    // const reinAbility2 = {
    //     name: 'Earth Shatter',
    //     description: 'Knocks down enemies',
    //     ultimate: true
    // }
    // char1.abilities.push(reinAbility1)
    // char1.abilities.push(reinAbility2)
    // char1.save()
    res.send('Reinhardt added')
})



app.delete('/delete', (req, res) => {
    models.overwatch.deleteMany().then(() => {
        console.log('Reinhardt is toast')
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`you are jamming to the sounds on port: ${PORT}`)
})