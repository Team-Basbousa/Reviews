const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5001;
const db = require('./database/index')
const routes = require("./routes.js")
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => res.status(200).send('hello'));
app.use('/', routes)



app.listen(PORT,() => {
    console.log(`Listening on ${PORT}`)
})
// app.get('/reviews/:product_id/list', (req, res) => {
//     let id = req.params.product_id.toString()
//     console.log("I am in get", id)
//     ProductReview.find()
//         .then((data) => {
//             res.status(200).send(data)
//         })
//         .catch((err) => {
//             res.status(400).send(err)
//         })
// })

// const mongoose = require("mongoose")
// const ProductReview = require("./models.js").ProductReview
// const Photo = require("./models.js").Photo
// const Meta = require("./models.js").Meta
// const DB_URI = "mongodb://mongo:27017/reviewsdb"

// mongoose.connect(DB_URI).then(() => {
//     console.log(`Listening on port: ${PORT}`)
//     app.listen(PORT)
// })