var linkedin = require('../model/linkedin');


// Get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await linkedin.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Get single post by ID
const getPostById = async (req, res) => {
    try {
        const post = await linkedin.findById(req.params.id);
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
}

// Create a new post

const createPost = async (req, res) => {
    try {
        const newPost = new linkedin({
            title: req.body.title,
            tags: req.body.tags,
            link: req.body.link,
            postImage: req.file.filename,
        });
        const post = await newPost.save();
        res.status(201).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Update an existing post

const updatePost = async (req, res) => {
    try {
        console.log(req.body);
        const post = await linkedin.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.text,
                tags: req.body.tags,
                link: req.body.link,
                postImage: req.body.postImage,
            },
            { new: true }
        );
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Delete a post

const deletePost = async (req, res) => {
    try {
        const post = await linkedin.findByIdAndRemove(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(200).json({ msg: 'Post removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}
