const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = Comment.create({
            commment_text: req.session.commment_text,
            post_id: req.body.post_id,
            user_id: req.body.user_id
        });
        res.json(newComment)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;