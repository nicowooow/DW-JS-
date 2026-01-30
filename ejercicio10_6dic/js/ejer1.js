const clubs = { 
  ala: { id:1, nombre:"Alavés", pais:"España", fundacion:1921, presidente:"Alfonso Fernández de Trocóniz", entrenador:"Luis García Plaza", web:"www.deportivoalaves.com" },
  alm: { id:2, nombre:"Almería", pais:"España", fundacion:1989, presidente:"Turki Al-Sheikh", entrenador:"Gaizka Garitano", web:"www.udalmeriasad.com" },
  ath: { id:3, nombre:"Athletic de Bilbao", pais:"España", fundacion:1898, presidente:"Jon Uriarte", entrenador:"Ernesto Valverde", web:"www.athletic-nombre.net" },
  atl: { id:4, nombre:"Atlético de Madrid", pais:"España", fundacion:1903, presidente:"Enrique Cerezo", entrenador:"Diego Pablo Simeone", web:"www.nombreatleticodemadrid.com" },
  bar: { id:5, nombre:"Barcelona", pais:"España", fundacion:1899, presidente:"Joan Laporta", entrenador:"Xavi Hernández", web:"www.fcbarcelona.com" },
  bet: { id:6, nombre:"Betis", pais:"España", fundacion:1907, presidente:"Ángel Haro", entrenador:"Manuel Pellegrini", web:"www.realbetisbalompie.es" },
  cad: { id:7, nombre:"Cádiz", pais:"España", fundacion:1910, presidente:"Manuel Vizcaíno Fernández", entrenador:"Sergio González", web:"www.cadizcf.com" },
  cel: { id:8, nombre:"Celta", pais:"España", fundacion:1923, presidente:"Carlos Mouriño", entrenador:"Rafa Benítez", web:"www.celtavigo.net" },
  ger: { id:9, nombre:"Gerona", pais:"España", fundacion:1930, presidente:"Delfí Geli", entrenador:"Míchel Sánchez", web:"www.gironafc.cat" },
  get: { id:10, nombre:"Getafe", pais:"España", fundacion:1983, presidente:"Ángel Torres", entrenador:"José Bordalás", web:"www.getafecf.com" },  
  gra: { id:11, nombre:"Granada", pais:"España", fundacion:1931, presidente:"Jiang Lizhang", entrenador:"Paco López", web:"www.granadacf.es" },
  mad: { id:12, nombre:"Real Madrid", pais:"España", fundacion:1902, presidente:"Florentino Pérez", entrenador:"Carlo Ancelotti", web:"www.realmadrid.com" },
  mal: { id:13, nombre:"Mallorca", pais:"España", fundacion:1916, presidente:"Andy Kohlberg", entrenador:"Javier Aguirre", web:"www.rcdmallorca.es" },  
  osa: { id:14, nombre:"Osasuna", pais:"España", fundacion:1920, presidente:"Luis Sabalza", entrenador:"Jagoba Arrasate", web:"www.osasuna.es" },
  pal: { id:15, nombre:"Las Palmas", pais:"España", fundacion:1949, presidente:"Miguel Ángel Ramírez Alonso", entrenador:"Xavi García Pimienta", web:"www.udlaspalmas.es" },
  ray: { id:16, nombre:"Rayo Vallecano", pais:"España", fundacion:1924, presidente:"Raúl Martín Presa", entrenador:"Francisco Rodríguez", web:"www.rayovallecano.es" },
  sev: { id:17, nombre:"Sevilla", pais:"España", fundacion:1890, presidente:"José Castro", entrenador:"Diego Alonso", web:"www.sevillafc.es" },
  soc: { id:18, nombre:"Real Sociedad", pais:"España", fundacion:1909, presidente:"Jokin Aperribay", entrenador:"Imanol Alguacil", web:"www.realsociedad.com" },  
  val: { id:19, nombre:"Valencia", pais:"España", fundacion:1919, presidente:"Layhoon Chan", entrenador:"Rubén Baraja", web:"www.valenciacf.es" },
  vil: { id:20, nombre:"Villarreal", pais:"España", fundacion:1942, presidente:"Fernando Roig", entrenador:"Pacheta", web:"www.villarrealcf.es" }
};

let input_1 = document.querySelector("#ejer1 input");
let salida_1 = document.getElementById("salida1");
function json2table(obt_json, id) {
  let salida = "";
  for (const name in obt_json) {
    if (obt_json[name].id == id) {
      salida = "<table>";
      console.log("iguales");
      salida += "<tr>";
      for (key in obt_json[name]) {
        // console.log(key);
        salida += `<td>${obt_json[name][key]}</td>`;
      }
      return (salida += "</tr>");
    } else {
      console.log("no iguales");
      salida = "<tr><td>el equipo no existe</td></tr>";
    }
  }
  salida += "</table>";
  return salida;
}

input_1.addEventListener("input", () => {
  let id = input_1.value;
  let valor = json2table(clubs, id);
  salida_1.innerHTML = valor;
});
