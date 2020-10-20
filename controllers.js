const models = require('./models.js')

module.exports = {
    getReviewsData: (req, res) => {
    let id = req.params.product_id 
    console.log(id)
       models.getReviews(id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send("error getting data")
        })
    },
    getMetaData: (req, res) => {
        let id = req.params.product_id 
           models.getMeta(id)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).send("error getting data")
            })
    },
    addReview: (req, res) => {
        
        let id = req.params.product_id 
        let rating = req.body.rating
        let summary = req.body.summary 
        let body = req.body.body
        let recommend = req.body.recommend
        let name = req.body.name
        let email = req.body.email
        let photos = req.body.photos
        let characteristics = req.body.characteristics
        console.log("in controller", req.params.product_id)
           models.addReview(id, rating, summary, body, recommend,
            name,email,photos,characteristics)
            .then((data) => {
                res.status(201).send('Created')
            })
            .catch((err) => {
                console.log(err)
                res.status(404).send("error creating review")
            })
    },
    markHelpful: (req, res) => {
        let id = req.params.review_id 
        console.log("review id", id)
           models.markHelpful(id)
            .then(() => {
                res.status(204).send()
            })
            .catch((err) => {
                console.log(err)
                res.status(404).send("error marking helpful")
            })
    },
    report: (req, res) => {
        let id = req.params.review_id 
           models.report(id)
            .then(() => {
                res.status(204).send()
            })
            .catch((err) => {
                console.log(err)
                res.status(404).send("error reporting")
            })
    }
    
}