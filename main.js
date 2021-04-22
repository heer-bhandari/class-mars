canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
img_baground = "mars.jpg";
img_rover = "rover.png";
rover_width = 90 ;
rover_height = 70 ; 
rover_x = 0 ;
rover_y = 0 ;
function add() {
    B_ground = new Image();
    B_ground.onload = uploadbackround;
    B_ground.src = img_baground;
    
    r_ground = new Image();
    r_ground.onload = uploadrover;
    r_ground.src = img_rover;
}
function uploadbackround() {
    ctx.drawImage(B_ground , 0 , 0 , canvas.width , canvas.height);
}
function uploadrover() {
    ctx.drawImage(r_ground , rover_x , rover_y , rover_width , rover_height);
}