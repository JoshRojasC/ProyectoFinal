export function MostrarDatosEnConsola(){
    MostrarDatosConfiguracion();
    MostrarDatosPersonas();
    }

    
    
    function MostrarDatosConfiguracion(){
    //truco !fetch
    
        let url = "/js/Configuraciones.json"
    
    fetch(url)
    
        .then(response => response.json())
    
        .then(data => console.log(data));
    
    
    }
    
    function MostrarDatosPersonas(){
        //truco !fetch
        
            let url = "https://jsonplaceholder.typicode.com/users"
        
        fetch(url)
        
            .then(response => response.json())
        
            .then(data => console.log(data));
        
        
        }