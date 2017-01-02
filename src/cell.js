function cell(parentRow) {
    this.row = parentRow;
    this.entities = [];

    this.getIndex = function() {
        return this.row.cells.indexOf(this);
    };

    this.addEntity = function(entity) {
        this.entities.push(entity);
        entity.cell = this;
    };

    this.removeEntity = function(entity) {
        var i = this.entities.indexOf(entity);
        if (i >= 0) this.entities.splice(i, 1);
        entity.cell = null;
    };

    this.removeEntityAt = function(index) {
        if (this.entities.length < index && index >= 0) {
            e = this.entities[index];
            this.entities.splice(index, 1);
            e.cell = null;
        }
    };
}

module.exports = cell;