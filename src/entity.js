var directions = ["N","E","S","W"];
var facings = ["r","l"];
var movements = ["f","b"];

function entity(direction) {
    this.cell = null;
    this.direction = directions.indexOf(direction);

    this.getLocation = function() {
        return {
            "row" : this.cell.row.getIndex(),
            "cell" : this.cell.getIndex(),
            "facing": directions[this.direction]
        };
    };

    this.followInstructions = function(array) {
        array.forEach(function(val){
            var inMovements = (movements.indexOf(val) !== -1);
            var inFacings = (facings.indexOf(val) !== -1);
            var handler = (inMovements) ? "move" : (inFacings) ? "turn" : "invalidDirection";
            this[handler](val);
        });
    };

    this.move = function(direction) {
        var g = this.cell.getLocation();
        this.cell.removeEntity(this);
        var newLocation = this.computeRowAndCell(direction);
        g.cellAt(newLocation.row, newLocation.cell).addEntity(this);
    };

    this.computeRowAndCell = function(movement){
        var row,cell;
        var current = this.cell.getLocation();
        if(movement === "f" && this.direction === 0){

        }else if(movement === "f" && this.direction === 1){

        }else if(movement === "f" && this.direction === 2){

        }else if(movement === "f" && this.direction === 3){

        }

        return {
            row: row,
            cell: cell
        };
    };

    this.turn = function(direction) {
        if(direction === "r" && this.direction !== (directions.length - 1)){
            this.direction = this.direction + 1;
        }else if(direction === "r" && this.direction === (directions.length - 1)){
            this.direction = 0;
        }else if(direction === "l" && this.direction !== 0){
            this.direction = this.direction - 1;
        }else{
            this.direction = directions.length - 1;
        }
    };

    this.invalidDirection = function(val){
        throw new Error("Invalid Direction " + val + " given");
    }
}

module.exports = entity;