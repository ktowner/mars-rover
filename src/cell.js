function Cell(parentRow) {
    this.parentRow = parentRow;
    this.entities = [];
}

Cell.prototype.getIndex = function() {
    return this.parentRow.cells.indexOf(this);
};

Cell.prototype.addEntity = function(entity) {
    this.entities.push(entity);
    entity.cell = this;
};

Cell.prototype.removeEntity = function(entity) {
    var i = this.entities.indexOf(entity);
    if (i >= 0) this.entities.splice(i, 1);
    entity.cell = null;
};

Cell.prototype.removeEntityAt = function(index) {
    if (this.entities.length < index && index >= 0) {
        e = this.entities[index];
        this.entities.splice(index, 1);
        e.cell = null;
    }
};


module.exports = Cell;