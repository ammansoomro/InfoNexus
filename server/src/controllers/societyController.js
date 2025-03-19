const societyService = require('../services/societyService');

const createSociety = async (req, res) => {
    try {
        const savedSociety = await societyService.createSociety(req.body);
        res.status(200).json(savedSociety);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateSociety = async (req, res) => {
    try {
        const updatedSociety = await societyService.updateSociety(req.params.id, req.body);
        res.status(200).json(updatedSociety);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteSociety = async (req, res) => {
    try {
        const message = await societyService.deleteSociety(req.params.id);
        res.status(200).json(message);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getSocietyById = async (req, res) => {
    try {
        const society = await societyService.getSocietyById(req.params.id);
        res.status(200).json(society);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getAllSocieties = async (req, res) => {
    try {
        const societies = await societyService.getAllSocieties(req.query.new);
        res.status(200).json(societies);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const searchSociety = async (req, res) => {
    try {
        const societies = await societyService.searchSociety(req.params.name);
        res.status(200).json(societies);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getRandomSociety = async (req, res) => {
    try {
        const society = await societyService.getRandomSociety(req.query.type);
        res.status(200).json(society);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { createSociety, updateSociety, deleteSociety, getSocietyById, getAllSocieties, searchSociety, getRandomSociety };
