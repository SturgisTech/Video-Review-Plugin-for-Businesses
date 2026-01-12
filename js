// server.js (Node.js/Express backend example)

const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// API endpoint to handle video submission
app.post('/api/videos', upload.single('video'), (req, res) => {
    const { filename, mimetype } = req.file;

    // Validate video MIME type
    if (!mimetype.startsWith('video')) {
        return res.status(400).send('Invalid file type.');
    }

    // Move video to a permanent folder and store info in DB
    const newPath = path.join(__dirname, 'videos', filename);
    
    fs.rename(req.file.path, newPath, (err) => {
        if (err) {
            return res.status(500).send('Error saving video.');
        }

        // Here you would save reference to the video in your database
        // For example, storing in MongoDB
        // Video.create({ filename, approval: false });

        res.status(200).send('Video submitted for approval.');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
