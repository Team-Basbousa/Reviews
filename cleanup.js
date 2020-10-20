

db = new Mongo().getDB("reviewsdb")

var ratingSchema = {
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
    photos: Array
}

db.createCollection('reviewsclean', ratingSchema);

db.reviewsraw.find({}).forEach(function(review){
    var photos = db.reviewsphotos.findOne({'review_id':review.id})
    var response = review.response === "null" ? "" : review.response
    db.reviews.insertOne({
        "id": review.id,
        "product_id": review.product_id,
        "rating": review.rating,
        "date": review.date,
        "summary": review.summary,
        "body": review.body,
        "recommend": review.recommend,
        "reported": review.reported,
        "reviewer_name": review.reviewer_name,
        "reviewer_email": review.reviewer_email,
        "response": response,
        "helpfulness": review.helpfulness,
        "photos": [photos]
    })
})