/* Started from answer at http://stackoverflow.com/questions/25955967/how-to-represent-entities-in-a-grid and modified */

var Grid = require("./src/grid");
var Entity = require('./src/entity');

var positionX = 5;
var positionY = 8;
var direction = "N";

var mars = new Grid(15, 15);
var rover = new Entity(direction);
mars.cellAt(positionY, positionX).addEntity(rover);
rover.followInstructions(["f","r","f","l","b","l","f","r"]);

console.log(rover.getLocation());