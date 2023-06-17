const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const cors = require('cors');
const apiRoutes = require('./routes/api');
const { connectAirtable } = require('./config/airtable');


const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRoutes);

const tableName = 'Table 1';
connectAirtable(tableName);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running on port: " + port);
});