export function MostrarHTML() {

  let navbar = document.getElementById("Navbar").innerHTML = CrearNavbar();
  let footer = document.getElementById("Footer").innerHTML = CrearFooter();;
  let Noticias = document.getElementById("Noticias").innerHTML = CrearTarjetaNoticias();;
  let banners = document.getElementById("Banners").innerHTML = CrearBanners();;
  let Tabla = document.getElementById("TablaContainer").innerHTML = CrearTabla();;
}
 /* 1-Navbar */
 const CrearNavbar = (data) => {
  let html = 
      `
     <a class="navbar-brand" href="#">
        <img src="img/1-Logo.png" alt="Logo NoticiasTecnológicas" class="navegacion-principal__marca">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="ListaNavbar">
        <ul class="navbar-nav mr-auto">
        `
        data.forEach(element => {
          html +=  ` <li class="${element.classDeCss}"><a class="nav-link" href="${element.enlace}">${element.nombre}</a></li> `
        });
        
       
       html += 
       `
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-search"></i></a></li>        
          </ul>
      </div>
      `   
    

  return html
}

/* 2-Footer */
const CrearFooter = (data) => {
  let html = `
    <h3>Derechos de Autor de NoticiasTecnológicas</h3>
      <p>Sigue a NoticiasTecnológicas</p>
      <ul class="list-inline enlaces-pie" id="ListaFooter">
        <!-- Aquí se insertarán los elementos del pie de página <li>términos condiciones</li> -->
        `
        data.forEach(element => {
          html += `<a href="${element.enlace}" class="mx-2"><i class="${element.claseDeCss}">${element.nombre}</i></a>` 
        });
      
      html += ` </ul>`
    

  return html
}