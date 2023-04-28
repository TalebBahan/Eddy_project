// link Controller

const Link = require('../model/link');

// Get all links
const getAllLinks = async (req, res) => {
    try {
        const links = await Link.find();
        res.status(200).json(links);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Get single link by ID
const getLinkById = async (req, res) => {
    try {
        const link = await Link.findById(req.params.id);
        if (!link) {
            return res.status(404).json({ msg: 'Link not found' });
        }
        res.status(200).json(link);
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Link not found' });
        }
        res.status(500).send('Server Error');
    }
}

// Create a new link
const createLink = async (req, res) => {
    try {
        const newLink = new Link({
            text: req.body.text,
            link: req.body.link,
            platform: req.body.platform,
        });
        const link = await newLink.save();
        res.status(201).json(link);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// Update an existing link
const updateLink = async (req, res) => {
    try {
        const link = await Link.findByIdAndUpdate(
            req.params.id,
            {
                text: req.body.text,
                link: req.body.link,
                platform: req.body.platform,
            },
            { new: true }
        );
        if (!link) {
            return res.status(404).json({ msg: 'Link not found' });
        }
        res.status(200).json(link);
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Link not found' });
        }
        res.status(500).send('Server Error');
    }
};

// Delete a link
const deleteLink = async (req, res) => {
    try {
        const link = await Link.findByIdAndDelete(req.params.id);
        if (!link) {
            return res.status(404).json({ msg: 'Link not found' });
        }
        res.status(200).json({ msg: 'Link deleted' });
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Link not found' });
        }
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getAllLinks,
    getLinkById,
    createLink,
    updateLink,
    deleteLink,
};

