const Reviews = require('./database/index.js')

module.exports = {
    getReviews: (id) => {
        console.log(
        "in models", id
        )
        return Reviews.find({"product_id": id}).exec()
    },
    getMeta: (id) => {
        return Meta.find({"product_id": id}).exec()
    },
    addReview: (ids, rating, summary, body, recommend,
        name,email,photos,characteristics) => {
            console.log("in models review")
           return Reviews.find({}).sort({ id: -1 }).limit(1).exec()
            .then((data) => {
                let id = data[0].id
                let increment = id + 1
                return Reviews.create({
                    "product_id": ids,
                    "id":increment,
                    "rating": rating,
                    "summary": summary,
                    "body": body,
                    "recommend": recommend,
                    "reviewer_name": name,
                    "reviewer_email": email,
                    "photos": [photos],
                    "characteristics": characteristics 
                })
            })
            .catch((err) => console.log(err))
           
        // return Reviews.create({
        //     "product_id": id,
        //     "rating": rating,
        //     "summary": summary,
        //     "body": body,
        //     "recommend": recommend,
        //     "reviewer_name": name,
        //     "reviewer_email": email,
        //     "photos": [photos],
        //     "characteristics": characteristics 
        // })
    },
    markHelpful: (id) => {
        const filter = { id: id };
        const update = 1
        return Reviews.findOneAndUpdate({"id": id},{$inc:{helpfulness:update}}).exec()
    },
    report: (id) => {
        const update = { reported: true }
        return Reviews.findOneAndUpdate({"id": id},update).exec()
    }
}

// const mongoose = require("mongoose");
// const ProductReviewSchema = new mongoose.Schema({
//     id: {
//         type: String,
//     },
//     product_id: {
//         type: String
//     },
//     rating: {
//         type: String
//     },
//     date: {
//         type: String
//     },
//     summary: {
//         type: String
//     },
//     body: {
//         type: String
//     },
//     recommend: {
//         type: String
//     },
//     reported:{
//         type: String
//     },
//     review_name:{
//         type: String
//     },
//     review_email:{
//         type: String
//     },
//     response:{
//         type: String
//     },
//     helpfulness:{
//         type: String
//     }
// })

// const PhotoSchema = new mongoose.Schema({
//     id: {
//         type: Number,
//     },
//     url: {
//         type: String
//     },
 
// })

// const MetaSchema = new mongoose.Schema({
//     product_id: {
//         type: Number,
//     },
//     ratings: {
//         type: Object
//     },
//     recommended: {
//         type: Boolean
//     },
//     characteristics:{
//         size: {
//             id: {
//                 type: Number
//             },
//             value: {
//                 type: String
//             }
//         },
//         width: {
//             id: {
//                 type: Number
//             },
//             value: {
//                 type: String
//             }
//         },
//         comfort: {
//             id: {
//                 type: Number
//             },
//             value: {
//                 type: String
//             }
//         }
//     },
//     reviews: {
//         type: Number
//     },
//     reports: {
//         type: Number
//     }
// })


// const ProductReview = mongoose.model('reviews', ProductReviewSchema);
// const Photo = mongoose.model('Photo', PhotoSchema);
// const Meta = mongoose.model('Meta', MetaSchema);

// module.exports = { ProductReview, Photo, Meta }