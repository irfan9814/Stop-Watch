var seconds = 00;
var tens = 00;
var outputSeconds = document.getElementById('seconds');
var outputTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;

buttonStart.addEventListener('click', ()=>{
    Interval =setInterval(startTime, 10);
});

buttonStop.addEventListener('click', ()=>{
    clearInterval(Interval);
});

buttonReset.addEventListener('click', ()=>{
    clearInterval(Interval);
    tens ="00";
    seconds ="00";
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = "0" + tens;
    }

    if (tens >= 10){
        outputTens.innerHTML = tens
    }

    if ( tens > 99){
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        tens = 00;
        outputTens.innerHTML = "0" + tens;
    }

    if(seconds > 9){
        outputSeconds.innerHTML = seconds;
    }
}