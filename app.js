function iniciar(){
    console.log("estoy iniciando")
}

function procesar(){
    setTimeout(function(){
        console.log("estoy procesando")
    },5000)
    
}

function terminar(){
    console.log("estoy terminando")
}

iniciar()
procesar()
terminar()