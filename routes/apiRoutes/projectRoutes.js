const router = require('express').Router();
const { projects } = require('../../db/projects');

router.get('/projects', (req, res) => {
    res.json(projects);
});

module.exports = router;