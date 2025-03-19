const announcementService = require('../services/announcementService');

const createAnnouncement = async (req, res) => {
    try {
        const announcement = await announcementService.createAnnouncement(req.body);
        res.status(201).json(announcement);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateAnnouncement = async (req, res) => {
    try {
        const updatedAnnouncement = await announcementService.updateAnnouncement(req.params.id, req.body);
        res.status(200).json(updatedAnnouncement);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteAnnouncement = async (req, res) => {
    try {
        await announcementService.deleteAnnouncement(req.params.id);
        res.status(200).json({ message: 'Announcement has been deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAnnouncement = async (req, res) => {
    try {
        const announcement = await announcementService.getAnnouncement(req.params.id);
        res.status(200).json(announcement);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await announcementService.getAllAnnouncements(req.query.new);
        res.status(200).json(announcements);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAnnouncementsByType = async (req, res) => {
    try {
        const announcements = await announcementService.getAnnouncementsByType(req.params.type);
        res.status(200).json(announcements);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createAnnouncement, updateAnnouncement, deleteAnnouncement, getAnnouncement, getAllAnnouncements, getAnnouncementsByType };
