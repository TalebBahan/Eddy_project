// content Controller 

const Content = require('../model/content');
const AboutImages = require('../model/AboutImage')
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { log } = require('console');




// Get all content
const getAllContent = async (req, res) => {
    try {
        const content = await Content.find();
        res.status(200).json(content);
        console.log(8)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}
const getAllAboutImages = async (req, res) => {
    console.log('====================================');
    console.log(8);
    console.log('====================================');

    try {
        const images = await AboutImages.find();
        res.status(200).json(images);
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
        var file;
        var filename;
        if (req.body.type !== 'about') {
            file = req.file
            filename = file?.filename

        }

        console.log(filename)



        const newContent = new Content({
            h_text: req.body.h_text,
            s_text: req.body.s_text,
            link: req.body.link,
            image: filename,
            type: req.body.type,
        });

        const content = await newContent.save();
        res.status(201).json(content);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}
const createAboutImage = async (req, res) => {
    try {
        const filename = req.file.filename;
        const newContent = new AboutImages({
            image: filename,
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
                h_text: req.body.h_text,
                s_text: req.body.s_text,
                link: req.body.link,
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
    console.log('in')
    try {
        const content = await Content.deleteOne({ '_id': { $eq: req.params.id } });

        if (!content) {
            console.log(req.params.id)
            return res.status(404).json({ msg: 'Content not found' });
        }
        res.status(200).json({ msg: 'Content deleted' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}
const deleteAboutImage = async (req, res) => {
    try {
        console.log('\n', req.params.id)
        const image = await AboutImages.deleteOne({ '_id': { $eq: req.params.id } });

        if (!image) {
            console.log(req.params.id)
            return res.status(404).json({ msg: 'Image not found' });
        }
        res.status(200).json({ msg: 'Image deleted' });
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
    deleteContent,
    getAllAboutImages,
    createAboutImage,
    deleteAboutImage
}


