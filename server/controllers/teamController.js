// team controller

const Team = require('../model/team');
const User = require('../model/user');


const getAllTeams = async (req, res) => {
    const teams = await Team.find({'owner': req.user.id}).populate({path: 'owner', select: 'name'});
    if (!teams) return res.status(204).json({ 'message': 'No teams found' });
    res.json(teams);
}

const deleteTeam = async (req, res) => {
    try {
        if (!req?.body?.id) return res.status(400).json({ "message": 'Team ID required' });
        foundTeam = await Team.findOne({ _id: req.body.id }).exec();
        if (!foundTeam) {
            return res.status(204).json({ 'message': `Team ID ${req.body.id} not found` });
        }
        const result = foundTeam.deleteOne( { _id: req.body.id } );
        res.json(result);
    } catch (err) {
        console.error(err);
    }
}

const getTeam = async (req, res) => {
    teamMembers =  await User.find({team: req.params.id}).select('name');
    if (!teamMembers) return res.status(204).json({ 'message': 'No team members found' });
    res.json(teamMembers);
}

const createTeam = async (req, res) => {
    try {
        if (!req?.body?.name) {
            return res.status(400).json({ 'message': 'Team name is required' });
        }
        const result = await Team.create({
            name: req.body.name,
            owner: req.user.id
        });
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}











module.exports = {
    getAllTeams,
    deleteTeam,
    getTeam,
    createTeam

}




