var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

console.log(`targetx: ${targetX}`);
console.log(`targety: ${targetY}`);

function distance(targetX,mousex,targetY,mousey){
  var distanceFromSpot = Math.sqrt((targetX-mousex)**2 + (targetY-mousey)**2);
  console.log(`distance: ${distanceFromSpot}`)
  return distanceFromSpot;
}

function loc(event){
  console.log(`mousex: ${event.clientX}\nmousey: ${event.clientY}`);
  var mousex = event.clientX
  var mousey = event.clientY
  var dist = distance(targetX,mousex,targetY,mousey)
  box.style.backgroundColor = `rgb(${255-dist}, 0, 0)`
  // if (mousex == targetX && mousey == targetY){
    // box.style.backgroundColor = `rgb(155, 235, 52)`

}

box.addEventListener("mousemove", loc);
