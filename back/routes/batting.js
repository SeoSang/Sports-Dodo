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
    .post(protect, createBatting)   // checkTime 추가: 베팅할 수 있는 시간인지 확인해주는 미들웨어
    .get(getBattings);

router
    .route("/:id")
    .get(getBatting)
    .put(protect, checkIsOnwerThisBatting, editBatting)
    .delete(protect, checkIsOnwerThisBatting, deleteBatting);

module.exports = router;