const canvas = document.getElementById('graph');
ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let map = 0.4;
const defaultR = 1;
const division = 56;
let rvalue;
let xvalue;
let yvalue;
let points =[];

function drawServicePoint(x, y, text, ctx) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.fillText(text, x + 3, y - 6);
}

function draw() {
    if (!canvas.getContext) {
        return;
    }
    R = width*0.4;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'pink';
    ctx.strokeStyle = 'blue';
    ctx.font = '12px serif';


    ctx.beginPath();
    ctx.moveTo(width/2,height/2);
    ctx.lineTo(width/2,height/2+R);
    ctx.lineTo(width/2+R,height/2+R);
    ctx.lineTo(width/2+R,height/2);
    ctx.lineTo(width/2,height/2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width / 2, height / 2, R / 2, -Math.PI, -Math.PI/2);
    ctx.lineTo(width / 2, height / 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(width/2,height/2);
    ctx.lineTo(width/2,height/2-R/2);
    ctx.lineTo(width/2+R/2,height/2);
    ctx.fill();

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1.1;

    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    drawServicePoint(width / 2, height / 2 - R, 'R', ctx);
    drawServicePoint(width / 2, height / 2 - R / 2, 'R/2', ctx);
    drawServicePoint(width / 2, height / 2 + R, '-R', ctx);
    drawServicePoint(width / 2, height / 2 + R / 2, '-R/2', ctx);
    drawServicePoint(width / 2 + R, height / 2, 'R', ctx);
    drawServicePoint(width / 2 + R / 2, height / 2, 'R/2', ctx);
    drawServicePoint(width / 2 - R, height / 2, '-R', ctx);
    drawServicePoint(width / 2 - R / 2, height / 2, '-R/2', ctx);


}

draw(1);

function inArea(x0,y0,R){

    if ((x0>=0 && y0>=0 && y0<=-x0+R/2) || (x0<=0 && y0>=0 && (x0*x0 +y0*y0) < R*R/4) || (x0>=0 && y0 <=0 && x0<=R && y0 >= -R)){
        return true;
    }
    else return false;
}


function clearGraph(){
    draw();
}

$('.button_x').on("click",function(event) {
    console.log("pushed button");
    xvalue = $(this).val();
    $(this).addClass('active');
    $('.button_x').not(this).removeClass('active');
    $('.input-form__hidden_x input[type=hidden]').val(xvalue);

})

$('#clear-button').on("click", function (event){
    clearGraph();
})




$('#graph').on("click",function (event){
    event.preventDefault();
    let status;
    let rect = canvas.getBoundingClientRect();
    let x = event.offsetX * canvas.width / canvas.clientWidth | 0;
    let y = event.offsetY * canvas.height / canvas.clientHeight | 0;
    let x0 = Math.round((x - canvas.width / 2) / (division * (2 / defaultR)) * 1000) / 1000,
        y0 = Math.round((canvas.height / 2 - y) / (division * (2 / defaultR)) * 1000) / 1000;

    ctx.beginPath();
    if (inArea(x0,y0,1)){
        ctx.fillStyle="green";
        status = true;
        ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
    }
    else{
        ctx.fillStyle="red";
        status = false;
        ctx.arc(x, y, 2.5, 0, 2 * Math.PI);

    }
    ctx.fill();
    ctx.stroke();
    points.push([x,y,status]);

    $("#form\\:inputY").val(y0);
    $('.input-form__hidden_x input[type=hidden]').val(x0);
    $("#form\\:inputR").val(1);
    $('#form\\:send-button').click();
    $("#form\\:inputY").val('');
    $('.input-form__hidden_x input[type=hidden]').val('');
    $("#form\\:inputR").val('');



})

function redrawPoints(R) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(R);

    for (let i = 0; i < points.length; i++) {
        let x = points[i][0];
        let y = points[i][1];
        const status = points[i][2];
        console.log(x);
        console.log(y);
        console.log("-------------------------------")
        let x0 = (Math.round((x - canvas.width / 2) / (division * (2 / defaultR)) * 1000) / 1000)/R,
            y0 = (Math.round((canvas.height / 2 - y) / (division * (2 / defaultR)) * 1000) / 1000)/R;
        console.log(x0);
        console.log(y0);

        x = Math.round((x0 * division * (2 / defaultR) + canvas.width / 2) * 1000) / 1000;
        y = Math.round((-y0 * division * (2 / defaultR) + canvas.height / 2) * 1000) / 1000;

        ctx.beginPath();
        if (inArea(x0, y0, R)) {
            ctx.fillStyle = "green";
        } else {
            ctx.fillStyle = "red";
        }
        ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

function hello(data){


        let y0 = $("#form\\:inputY").val();
        let x0 = $('.input-form__hidden_x input[type=hidden]').val();
        let r = $("#form\\:inputR").val();
        if (data.status === "complete" && x0!="" && y0!="" && r!=""  ){

        let x = Math.round((x0 * division * (2 / defaultR) + canvas.width / 2) * canvas.clientWidth / canvas.width);
        let y = Math.round((canvas.height / 2 - y0 * division * (2 / defaultR)) * canvas.clientHeight / canvas.height);


        ctx.beginPath();

        if (inArea(x0,y0)){
            ctx.fillStyle="green";
            status = true;
            ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
        }
        else{
            ctx.fillStyle="red";
            status = false;
            ctx.arc(x, y, 2.5, 0, 2 * Math.PI);

        }
        ctx.fill();
        ctx.stroke();
        points.push([x,y,status]);
        redrawPoints(R);

    }
}
$("#form\\:inputR").on("input", function (event){
    if ($("#form\\:inputR").val() < 4 && $("#form\\:inputR").val()>1){
        redrawPoints($("#form\\:inputR").val());
    }

})
