var directions = ["N","E","S","W"];


function entity(direction) {
    this.cell = null;
    this.direction = directions.indexOf(direction);

    this.getLocation = function() {
        return {
            "row" : this.cell.row.getIndex(),
            "cell" : this.cell.getIndex()
        };
    };

    this.move = function(direction) {
        var g = this.cell.getLocation();
        this.cell.removeEntity(this);
        var row = (direction === "f") ? g.row
        g.cellAt(row, cell).addEntity(this);
    };

    this.turn = function(direction) {
        this.direction = (direction === "r" && this.direction !== (directions.length - 1)) ?
    }
}

module.exports = entity;