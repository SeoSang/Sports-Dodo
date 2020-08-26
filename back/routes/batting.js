const { Router } = require('express');
const router = Router({ mergeParams: true });
const {
    createBatting,
    getBattings,
    getBatting,
    editBatting,
    deleteBatting
} = require('../controllers/batting');
const { protect, checkIsOnwerThisBatting } = require('../middlewares/auth');

router
    .route("/")
    .post(protect, createBatting)
    .get(getBattings);

router
    .route("/:id")
    .get(getBatting)
    .put(protect, checkIsOnwerThisBatting, editBatting)
    .delete(protect, checkIsOnwerThisBatting, deleteBatting);

module.exports = router;