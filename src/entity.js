var util = require("./util");

var directions = ["N","E","S","W"];
var facings = ["r","l"];
var movements = ["f","b"];

function Entity(direction) {
    this.cell = null;
    this.direction = directions.indexOf(direction);
}

Entity.prototype.getLocation = function() {
        return {
            "row" : this.cell.parentRow.getIndex(),
            "cell" : this.cell.getIndex(),
            "facing": directions[this.direction]
        };
};

Entity.prototype.followInstructions = function(array) {
        var self = this;
        array.forEach(function(val){
            var inMovements = (movements.indexOf(val) !== -1);
            var inFacings = (facings.indexOf(val) !== -1);
            var handler = (inMovements) ? "move" : (inFacings) ? "turn" : "invalidDirection";
            var location = self.getLocation();
            self[handler](val, location);
        });
};

Entity.prototype.move = function(direction, location) {
        var g = this.cell.parentRow.parentGrid;
        this.cell.removeEntity(this);
        var newLocation = util.computeRowAndCell(direction, location);
        g.cellAt(newLocation.row, newLocation.cell).addEntity(this);
};

Entity.prototype.turn = function(direction, location) {
        if(direction === "r" && location.facing !== "W"){
            this.direction = this.direction + 1;
        }else if(direction === "r" && location.facing === "W"){
            this.direction = 0;
        }else if(direction === "l" && location.facing !== "N"){
            this.direction = this.direction - 1;
        }else{
            this.direction = directions.length - 1;
        }
};

Entity.prototype.invalidDirection = function(val){
        throw new Error("Invalid Direction " + val + " given");
};


module.exports = Entity;