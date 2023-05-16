const User = require('../model/user');
const ROLES_LIST = require('../config/roles_list')

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find().lean();
    //   const filteredUsers = users.filter((user) => user._id.toString() !== req.user._id.toString());
      if (!users.length) return res.status(204).json({ message: 'No users found' });
      res.json(users);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
  

const createUser = async (req, res) => {
    try {
        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

const deleteUser = async (req, res) => {
    console.log('good')
    if (!req?.body?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.body.id} not found` });
    }
    const result = await user.deleteOne({ _id: req.body.id });
    res.json(result);
}

const getUser = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
    }
    res.json(user);
}
const getConnectedUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const updateUserRoles = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    if (!req?.body?.roles) return res.status(400).json({ "message": 'Roles array required' });
    console.log(req.params.id);
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
    }

    console.log( req.body.roles);
    Object.keys(req.body.roles).forEach( (key)=>{
        console.log(ROLES_LIST[key])
        user.roles[key] = ROLES_LIST[key] 
    })
    console.log(user.roles)

    const updatedUser = await user.save();
    res.json(updatedUser);
};

module.exports = {
    getAllUsers,
    deleteUser,
    getUser,
    createUser,
    getConnectedUser,
    updateUserRoles
}