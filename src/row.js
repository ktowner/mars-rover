var cell = require('./cell');

function row(parentGrid) {
    this.grid = parentGrid;
    this.cells = [];

    this.getIndex = function() {
        return this.grid.rows.indexOf(this);
    };

    this.addCell = function() {
        var c = new cell(this);
        this.cells.push(c);
        return c;
    };
}

module.exports = row;