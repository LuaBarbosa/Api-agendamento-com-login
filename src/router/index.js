const { Router } = require("express");
const router = Router();

router.get('/', async (req, res) => {
    res.send('api running!'); 
});

module.exports = router;