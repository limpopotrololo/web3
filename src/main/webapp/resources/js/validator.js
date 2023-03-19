let yWarning = document.querySelector('#y-warning');
let subButton = document.querySelector('#send-button');
$(document).ready(function (){
    $("#form\\:inputY").val('');
    $("#form\\:inputY").on('input', function() {
        let yValue = parseFloat(this.value);
        if ((isNaN(yValue) || yValue < -3 || yValue > 5 ) && yValue!='') {
            $("#form\\:y-warning").show();
            $("#form\\:send-button").prop('disabled', true);
        } else {
            $("#form\\:y-warning").hide();
            $("#form\\:send-button").prop('disabled', false);
        }
    });
    $("#form\\:inputR").val('');
    $("#form\\:inputR").on('input', function() {
        let rValue = parseFloat(this.value);
        if ((isNaN(rValue) || rValue < 1 || rValue > 4 ) && rValue!=' ') {
            $("#form\\:r-warning").show();
            $("#form\\:send-button").prop('disabled', true);
        } else {
            $("#form\\:r-warning").hide();
            $("#form\\:send-button").prop('disabled', false);
        }
    });
})