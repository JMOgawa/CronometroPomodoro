$(document).ready(function () {
    var minutes_inicial = 25;
    var minutes = minutes_inicial;
    var seconds = 0;
    $("#tempo").html(minutes_inicial + ":00");
    
    $("#btn_short").click(function () {
        minutes_inicial = 10;
        minutes = minutes_inicial;
        console.log(minutes);
        $("#tempo").html(minutes_inicial + ":00");
    });
    
    $("#btn_long").click(function () {
        minutes_inicial = 15;
        minutes = minutes_inicial;
        console.log(minutes);        $("#tempo").html(minutes_inicial + ":00");
    });
    
    $("#btn_timer").click(function () {
        minutes_inicial = 25;
        minutes = minutes_inicial;
        console.log(minutes);        $("#tempo").html(minutes_inicial + ":00");
    });
    
    $("#btn-iniciar").click(function(){   
      $(this).addClass("hidden");
      $("#btn-parar").removeClass("hidden");
        // Update the countdown every 1 second
        var x = setInterval(function() {
            // Calculate the remaining time
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(x);
                    $("#tempo").html("00:00");
                    return;
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
                    // Format minutes and seconds with leading zeros
        var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            // Display the result in the element with id="countdown"
        $("#tempo").html(formattedMinutes + ":" + formattedSeconds);
    }, 1000);


    $("#btn-parar").click(function(){
      $(this).addClass("hidden");
      $("#btn-iniciar").removeClass("hidden");
        clearInterval(x);
    });
        $(".bi-arrow-clockwise").click(function(){
            clearInterval(x);
            console.log(minutes_inicial);
            $("#tempo").html(minutes_inicial + ":00");
        });
    });
    
    let angle = 0;
    $(".bi-arrow-clockwise").click(function() {
        angle += 360;
        $(this).css({
        "transform": `rotate(${angle}deg)`,
        "transition": "transform 0.5s ease"
        });
        $('#btn-parar').addClass("hidden");
      $("#btn-iniciar").removeClass("hidden");
    });

    $("bi-arrows-fullscreen").click(function(){});
    $("bi-gear").click(function(){});
    
});

function iniciarContagem() {
    console.log("Iniciando contagem...");
}

function pararContagem() {
    console.log("Parando contagem...");
}

function reiniciar() {
    console.log("Reiniciar...");
    
}
function settings() {
    console.log("Settings...");
}
function fullscreen(){
    console.log("Fullscreen...");
}
