const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/reviewsdb')
    .then(() => {
        console.log("We are connected to the DB!")
    })
    .catch((err) => {
        console.log(err)
    })

const reviewSchema = new mongoose.Schema({
    id: Number,
    product_id: Number,
    rating: Number,
    date: String,
    summary: String,
    body: String,
    recommend: Boolean,
    reported: Boolean,
    reviewer_name: String,
    reviewer_email: String,
    response: String,
    helpfulness: Number,
    photos: Array,
    characteristics: Object
},{ collection : 'reviews' })

const Reviews = mongoose.model('Reviews', reviewSchema)

module.exports = Reviews


// const mongoose = require('mongoose');
// if(process.env.MONGODB_URI){
//   mongoose.connect(process.env.MONGODB_URI)
// } else{
//   mongoose.connect('mongodb://localhost:27017/reviewsdb', { useNewUrlParser: true });
// }
// const db = mongoose.connection;

// const PhotoSchema = new mongoose.Schema({
//     id: {
//         type: Number,
//     },
//     review_id: {
//         type: Number
//     },
//     url: {
//         type: String
//     },
// }, { collection : 'reviewsphotos' })
// const ProductReviewSchema = new mongoose.Schema({
//     id: {
//         type: Number,
//     },
//     product_id: {
//         type: Number
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
//         type: Boolean
//     },
//     reported:{
//         type: Boolean
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
// },{ collection : 'reviewsraw' })

// var ReviewModel = mongoose.model('ReviewModel',ProductReviewSchema)
// var PhotosModel = mongoose.model('PhotosModel',PhotoSchema)

// // let getReviews = () => {
// //     return PhotosModel.findById({}, (err,photos) =>{
// //         if(err){
// //             console.log(err)
// //         }
// //         photos.map((photo) => {
// //             ReviewModel.insertMany(photo.map(function (obj) {
// //                 return obj.url
// //               }))
// //         })
// //     })
// //   }
// let getReviews = () => {
//     var id = 12
//     return ReviewModel.aggregate([
//         {$lookup: {from: "reviewsraw",localField: "id",foreignField: "review_id",as: "photos"}}
//     ])
//     // const id = "12"
//     // ReviewModel.find({product_id:id}).exec()
//     //     .then(())
//   }
// getReviews()
// .then(res => console.log("THSI IS SAVE MOVIE IN DB",res))
// .catch(err => console.log("err in DB",err))
// //db.once("open",()=>{console.log("Successful connection")})
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//   console.log('Connected to db...');
// })

// module.exports = ReviewModel;
// // const mongoose = require("mongoose");
// // mongoose.connect("mongodb://mongo:27017/reviewsdb");
// // var connection = mongoose.connection;
// // connection.on('error', console.error.bind(console, 'connection error:'));
// // connection.once('open', function () {

// //     connection.db.collection("reviews", function(err, collection){
// //         collection.find({}).toArray(function(err, data){
// //             console.log(data); // it will print your collection data
// //         })
// //     });

// // });
// // const ProductReviewSchema = new mongoose.Schema({
// //     id: {
// //         type: String,
// //     },
// //     product_id: {
// //         type: String
// //     },
// //     rating: {
// //         type: String
// //     },
// //     date: {
// //         type: String
// //     },
// //     summary: {
// //         type: String
// //     },
// //     body: {
// //         type: String
// //     },
// //     recommend: {
// //         type: String
// //     },
// //     reported:{
// //         type: String
// //     },
// //     review_name:{
// //         type: String
// //     },
// //     review_email:{
// //         type: String
// //     },
// //     response:{
// //         type: String
// //     },
// //     helpfulness:{
// //         type: String
// //     }
// // })

// // const PhotoSchema = new mongoose.Schema({
// //     id: {
// //         type: Number,
// //     },
// //     url: {
// //         type: String
// //     },
 
// // })

// // const MetaSchema = new mongoose.Schema({
// //     product_id: {
// //         type: Number,
// //     },
// //     ratings: {
// //         type: Object
// //     },
// //     recommended: {
// //         type: Boolean
// //     },
// //     characteristics:{
// //         size: {
// //             id: {
// //                 type: Number
// //             },
// //             value: {
// //                 type: String
// //             }
// //         },
// //         width: {
// //             id: {
// //                 type: Number
// //             },
// //             value: {
// //                 type: String
// //             }
// //         },
// //         comfort: {
// //             id: {
// //                 type: Number
// //             },
// //             value: {
// //                 type: String
// //             }
// //         }
// //     },
// //     reviews: {
// //         type: Number
// //     },
// //     reports: {
// //         type: Number
// //     }
// // })


// // const ProductReview = mongoose.model('reviews', ProductReviewSchema);
// // const Photo = mongoose.model('Photo', PhotoSchema);
// // const Meta = mongoose.model('Meta', MetaSchema);

// // module.exports = { ProductReview, Photo, Meta }