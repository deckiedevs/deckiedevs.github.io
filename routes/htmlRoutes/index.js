const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public.index.html'));
});

router.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/projects.html'));
});

module.exports = router;