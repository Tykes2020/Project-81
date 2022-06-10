canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
 
ctx.beginPath();

ctx.strokeStyle="grey";

ctx.lineWidth=3;

ctx.rect(5, 5, 790, 590);

ctx.stroke();

ctx.beginPath();

ctx.strokeStyle="blue";

ctx.lineWidth="5";

ctx.arc(230, 210, 60, 0, 2*Math.PI);

ctx.stroke();

ctx.stroke();

ctx.beginPath();

ctx.strokeStyle="black";

ctx.lineWidth="5";

ctx.arc(390, 210, 60, 0, 2*Math.PI);

ctx.stroke();

ctx.beginPath();

ctx.strokeStyle="yellow";

ctx.lineWidth="5";

ctx.arc(310, 280, 60, 0, 2*Math.PI);

ctx.stroke();

ctx.beginPath();

ctx.strokeStyle="red";

ctx.lineWidth="5";

ctx.arc(470, 280, 60, 0, 2*Math.PI);

ctx.stroke();

ctx.beginPath();

ctx.strokeStyle="green";

ctx.lineWidth="5";

ctx.arc(550, 210, 60, 0, 2*Math.PI);

ctx.stroke();