const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post("/add", async (req, res) => {
    //console.log(req.body);
    try {
        const commentData = await Comment.create(req.body);

        req.session.save(() => {
            res.status(200).json(commentData);
        });

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});



router.delete('/delete/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No Comment found with that ID!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
