const router = require('express').Router();
const { Blog, Comment } = require('../../models');

/*
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: {
                model: Comment,
            },
            order: [
                ['id', 'DESC'],
            ],
        });

        res.status(200).json(blogData);

    } catch (err) {
        res.status(400).json(err);
    }
});
*/


router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
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
                    attributes: ['comment', 'id'],
                    raw: true,
                    nest: true
                },
            ],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

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