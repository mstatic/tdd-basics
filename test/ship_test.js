var expect = require('chai').expect;

describe('checkForShip', function () {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;

    it('should correctly report no ship at given coordinate', function () {
        var player = {
            ships: [{
                locations: [
                    [0, 0]
                ]
            }]
        };

        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report a ship is located at given coordinate', function () {
        var player = {
            ships: [{
                locations: [
                    [0, 0],
                    [0, 1]
                ]
            }]
        };

        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should handle ships at more than 1 coordinate', function () {
        var player = {
            ships: [{
                locations: [
                    [0, 0]
                ]
            }]
        };

        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should handle checking multiple ships', function () {
        var player = {
            ships: [{
                locations: [
                    [0, 0],
                    [0, 1]
                ]
            }, {
                locations: [
                    [1, 0],
                    [1, 1]
                ]
            }]
        };

        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [1, 0])).to.be.true;
        expect(checkForShip(player, [1, 1])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

});