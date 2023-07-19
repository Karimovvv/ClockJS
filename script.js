function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock-display").innerHTML = time;

    setTimeout(updateClock, 1000);
}

function padZero(number) {
    return (number < 10 ? "0" : "") + number;
}

updateClock();
