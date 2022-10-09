const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = Post.create({
            userId: req.session.userId,
            title: req.body.title,
            body: req.body.body
        });
        res.json(newPost)
    } catch (err) {
        res.status(500).json(err)
    }

});

module.exports = router