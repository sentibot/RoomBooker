const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API path works!');
});

module.exports = router;