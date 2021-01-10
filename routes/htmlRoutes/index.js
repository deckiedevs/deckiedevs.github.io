const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/about.html'));
});

router.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/portfolio.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/contact.hml'));
});

module.exports = router;