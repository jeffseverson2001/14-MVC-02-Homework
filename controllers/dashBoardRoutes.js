const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
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
        res.render('dashboard', {
            blogs,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
            user_name: req.session.user_name,
        });

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        var blogData = await Blog.findOne({
            where: {
                id: req.params.id
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

        const blogs = blogData.get({ plain: true });

        console.log(blogs);
        res.render('blog', {
            ...blogs,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
            user_name: req.session.user_name,
        });

    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router;