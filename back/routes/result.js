const { Router } = require('express');
const router = Router({mergeParams: true});

router.get('/', (req, res, next) => {
    res.json('result');
});

module.exports = router;
