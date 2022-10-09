const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newUser = User.create({
            userName: req.body.userName,
            password: req.body.password
        });
        res.json(newUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;