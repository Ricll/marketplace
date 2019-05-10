// Validação dados do Anúncio

const Joi = require('joi')

module.exports = {
  body: {
    ad: Joi.string().required(),
    content: Joi.string().required()
  }
}
