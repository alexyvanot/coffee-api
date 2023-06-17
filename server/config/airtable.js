const Airtable = require('airtable');

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

const connectAirtable = new Airtable({ apiKey }).base(baseId);

module.exports = {
  connectAirtable,
};

