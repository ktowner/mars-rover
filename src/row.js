var cell = require('./cell');

function Row(parentGrid) {
    this.parentGrid = parentGrid;
    this.cells = [];
}

Row.prototype.getIndex = function() {
    return this.parentGrid.rows.indexOf(this);
};

Row.prototype.addCell = function() {
    var c = new cell(this);
    this.cells.push(c);
    return c;
};

module.exports = Row;