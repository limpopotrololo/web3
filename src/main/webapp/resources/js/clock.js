$(function (){
    const refresh_time=10000;

    function dateSetter(date) {
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        const dateString = `${day}.${month}.${year}`;

        $('.data-clock').html(dateString);
    }
    function timeSetter(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        $('.time-clock').html(`${hours}:${minutes}:${seconds}`);
    }
    function init(){
        let date = new Date();
        dateSetter(date);
        timeSetter(date);
    }

    init();
    setInterval(init,refresh_time);
});