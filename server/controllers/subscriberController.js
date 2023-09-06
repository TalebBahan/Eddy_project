const Subscriber = require('../model/subscriber');
const Interest = require('../model/interest');

exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    console.log(subscribers);
    res.json(subscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.unsubscribe = async (req, res) => {
  try {
    const { email } = req.query;
    const subscriber = await Subscriber.findOneAndDelete({ email });
    if (!subscriber) {
      return res.status(404).send(`<h2>Subscriber with email ${email} not found!</h2>`);
    }
    // send and html response
    res.send(`<h2>Unsubscribed ${email} successfully!</h2>`);
  } catch (error) {
    console.error(error);
  }
};


exports.getSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    res.json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createSubscriber = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the subscriber already exists with the given email
    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      return res.status(400).json({ message: 'Subscriber with this email already exists.' });
    }

    // If subscriber doesn't exist, create a new one
    const subscriber = new Subscriber(req.body);
    await subscriber.save();

    res.status(201).json({ message: 'You have Subscribed ' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    res.json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByIdAndDelete(req.params.id);
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    res.json({ message: 'Subscriber deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteMany = async (req, res) => {
  try {

    const { ids } = req.body;
    console.log(ids);

    const result = await Subscriber.deleteMany({ _id: { $in: ids } });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Subscribers not found' });
    }

    res.json({ message: 'Subscribers deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};









exports.createInterest = async (req, res) => {

  try {
    const { interest } = req.body;
    const newInterest = await Interest.create({ interest });
    res.status(201).json(newInterest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all interests
exports.getAllInterests = async (req, res) => {
  try {
    const interests = await Interest.find();
    res.status(200).json(interests);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a specific interest by ID
exports.getInterestById = async (req, res) => {
  try {
    const { id } = req.params;
    const interest = await Interest.findById(id);
    if (!interest) {
      return res.status(404).json({ error: 'Interest not found' });
    }
    res.status(200).json(interest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a specific interest by ID
exports.updateInterestById = async (req, res) => {
  try {
    const { id } = req.params;
    const { interest } = req.body;
    const updatedInterest = await Interest.findByIdAndUpdate(
      id,
      { interest },
      { new: true }
    );
    if (!updatedInterest) {
      return res.status(404).json({ error: 'Interest not found' });
    }
    res.status(200).json(updatedInterest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a specific interest by ID
exports.deleteInterestById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInterest = await Interest.findByIdAndDelete(id);
    if (!deletedInterest) {
      return res.status(404).json({ error: 'Interest not found' });
    }
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};