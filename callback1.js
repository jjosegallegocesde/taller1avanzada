//DECLARANDO LA FUNCION PRINCIPAL
function principal(nombre,callback){

    setTimeout(function(){
        //PROCESO (¿QUE HACE ESTA FUNCION?)
        console.log("hola "+nombre)
        //LLAMO AL CALLBACK
        callback() 

    },4000)

}

//LLAMANDO LA FUNCION PRINCIPAL
principal("Juan Jo",function(){
    console.log("Como estas? soy el callback")
})
