module.exports = {
    computeRowAndCell : function(movement, currentLocation) {
        var row, cell;

        if (currentLocation.facing === "N") {
            if (movement === "f") {
                row = currentLocation.row - 1;
                cell = currentLocation.cell;
            } else {
                row = currentLocation.row + 1;
                cell = currentLocation.cell;
            }
        } else if (currentLocation.facing === "E") {
            if (movement === "f") {
                row = currentLocation.row;
                cell = currentLocation.cell + 1;
            } else {
                row = currentLocation.row;
                cell = currentLocation.cell - 1;
            }
        } else if (currentLocation.facing === "S") {
            if (movement === "f") {
                row = currentLocation.row + 1;
                cell = currentLocation.cell;
            } else {
                row = currentLocation.row - 1;
                cell = currentLocation.cell;
            }
        } else if (currentLocation.facing === "W") {
            if (movement === "f") {
                row = currentLocation.row;
                cell = currentLocation.cell - 1;
            } else {
                row = currentLocation.row;
                cell = currentLocation.cell + 1;
            }
        }

        return {
            row: row,
            cell: cell
        };
    }
};