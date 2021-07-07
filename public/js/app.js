const dias = document.getElementById('days'),
      horas = document.getElementById('hours'),
      minutos = document.getElementById('minutes'),
      segundos = document.getElementById('seconds');
const infoContainer = document.getElementById('info'),
      animation = document.getElementById('animation');
      animation.style.display = 'none'
const restant = document.getElementById('restant');
const title = document.getElementById('title');



document.addEventListener('DOMContentLoaded', mostrarTiempo('Jan 01 2022'));

  
const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        seconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        minutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        hours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        days = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        seconds,
        minutes,
        hours,
        days
    }
}

function mostrarTiempo(deadline) {
    const update = setInterval(() => {
        let remain = getRemainTime(deadline);
        const { remainTime, days, hours, minutes, seconds } = remain;
        dias.textContent = days;
        horas.textContent = hours;
        minutos.textContent = minutes;
        segundos.textContent = seconds;

        if (remainTime <= 0) {
            clearInterval(update);
            dias.textContent = '0';
            horas.textContent = '0';
            minutos.textContent = '0';
            segundos.textContent = '00';
            
            if(remainTime < 0) {
                segundos.textContent = '01';
                setTimeout(() => {
                    segundos.textContent = '00';
                    restant.style.animation = 'move-time 4s forwards'
                    title.style.animation = 'disappear 1s 3s forwards'
                }, 500);
            }
            setTimeout(() => {
                mostrarMensaje();
            }, 4500);
        }
    }, 1000)
}


function mostrarMensaje() {
    infoContainer.remove() ;
    animation.style.display = 'flex';

    animation.style.animation = 'show 1.5s forwards'
}