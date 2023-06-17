const { connectAirtable } = require('../config/airtable');

exports.getData = async (req, res) => {
    try {
        const records = await connectAirtable('Table 1').select().firstPage();

        res.json(records);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des données.' });
    }
};