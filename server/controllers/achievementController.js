const Achievement = require('../model/achievement');


exports.getAllAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find();
        res.json(achievements);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateAchievement = async (req, res) => {
    try {
        const achievement = await Achievement.findById(req.params.id);
        if (achievement) {
            achievement.category = req.body.category;
            achievement.rest = req.body.rest;
            const updatedAchievement = await achievement.save();
            res.json(updatedAchievement);
        } else {
            res.status(404).json({ error: 'Achievement not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};