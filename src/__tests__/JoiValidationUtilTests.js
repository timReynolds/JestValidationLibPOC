jest.dontMock('joi');
jest.dontMock('../JoiValidationUtil');

describe('Joi', function () {

    var Joi = require('joi');

	var sut;
	
	beforeEach(function(){
		sut = require('../JoiValidationUtil');
	});

	it('JoiValidationUtil validate, when provided valid data, should return true', function () {
        // Arrange
        var schema = {
            accountName: Joi.string().required(),
        };
		var data = {
            accountName: 'Mr Account Name'
        };

        // Act
        var result = sut.validate(data, schema);

        // Assert
        expect(result).toBe(true);
    });
    
    	it('JoiValidationUtil validate, when provided invalid data, should return false', function () {
        // Arrange
        var schema = {
            accountName: Joi.string().required(),
        };
		var data = {};

        // Act
        var result = sut.validate(data, schema);

        // Assert
        expect(result).toBe(false);
    });
	
})