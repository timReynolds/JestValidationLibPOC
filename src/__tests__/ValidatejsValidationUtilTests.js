jest.dontMock('moment');
jest.dontMock('validate.js');
jest.dontMock('../ValidatejsValidationUtil');

describe('Validatejs', function () {

	var sut;
	
	beforeEach(function(){
		sut = require('../ValidatejsValidationUtil');
	});

	it('ValidatejsValidationUtil validate, when provided valid data, should return true', function () {
        // Arrange
        var schema = {
            accountName: {
                presence: true
            }
        };
		var data = {
            accountName: 'Mr Account Name'
        };

        // Act
        var result = sut.validate(data, schema);

        // Assert
        expect(result).toBe(true);
    });
    
    	it('ValidatejsValidationUtil validate, when provided invalid data, should return false', function () {
        // Arrange
        var schema = {
            accountName: {
                presence: true
            }
        };
		var data = {};

        // Act
        var result = sut.validate(data, schema);

        // Assert
        expect(result).toBe(false);
    });
	
})