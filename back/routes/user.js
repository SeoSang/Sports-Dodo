const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    res.json('user');
});



router
    .route("/")
    .post()




module.exports = router;