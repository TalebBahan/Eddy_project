// content Controller 

const Content = require('../model/content');

// Get all content
const getAllContent = async (req, res) => {
    try {
        const content = await Content.find();
        res.status(200).json(content);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Get single content by ID
const getContentById = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) {
            return res.status(404).json({ msg: 'Content not found' });
        }
        res.status(200).json(content);
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Content not found' });
        }
        res.status(500).send('Server Error');
    }
}

// Create a new content

const createContent = async (req, res) => {
    try {
        const newContent = new Content({
            title: req.body.title,
            content: req.body.content,
        });
        const content = await newContent.save();
        res.status(201).json(content);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Update an existing content
const updateContent = async (req, res) => {
    try {
        const content = await Content.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                content: req.body.content,
            },
            { new: true }
        );
        if (!content) {
            return res.status(404).json({ msg: 'Content not found' });
        }
        res.status(200).json(content);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Delete an existing content
const deleteContent = async (req, res) => {
    try {
        const content = await Content.findByIdAndDelete(req.params.id);
        if (!content) {
            return res.status(404).json({ msg: 'Content not found' });
        }
        res.status(200).json({ msg: 'Content deleted' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    getAllContent,
    getContentById,
    createContent,
    updateContent,
    deleteContent
}


