const Hero = require("../model/hero");
// GET /hero
exports.getHero = async (req, res) => {
    try {
        const hero = await Hero.find();
        res.json(hero);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}

// PUT /hero/:id
exports.updateHero = async (req, res) => {
    try {
        const id = req.params.id;
        const { h_text, s_text, reward } = req.body;
        const updatedHero = await Hero.findByIdAndUpdate(
            id,
            { h_text, s_text, reward },
            { new: true }
        );
        res.json(updatedHero);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}