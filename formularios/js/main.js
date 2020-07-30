var array = ["amazonas|Amazonas", "antioquia|Antioquia", "arauca|Arauca", "atlantico|Atlántico", "bolivar|Bolívar", "boyaca|Boyacá", 
            "caldas|Caldas", "caqueta|Caquetá", "casanare|Casanare", "cauca|Cauca", "cesar|Cesar", "choco|Chocó", "cordoba|Córdoba",
            "cundinamarca|Cundinamarca", "guainia|Guainía", "guaviare|Guaviare", "huila|Huila", "guajira|La Guajira", "magdalena|Magdalena", 
            "meta|Meta", "nariño|Nariño", "norte|Norte de Santander", "putumayo|Putumayo", "quindio|Quindío", "risaralda|Risaralda",
            "sanandres|San Andrés y Providencia", "santander|Santander", "sucre|Sucre", "tolima|Tolima", "valle|Valle del Cauca", 
            "vaupes|Vaupés", "vichada|Vichada"];
var listaCiudades = { amazonas: ["Leticia", "Puerto Nariño"],
  antioquia: ["Bello", "Envigado", "Girardota", "Itag\u00fcí", "La Estrella", "Medellín", "Sabaneta"],
  arauca: ["Arauca", "Puerto Rondón", "Saraventa"],
  atlantico: ["Barranquilla", "Malambo", "Puerto Colombia", "Sabanalarga"],
  bolivar: ["Cartagena", "El Carmen de Bolívar", "Mompós"], 
  boyaca: ["Boyacá", "Duitama", "Paipa", "Sogamoso", "Villa de Leyva"],
  caldas: ["Filadelfia", "La Dorada", "Manizales", "Ríosucio"],
  caqueta: ["Cartagena del Chairá", "Florencia", "San Vicente del Caguán"],
  casanare: ["Monterrey", "Yopal"],
  cauca: ["Guapi", "Popayán", "Timbiquí"],
  cesar: ["Aguachica", "Becerril", "Valledupar"],
  choco: ["Alto Baudó", "Bahía Solano", "Istmina", "Lloró", "Quibdó"],
  cundinamarca: ["Bogotá", "Facatativá", "Fusagasugá", "Guaduas", "San Antonio del Tequendama"],
  guainia: ["Puerto Colombia", "Puerto Inírida"],
  guaviare: ["Calamar", "El Retorno", "Miraflores", "San José del Guaviare"],
  huila: ["Altamira", "Guadalupe", "Neiva", "Suaza"],
  guajira: ["Maicao", "Manaure", "Riohacha", "Urumita"],
  magdalena: ["Ciénaga", "Fundación", "Plato", "Santa Marta"],
  meta: ["La Macarena", "Puerto Concordia", "Villavicencio", "Vista Hermosa"],
  nariño: ["Olaya Herrera", "Pasto", "Tumaco"],
  norte: ["Cúcuta", "Ocaña", "Puerto Santander", "Sardinata"],
  putumayo: ["Mocoa", "Sibundoy"],
  quindío: ["Armenia", "Calarcá", "Filandía", "Salento"],
  risaralda: ["Dosquebradas", "Pereira", "Santa Rosa de Cabal"],
  sanandres: ["Providencia y Santa Catalina Islas", "San Andrés"],
  santander: ["Barrancabermeja", "Bucaramanga", "Floridablanca", "San Gil"],
  sucre: ["Corozal", "Coveñas", "Sincelejo", "Tolú"],
  tolima: ["Armero", "Ibagué", "Rioblanco"],
  valle: ["Buenaventura", "Buga", "Cali", "Palmira"],
  vaupes: ["Carurú", "Mitú", "Taraira"],
  vichada: ["Cumaribo", "La Primavera", "Puerto Carreño", "Santa Rosalía"]
}

function cargarDepartamentos() {
  addOptions("departamento", array);
}

//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
  var selector = document.getElementsByName(domElement)[0];
  for (departamento in array) {
      var pair = array[departamento].split("|");
      var opcion = document.createElement("option");
      opcion.text = array[departamento];
      // Añadimos un value a los option para hacer mas facil escoger las ciudades
      opcion.value = pair[0];
      opcion.innerHTML = pair[1];
      selector.add(opcion);
  }
}

function cargarCiudades() {
    // Objeto de departamentos con ciudades
    var departamentos = document.getElementById('departamento');
    var ciudades = document.getElementById('ciudad');
    var departamentoSeleccionado = departamentos.value;
    
    // Se limpian las ciudades
    ciudades.innerHTML = '<option value="">Seleccione una ciudad</option>';
    
    if(departamentoSeleccionado !== '')
    {
      // Se seleccionan y ordenan las ciudades
      departamentoSeleccionado = listaCiudades[departamentoSeleccionado];
      //departamentoSeleccionado.sort(); EVITAR
    
      // Se insertan las ciudades
      departamentoSeleccionado.forEach(function(ciudad){
        let opcion = document.createElement('option');
        opcion.value = ciudad;
        opcion.text = ciudad;
        ciudades.add(opcion);
      });
    }
    
  }
 
window.onload = cargarDepartamentos;

//GALERIA
$(document).ready(function () {
        var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
          movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
          },
          movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
          },
          movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
          },
          movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
          },
          clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

        $('#reload').bind('click', function () {
          newOptions = eval("(" + $('#newoptions').val() + ")");
          carousel.reload(newOptions);
          return false;
        });

      });