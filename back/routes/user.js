const { Router } = require('express');
const router = Router();
const { protect } = require('../middlewares/auth');

const {
    register,
    withdrawal,
    getUsers,
    getUser,
    editUser,
    myProfile,
    editMyProfile,
    login,
    logout
} = require('../controllers/user');

router
    .route("/")
    .post(register)
    .delete(protect, withdrawal)
    .get(getUsers);


router
    .route("/profile")
    .get(protect, myProfile)
    .put(protect, editMyProfile);

router
    .route("/:id")
    .get(getUser)
    .put(protect, editUser);


router.post("/login", login);
// router.get("/logout", logout);

module.exports = router;