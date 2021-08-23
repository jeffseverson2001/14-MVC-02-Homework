const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try {
      var blogData = await Blog.findAll({
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

        //const blogs = blogData.map((blog) => blog.get({ plain: true }));
        const blogs = blogData.get({ plain: true });

        console.log(blogs);

        //console.log("I AM HERE -------------------- JEFF IS HERE");

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


router.post("/add", async (req, res) => {
    //console.log(req.body);
    try {
      const blogData = await Blog.create(req.body);
  
      req.session.save(() => {
        res.status(200).json(blogData);
      });
  
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });


  router.put('/edit/:id', async (req, res) => {
    console.Bloglog("AT THE EDIT");
    console.log(req.body);
    try {
      const blogData = await Blog.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json(blogData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.delete('/delete/:id', async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No Blog found with that ID!' });
        return;
      }
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;