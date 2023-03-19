const canvas = document.getElementById('example');
ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let R = width * 0.4;
const defaultR = 1;
const division = 56;
let rvalue;
let xvalue;
let yvalue;

function drawPoint(x, y, text, ctx) {
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

    drawPoint(width / 2, height / 2 - R, 'R', ctx);
    drawPoint(width / 2, height / 2 - R / 2, 'R/2', ctx);
    drawPoint(width / 2, height / 2 + R, '-R', ctx);
    drawPoint(width / 2, height / 2 + R / 2, '-R/2', ctx);
    drawPoint(width / 2 + R, height / 2, 'R', ctx);
    drawPoint(width / 2 + R / 2, height / 2, 'R/2', ctx);
    drawPoint(width / 2 - R, height / 2, '-R', ctx);
    drawPoint(width / 2 - R / 2, height / 2, '-R/2', ctx);


}

draw();

function clearGraph(){
    draw();
}

$('.button_r').on("click",function(event) {
    console.log("pushed button");
    rvalue = $(this).val();
    $(this).addClass('active');
    $('.button_r').not(this).removeClass('active');
    $('.input-form__hidden_r input[type=hidden]').val(rvalue);

})


// canvas.addEventListener('click', (event) => {
//
//     event.preventDefault();
//     let rect = canvas.getBoundingClientRect();
//     let x = event.offsetX * canvas.width / canvas.clientWidth | 0;
//     let y = event.offsetY * canvas.height / canvas.clientHeight | 0;
//     let x0 = Math.round((x - canvas.width / 2) / (division * (2 / defaultR)) * 1000) / 1000,
//         y0 = Math.round((canvas.height / 2 - y) / (division * (2 / defaultR)) * 1000) / 1000;
//     ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
//     let arrayX =JSON.parse(localStorage.getItem("arrX"));
//     let arrayY =JSON.parse( localStorage.getItem("arrY"));
//     arrayX.push(x);
//     arrayY.push(y);
//     localStorage.setItem("arrX",JSON.stringify(arrayX));
//     localStorage.setItem("arrY",JSON.stringify(arrayY));
//     if (x0 > -3 && x0 < 5 && y0 < 5 && y0 > -3) {
//         $.ajax({
//             url: "/demo2-1.0-SNAPSHOT/control",
//             method: "POST",
//             data: {
//                 x: x0,
//                 y: y0,
//                 r: defaultR,
//             },
//             dataType: "html",
//             success: function (data) {
//                 location.reload();
//
//             }
//
//         })
//     } else {
//         alert("Incorrect data")
//     }
//
//
// })
// window.addEventListener("load", (event)=> {
//     let canvas = document.getElementById('example');
//     let ctx = canvas.getContext('2d');
//     let arrayX = JSON.parse(localStorage.getItem("arrX"));
//     let arrayY = JSON.parse(localStorage.getItem("arrY"));
//     if (arrayX != null && arrayY != null) {
//
//     for (let i = 0; i < arrayX.length; i++) {
//         ctx.beginPath();
//         ctx.arc(parseInt(arrayX[i]), parseInt(arrayY[i]), 2.5, 0, 2 * Math.PI);
//         ctx.fill();
//         ctx.stroke();
//     }
// }
// })

