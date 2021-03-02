

    //Array de todos los datos
    var getDatos = [];


function datosAlumnos(){

    

    //Agregamos los valores al array
    
    
    const newDatos = {
        legajo:$("#legajo").val(),
        apyn:$("#apyn").val(),
        domicilio:$("#domicilio").val(),
        codigopostal:$("#codigopostal").val(),
        nacimiento:$("#nacimiento").val(),
        email:$("#email").val(),
        sanguineo:$("#sanguineo").val(),
        fijo:$("#fijo").val(),
        celular:$("#celular").val(),
        dni:$("#dni").val()
        
    }

    

    //Convertimos getDatos en JSON
   // arjson = JSON.stringify(getDatos);

    temporal = JSON.parse(localStorage.getItem("datosJson")) || [];
    
    
    //Almacenamos los datos en la DB local
    
    localStorage.setItem("datosJson", JSON.stringify([...temporal, newDatos]));


}

    var enviar = document.getElementById("enviar").addEventListener("click", function(){

        datosAlumnos();
       
    });


    //Crear funcion para mostrar datos

    function mostrarDatos(){
         mostrar = JSON.parse(localStorage.getItem("datosJson"));
    
         
        }
    

   