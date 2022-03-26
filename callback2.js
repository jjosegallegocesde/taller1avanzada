//declaro la funcion principal
function crearUsuario(nombre,edad,callback){

    setTimeout(function(){
        //proceso principal
        let usuario={
            nombreUsuario:nombre,
            edadUsuario:edad
        }
        //lamando al callback
        callback(usuario)

    },1000)
}
//llamo a la funcion principal
crearUsuario("James la banca",30,function(usuario){
    
    if(usuario.edadUsuario>=18){
        console.log("bienvenido")
    }else{
        console.log("upss no puedes entrar")
    }
})