const express = require('express');
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require('./connect');
const URL = require('./models/url')

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1/short-url')
.then(() => console.log('MongoDB Connected'))

app.use(express.json())
app.use('/url', urlRoute)

app.get('/:shortId', async (req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {shortId},
        {$push: {visitHistory: { timestamp: Date.now()}}},
        {new: true} //get updated entry
    );
    res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))