'use strict';
var validate = require("validate.js");
validate.moment = require("moment");

module.exports = {
	validate: function(data, schema) {
		if(validate(data, schema)) {
			return false;
		}
		return true;
	}
};