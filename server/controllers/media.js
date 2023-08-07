const { json } = require('express');
const Media = require('../model/media');
const fs = require('fs');





// Get all media
const getAllMedia = async (req, res) => {
    try {
        const media = await Media.find().sort({ _id: -1 });
        res.status(200).json(media);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

const getMediaById = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        if (!media) {
            return res.status(404).json({ msg: 'Media not found' });
        }
        res.status(200).json(media);
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Media not found' });
        }
        res.status(500).send('Server Error');
    }
}

// Create a new media

const createMedia = async (req, res) => {
    try {
        console.log(req.body);
        var filename = req.file?.filename;
        if (!req.body.date) {
            req.body.date = new Date()
        }
        const newMedia = new Media({
            h_text: req.body.h_text,
            s_text: req.body.s_text,
            link: req.body.link,
            image: filename,
            date: req.body.date,
            interests: JSON.parse(req.body.interests)
        });

        const media = await newMedia.save();
        res.status(201).json(media);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

const updateMedia = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        var filename = req.file?.filename;
        if (media) {
            if (media.image && filename) {
                fs.unlinkSync(`public/images/${media.image}`)
            }
            media.h_text = req.body.h_text;
            media.s_text = req.body.s_text;
            media.link = req.body.link;
            media.image = filename || media.image;
            media.date = req.body.date || media.date;
            media.interests = JSON.parse(req.body.interests) || media.interests;
            const updatedMedia = await media.save();
            res.status(200).json(updatedMedia);
        }
        else {
            res.status(404).json({ msg: 'Media not found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

}


const deleteMedia = async (req, res) => {
    try {
        const media = await Media.deleteOne({ '_id': { $eq: req.params.id } });
        if (media.image) {
            fs.unlinkSync(`public/images/${media.image}`)
        }
        if (!media) {
            return res.status(404).json({ msg: 'Media not found' });
        }
        res.status(200).json({ msg: 'Media deleted' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    getAllMedia,
    getMediaById,
    createMedia,
    updateMedia,
    deleteMedia,
}


