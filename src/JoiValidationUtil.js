'use strict';
var Joi = require('joi');

module.exports = {
	validate: function(data, schema) {
		var result = Joi.validate(data, schema);
		if(result.error) {
			return false;
		}
		return true;
	}
};