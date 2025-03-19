const Announcement = require('../models/Announcement');

exports.createAnnouncement = async (data) => {
    return new Announcement(data).save();
};

exports.updateAnnouncement = async (id, data) => {
    return Announcement.findByIdAndUpdate(id, { $set: data }, { new: true });
};

exports.deleteAnnouncement = async (id) => {
    return Announcement.findByIdAndDelete(id);
};

exports.getAnnouncement = async (id) => {
    return Announcement.findById(id);
};

exports.getAllAnnouncements = async (isNew) => {
    return isNew ? 
        Announcement.find().sort({ _id: -1 }).limit(5) :
        Announcement.find();
};

exports.getAnnouncementsByType = async (type) => {
    return Announcement.find({ type }).sort({ date: -1 });
};
