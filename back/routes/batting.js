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
const { timeChecker } = require('../middlewares/battingRestriction');

router
    .route("/")
    .post(protect, timeChecker, createBatting)   // ! timeChecker TEST CODE 필요.
    .get(getBattings);

router
    .route("/:id")
    .get(getBatting)
    .put(protect, checkIsOnwerThisBatting, editBatting)
    .delete(protect, checkIsOnwerThisBatting, deleteBatting);

module.exports = router;