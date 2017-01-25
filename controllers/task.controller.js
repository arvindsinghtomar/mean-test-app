const Task = require("../models/task.model");

function create(req, res, next) {
    const task = new Task({
        name: req.body.name,
        message: req.body.message
    });
    return task.save()
        .then(function (task) {
            return res.send(task);
        })
        .catch(function (err) {
            return next(err);
        });
}

function getAll(req, res, next) {
    return Task.find({})
        .sort({ createdAt: -1 })
        .exec()
        .then(function (tasks) {
            return res.json(tasks);
        })
        .catch(function (e) {
            return next(e);
        });
}

module.exports = {create, getAll};