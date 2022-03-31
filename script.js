function refreshtime(){
    var display = document.querySelector('.display')

    var agora = new Date()

    var hora = timefix(agora.getHours()) + ':' + timefix(agora.getMinutes()) + ':' + timefix(agora.getSeconds())

    display.textContent = hora
}

function timefix(numero){
    if (numero < 10){
        numero = '0' + numero
    }
    return numero
}
refreshtime()
setInterval(refreshtime, 1000)

