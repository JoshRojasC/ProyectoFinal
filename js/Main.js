import { MostrarHTML } from "/js/CrearHtml.js"


document.addEventListener('DOMContentLoaded', ev => {
    MostrarHTML()
})


function MostrarDatosConfiguracion(){
//truco !fetch

    let url ;

fetch('url')

    .then(response => response.json())

    .then(data => console.log(data));


}