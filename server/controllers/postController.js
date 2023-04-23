var Post = require('../model/post');

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
};

// Create a new post

const createPost = async (req, res) => {
    try {
        const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        });
        const post = await newPost.save();
        res.status(201).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
    };

// Update an existing post
const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
            content: req.body.content,
        },
        { new: true }
        );
        if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(500).send('Server Error');
    }
    };

// Delete a post
const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(200).json({ msg: 'Post deleted' });
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(500).send('Server Error');
    }
    }

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}
