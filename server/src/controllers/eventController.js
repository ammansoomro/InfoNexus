const eventService = require('../services/eventService');

exports.createEvent = async (req, res) => {
    try {
        const event = await eventService.createEvent(req.body);
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const updatedEvent = await eventService.updateEvent(req.params.id, req.body);
        res.status(200).json(updatedEvent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        await eventService.deleteEvent(req.params.id);
        res.status(200).json({ message: 'Event has been deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getEvent = async (req, res) => {
    try {
        const event = await eventService.getEvent(req.params.id);
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const events = await eventService.getAllEvents();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getEventsBySocietyCode = async (req, res) => {
    try {
        const events = await eventService.getEventsBySocietyCode(req.params.societyCode);
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getEventsBySocietyId = async (req, res) => {
    try {
        const events = await eventService.getEventsBySocietyId(req.params.societyId);
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
