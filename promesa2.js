//declarando a la funcion principal
function principal(usuario,password){

    //UN OBJETO DE TIPO PROMISE
    let promesa=new Promise(function(resolve,reject){

        //proceso f(x) principal
        setTimeout(function(){

        if(usuario=="james123" && password=="admin123"){
            resolve("bienvenido")
        }else{
            reject("revisar por favor")
            
        }

        },5000)
        
    })

    return(promesa)
    

}


//llamar a la funcion principal
principal('juanes128','login123')
.then(function(respuestaResolve){
    console.log(respuestaResolve)
})
.catch(function(respuestaCatch){
    console.log(respuestaCatch)
})