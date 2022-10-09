const router = require('express').Router();
const commentRoutes = require('./api/commentRoutes');
const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

router.use('/api/user', userRoutes);

router.use('/api/post', postRoutes);

router.use('/api/comment', commentRoutes);

module.exports = router;