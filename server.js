const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/wedding', { useNewUrlParser: true, useUnifiedTopology: true });

const rsvpSchema = new mongoose.Schema({
    name: String,
    email: String,
    attending: String
});

const RSVP = mongoose.model('RSVP', rsvpSchema);

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/rsvp', (req, res) => {
    const newRSVP = new RSVP(req.body);
    newRSVP.save()
        .then(() => res.json({ message: 'RSVP saved!' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
