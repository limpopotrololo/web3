// const table = document.getElementById("result-table")
//
//
// $("form").on("submit", function (event){
//     event.preventDefault();
//     $.ajax({
//         url: '/demo2-1.0-SNAPSHOT/control',
//         type: "POST",
//         dataType: "html",
//         data: $(this).serialize()+"&timezone="+ new Date().getTimezoneOffset(),
//         success: function (data) {
//             console.log(data);
//             location.reload();
//         }
//     })
// });
//
// $("#clear").on("click",function (){
//     $.ajax({
//         url:"/demo2-1.0-SNAPSHOT/control",
//         method: "POST",
//         dataType: "html",
//         data: "clear=true",
//         success: function () {
//             localStorage.clear();
//             let arrayX = [];
//             let arrayY = [];
//             localStorage.setItem("arrX",JSON.stringify(arrayX));
//             localStorage.setItem("arrY",JSON.stringify(arrayY));
//             clearGraph();
//             table.innerHTML = " <tr>\n" +
//                 "                <th>X</th>\n" +
//                 "                <th>Y</th>\n" +
//                 "                <th>R</th>\n" +
//                 "                <th>Result</th>\n" +
//                 "                <th>Attempt time</th>\n" +
//                 "                <th>Processing time</th>\n" +
//                 "            </tr>"
//         }
//     })
// });
//
