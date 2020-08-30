const { Router } = require('express');
const router = Router({ mergeParams: true });
const { protect } = require('../middlewares/auth');

const {
<<<<<<< HEAD
  register,
  withdrawal,
  getUsers,
  getUser,
  editUser,
  myProfile,
  editMyProfile,
  login,
  logout,
=======
    register,
    withdrawal,
    getUsers,
    getUser,
    editUser,
    myProfile,
    editMyProfile,
    login,
    logout,
    getRanking
>>>>>>> 6ea4e0cd0cbe1842d5b1f9a51c534adf0029d0ca
} = require('../controllers/user');


router
<<<<<<< HEAD
  .route('/')
  .post(register)
  .delete(protect, withdrawal)
  .get(getUsers);

router
  .route('/profile')
  .get(protect, myProfile)
  .put(protect, editMyProfile);

router
  .route('/:id')
  .get(getUser)
  .put(protect, editUser);
=======
    .route('/')
    .post(register)
    .delete(protect, withdrawal)
    .get(getUsers);

router
    .route('/rank/:id')
    .get(getRanking);

router
    .route('/profile')
    .get(protect, myProfile)
    .put(protect, editMyProfile);

router
    .route('/:id')
    .get(getUser)
    .put(protect, editUser);
>>>>>>> 6ea4e0cd0cbe1842d5b1f9a51c534adf0029d0ca

router.route('/login').post(login);
// router.get("/logout", logout);

module.exports = router;
