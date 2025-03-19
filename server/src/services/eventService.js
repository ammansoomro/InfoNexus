const Event = require('../models/Event');
const Society = require('../models/Society');

exports.createEvent = async (data) => {
    const eventExists = await Event.findOne({ name: data.name });
    if (eventExists) throw new Error('Event Already Exists');
    return new Event(data).save();
};

exports.updateEvent = async (id, data) => {
    return Event.findByIdAndUpdate(id, { $set: data }, { new: true });
};

exports.deleteEvent = async (id) => {
    return Event.findByIdAndDelete(id);
};

exports.getEvent = async (id) => {
    return Event.findById(id);
};

exports.getAllEvents = async () => {
    return Event.find().sort({ name: 1 });
};

exports.getEventsBySocietyCode = async (societyCode) => {
    return Event.find({ societyCode });
};

exports.getEventsBySocietyId = async (societyId) => {
    const society = await Society.findById(societyId);
    if (!society) throw new Error('Society not found');
    return Event.find({ societyCode: society.code });
};
