const express = require('express')
const router = express.Router()
const controllers = require("./controllers.js")

router.get('/reviews/:product_id/list', controllers.getReviewsData)
router.get('/reviews/:product_id/meta', controllers.getMetaData)
router.post('/reviews/:product_id', controllers.addReview)
router.put('/reviews/helpful/:review_id', controllers.markHelpful)
router.put('/reviews/report/:review_id', controllers.report)

module.exports = router