var row = require('./row');

function Grid(height, width) {
    this.rows = [];
    //create the grid in the default size.
    if (height != null && width != null) {
        var i, j, r;
        for (i = 0; i < height; i++) {
            r = this.addRow();
            for (j = 0; j < width; j++)
                r.addCell();
        }
    }
}

Grid.prototype.entitiesAt = function(row, cell) {
    return this.cellAt(row, cell).entities;
};

Grid.prototype.cellAt = function (row, cell) {
    return this.rows[row].cells[cell];
};

Grid.prototype.addRow = function() {
    var r = new row(this);
    this.rows.push(r);
    return r;
};

module.exports = Grid;