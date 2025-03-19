const Society = require('../models/Society');

class SocietyService {
    async createSociety(data) {
        const societyExists = await Society.findOne({ name: data.name });
        if (societyExists) throw new Error('Society Already Exists');

        const newSociety = new Society(data);
        return await newSociety.save();
    }

    async updateSociety(id, data) {
        return await Society.findByIdAndUpdate(id, { $set: data }, { new: true });
    }

    async deleteSociety(id) {
        await Society.findByIdAndDelete(id);
        return 'Society has been deleted';
    }

    async getSocietyById(id) {
        return await Society.findById(id);
    }

    async getAllSocieties(query) {
        if (query === 'new') {
            return await Society.aggregate([{ $sample: { size: 6 } }]); // 6 random societies
        }
        return await Society.find().sort({ name: 1 });
    }

    async searchSociety(name) {
        return await Society.find({ name: { $regex: name, $options: 'i' } });
    }

    async getRandomSociety(type) {
        return await Society.aggregate([{ $sample: { size: 1 } }]); // Random society
    }
}

module.exports = new SocietyService();
