const router = require('express').Router();
const projectRoutes = require('./projectRoutes');

router.use(projectRoutes);

module.exports = router;