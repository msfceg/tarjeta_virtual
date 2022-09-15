const music = new Audio("media/BrunoMarsLockedOutOfHeavenInstrumental.mp3")
music.play()
music.preload
music.loop = true
music.volume = 0.08;
music.pause()




//cuenta regresiva

var final = moment("2022-12-03");
        setInterval(function() {
            var inicio = moment();
            var duracion = final.diff(inicio);
            var intervalo = moment(duracion);
            var mes = intervalo.month()+1;
            var diaDelMes = intervalo.date();
            var hora = intervalo.hour();
            var minuto = intervalo.minute();
            var segundo = intervalo.second();
            var resultado = (intervalo.format("MM/DD HH:mm:ss"));
            let horass = document.getElementById("counter").innerHTML = (`${mes - 1}  Meses  </br> 
                                                                          ${diaDelMes}   Dias   </br>  
                                                                          ${hora}   Horas   </br>  
                                                                          ${minuto}   Minutos   </br>  
                                                                          ${segundo}   Segundos  </br>`);
            
        }, 1000);