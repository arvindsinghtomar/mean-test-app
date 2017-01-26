const express = require("express");
const router = express.Router();
const taskCtrl = require("../controllers/task.controller");
const Joi = require("joi");
const validate = require("express-validation");

//apply validation on request body
const taskValidation = {
    createBook: {
        body: {
            name: Joi.string().required()
        }
    }
};

router.route('/')

    .post(validate(taskValidation.createBook),taskCtrl.create)

    .get(taskCtrl.getAll);

router.route('/:id')

    .delete(taskCtrl.remove);

module.exports = router;