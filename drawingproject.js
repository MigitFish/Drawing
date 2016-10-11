var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "lightskyblue";
canvas.rect(0,0,5000,1000);
canvas.fill();

/*canvas.beginPath();
canvas.arc(800, 450, 350, 0, 2*Math.PI);
canvas.stroke();
canvas.fillStyle = "pink";
canvas.fill();

canvas.beginPath();
canvas.moveTo(575 , 340);
canvas.quadraticCurveTo(525,385,625,425);
canvas.quadraticCurveTo(725,445,725,365);
canvas.quadraticCurveTo(675,285,525,355);
canvas.stroke();
canvas.fillStyle = "red";
canvas.fill();

canvas.beginPath();
canvas.moveTo(875 , 340);
canvas.quadraticCurveTo(975,285,825,355);
canvas.quadraticCurveTo(1025,445,1025,365);
canvas.quadraticCurveTo(825,385,925,425);
canvas.stroke();
canvas.fillStyle = "red";
canvas.fill();

canvas.beginPath();
canvas.arc(450, 220, 90 ,0 , 90);
canvas.stroke();
canvas.fill();*/

/*canvas.beginPath()
canvas.arc(800,450,200,0, 2*Math.PI);
canvas.stroke();
canvas.fillStyle = "purple";
canvas.fill();

canvas.beginPath();
canvas.moveTo(800,640)
canvas.quadraticCurveTo(800,400,1300,600);
canvas.quadraticCurveTo(800,640,1300,600)
canvas.quadraticCurveTo(1380,640,1350,890);
canvas.quadraticCurveTo(700,750,800,640);
canvas.fillStyle = "purple";
canvas.fill();

canvas.beginPath();
canvas.moveTo(784,648);
canvas.quadraticCurveTo(800,900,1350,890);
canvas.quadraticCurveTo(1350,850,1200,780);
canvas.fillStyle = "tan";
canvas.fill();

canvas.beginPath();
canvas.moveTo(620,520);
canvas.quadraticCurveTo(700,540,800,540);
canvas.fillStyle = "black";
canvas.fill();

canvas.beginPath();
canvas.arc(800,420,50,0,2*Math.PI);
canvas.fillStyle = "black";
canvas.fill();

canvas.beginPath();
canvas.arc(800,400,30,0,2*Math.PI);
canvas.fillStyle = "white";
canvas.fill();

canvas.beginPath();
canvas.moveTo(700,250);
canvas.lineTo(680,200);
canvas.moveTo(720,230);
canvas.quadraticCurveTo(720,220,820,280);
canvas.moveTo()
canvas.fillStyle = "purple";
canvas.fill();*/

canvas.beginPath();
canvas.rect(100,600,1800,500);
canvas.fillStyle = "limegreen";
canvas.fill();

canvas.beginPath();
canvas.rect(200,400,1580,500);
canvas.fillStyle = "chocolate";
canvas.fill();

canvas.beginPath();
canvas.arc(200,900,60,0,2*Math.PI);
canvas.fillStyle = "limegreen";
canvas.fill();

canvas.beginPath();
canvas.arc(1780,900,60,0,2*Math.PI);
canvas.fillStyle = "limegreen";
canvas.fill();

canvas.beginPath();
canvas.rect(350,300,1275,300);
canvas.fillStyle = "chocolate";
canvas.fill();

canvas.beginPath();
canvas.moveTo(200,500);
canvas.lineTo(150,100);
canvas.lineTo(500,300);
canvas.fillStyle = "burlywood";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.moveTo(450,300);
canvas.lineTo(400,50);
canvas.lineTo(800,300);
canvas.fillStyle = "burlywood";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.rect(200,300,1580,200);
canvas.fillStyle = "burlywood";
canvas.fill();

canvas.beginPath();
canvas.moveTo(1780,500);
canvas.lineTo(1830,100);
canvas.lineTo(1480,300);
canvas.fillStyle = "burlywood";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.moveTo(1480,320);
canvas.lineTo(1580,50);
canvas.lineTo(1100,300);
canvas.fillStyle = "burlywood";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.moveTo(1100,300);
canvas.lineTo(950,50);
canvas.lineTo(800,300);
canvas.fillStyle = "burlywood";
canvas.fill();
canvas.stroke();

canvas.fillStyle = "brown";
for(var i = 0; i < 5;i++){
  canvas.fillRect(400 + (i*250),700,100,150);
}

canvas.beginPath();
canvas.fillStyle = "tomato";
canvas.fillRect(800,420,400,250);

canvas.beginPath();
canvas.moveTo(800,570);
canvas.lineTo(700,520);
canvas.lineTo(800,420);
canvas.fillStyle = "burlywood";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.moveTo(1200,570);
canvas.lineTo(1300,520);
canvas.lineTo(1200,420);
canvas.fillStyle = "burlywood";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.rect(950,450,100,150);
canvas.fillStyle = "brown";
canvas.fill();
