const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {

  try {
    if (req.session.logged_in) {
      var blogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            attributes: ['comment'],
            raw: true,
            nest: true
          },
        ],
        order: [
          ['id', 'DESC'],
        ],
      });

    } else {

      // Get all projects and JOIN with user data
      var blogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
        order: [
          ['id', 'DESC'],
        ],
      });

    }


    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    //console.log(blogs);

    // Pass serialized data and session flag into template
    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      user_name: req.session.user_name,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/blog/:id', async (req, res) => {
  try {
    var blogData = await Blog.findAll({
      where: {
        user_id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['comment', 'id', 'blog_id'],
          raw: true,
          nest: true
        },
      ],
      order: [
        ['id', 'DESC'],
      ],
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    //console.log(blogs);

    // Pass serialized data and session flag into template
    res.render('blog', {
      blogs,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      user_name: req.session.user_name,
    });

  } catch (err) {
    res.status(500).json(err);
  }

});


router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('homepage');
    return;
  }
  res.render('signup');
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('homepage');
    return;
  }
  res.render('login');
});


module.exports = router;
