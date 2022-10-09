const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage')
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard')
});

router.get('/profile', withAuth, async (req, res) => {
    try {
      
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
       });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/login', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;