const joi = require('joi');

const Schema = joi.object({
    name: joi.string()
        .required(),

    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9$]+$')),

    email: joi.string()
        // .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})


module.exports = {Schema}