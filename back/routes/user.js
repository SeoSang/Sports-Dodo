const { Router } = require('express');
const router = Router({ mergeParams: true });
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
  logout,
  getRanking,
  getMyRecord,
} = require('../controllers/user');

// prettier-ignore
router
  .route('/')
  .post(register)
  .delete(protect, withdrawal)
  .get(getUsers);

// prettier-ignore
router
  .route('/rank/:id')
  .get(getRanking);

// prettier-ignore
router
  .route('/record')
  .get(protect, getMyRecord);

// prettier-ignore
router
  .route('/profile')
  .get(protect, myProfile)
  .put(protect, editMyProfile);

// prettier-ignore
router
  .route('/:id')
  .get(getUser)
  .put(protect, editUser);

// prettier-ignore
router.route('/login').post(login);
// router.get("/logout", logout);

module.exports = router;
