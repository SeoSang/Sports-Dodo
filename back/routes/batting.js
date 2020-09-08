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
const { timeCheckerCreate, timeCheckerUpdateDelete, checkHasEnoughPointForCreate, checkHasEnoughPointForUpdate } = require('../middlewares/battingRestriction');

router
    .route("/")
    .post(protect, timeCheckerCreate, checkHasEnoughPointForCreate, createBatting)   // ! timeChecker TEST CODE / 베팅포인트 체크 미들웨어 추가
    .get(getBattings);

router
    .route("/:id")
    .get(getBatting)
    .put(protect, checkIsOnwerThisBatting, checkHasEnoughPointForUpdate, editBatting) // update 시작하면 포인트 다시 돌려줘야함.. 프론트에서 하면 되나
    .delete(protect, checkIsOnwerThisBatting, timeCheckerUpdateDelete, deleteBatting);

module.exports = router;