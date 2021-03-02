


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
  
    let data = JSON.parse(localStorage.getItem("datosJson")) || [];
    
    //Obtener id legajo, por medio de jquery accedemos al elemento donde se escribio el legajo
    //Filtrar en el array de data para encontrar el legajo que coincida, utilizaremos la funcion data.find
    //Luego visualizaremos en el formulario los diferentes datos, utilizando jquery insertaremos en cada uno de los input los valores deseados $("#dni").val(variable)
    

}

    

var enviar = document.getElementById("enviar").addEventListener("click", function(){

    datosAlumnos();

});




   

   
