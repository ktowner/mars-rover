var row = require('./row');

function grid(height, width) {
    this.rows = [];

    this.cellAt = function(row, cell) {
        return this.rows[row].cells[cell];
    };

    this.entitiesAt = function(row, cell) {
        return this.cellAt(row, cell).entities;
    };

    this.addRow = function() {
        var r = new row(this);
        this.rows.push(r);
        return r;
    };

    //create the grid in the default size.
    if (height != null && width != null) {
        var i, j, r;
        for (i = 0; i <= height; i++) {
            r = this.addRow();
            for (j = 0; j <= width; j++)
                r.addCell();
        }
    }
}

module.exports = grid;