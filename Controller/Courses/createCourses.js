const coursesService = require("../../Services/coursesService");
const Joi = require("joi");
const { StatusCodes } = require("http-status-codes");
const schema = Joi.object().keys({
  courseCode: Joi.number().required(),
  courseTitle: Joi.string().required(),
  creditHours: Joi.string().required(),
  Lab: Joi.boolean().required(),
});
module.exports = async function (req, res) {
  try {
    const validate = await schema.validateAsync(req.body, {
      abortEarly: false,
    });

    if (validate.error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send({ data: {}, message: err.message, error: err.stack });
    }
    const data = await coursesService.createCourses(req.body);
    res.status(StatusCodes.OK).send({ message: "success", data, error: {} });
  } catch (err) {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
      data: {},
      message: err.message,
      error: err.stack,
    });
  }
};
