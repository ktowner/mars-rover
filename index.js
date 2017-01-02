/* Started from answer at http://stackoverflow.com/questions/25955967/how-to-represent-entities-in-a-grid and modified */

var Grid = requires("./src/grid");
var Entity = requires('./src/entity');

var positionX = 5;
var positionY = 8;
var direction = "N";

var mars = new Grid(15, 15);
var rover = new Entity(direction);
mars.cellAt(positionX, positionY).addEntity(rover);
rover.followInstructions(["f","f","r","b","b","l","f"]);