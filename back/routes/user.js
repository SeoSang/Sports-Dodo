const { Router } = require('express');
const router = Router();

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

// router.get('/', (req, res, next) => {
//     res.json('user');
// });

router
    .route("/")
    .post(register);
    // .delete(withdrawal)
    // .get(getUsers);

// router
//     .route("/:id")
//     .get(getUser)
//     .put(editUser)

// router
//     .route("/profile")
//     .get(myProfile)
//     .put(editMyProfile);

// router.post("/login", login);
// router.get("/logout", logout);

module.exports = router;