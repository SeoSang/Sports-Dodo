const { Router } = require('express');
const router = Router();
const { 
    createMatch,
    getMatch,
    getMatchs,
    editMatch,
    deleteMatch 
} = require('../controllers/match');

router
    .route("/")
    .post(createMatch);
    // .get(getMatchs);

router
    .route("/:id")
    .get(getMatch)
    .put(editMatch)
    .delete(deleteMatch);

module.exports = router;

