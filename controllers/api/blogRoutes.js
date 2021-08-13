const router = require('express').Router();
const { Blog, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await Todo.findAll({
            order: [
                ['date_created', 'DESC'],
            ],
        });

        res.status(200).json(blogData);

    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;