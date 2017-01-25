const express = require("express");
const router = express.Router();
const taskRoute = require("./task.route");

//Book routes
router.use('/api/tasks', taskRoute);

module.exports = router;