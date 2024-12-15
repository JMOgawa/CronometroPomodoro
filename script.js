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
        $(this).addClass("ativo");
        $("#btn_long").removeClass("ativo");
        $("#btn_timer").removeClass("ativo");
    });

    $("#btn_long").click(function () {
        minutes_inicial = 15;
        minutes = minutes_inicial;
        console.log(minutes); $("#tempo").html(minutes_inicial + ":00");
        $(this).addClass("ativo");
        $("#btn_timer").removeClass("ativo");
        $("#btn_short").removeClass("ativo");
    });

    $("#btn_timer").click(function () {
        minutes_inicial = 25;
        minutes = minutes_inicial;
        console.log(minutes); $("#tempo").html(minutes_inicial + ":00");
        $(this).addClass("ativo");
        $("#btn_long").removeClass("ativo");
        $("#btn_short").removeClass("ativo");
    });

    $("#btn-iniciar").click(function () {
        $(this).addClass("hidden");
        $("#btn-parar").removeClass("hidden");
        //atualizar a cada 1 segundo
        var x = setInterval(function () {
            //calculando tempo  restante
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
            //máscara p/ o tempo >>> 00:00
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            $("#tempo").html(formattedMinutes + ":" + formattedSeconds);
        }, 1000);


        $("#btn-parar").click(function () {
            $(this).addClass("hidden");
            $("#btn-iniciar").removeClass("hidden");
            clearInterval(x);
        });
        $(".bi-arrow-clockwise").click(function () {
            clearInterval(x);
            console.log(minutes_inicial);
            $("#tempo").html(minutes_inicial + ":00");
        });
    });

    let angle = 0;
    $(".bi-arrow-clockwise").click(function () {
        angle += 360;
        $(this).css({
            "transform": `rotate(${angle}deg)`,
            "transition": "transform 0.5s ease"
        });
        $('#btn-parar').addClass("hidden");
        $("#btn-iniciar").removeClass("hidden");
    });

    $(".bi-arrows-fullscreen").click(function () {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            console.log("Fullscreen...");
            elem.requestFullscreen();
        }
        if (document.exitFullscreen) {
            console.log("SAINDO Fullscreen...");
            document.exitFullscreen();
        }
    });

    $(".bi-gear").click(function () {
    });
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