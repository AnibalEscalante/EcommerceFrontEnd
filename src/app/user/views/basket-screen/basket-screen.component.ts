import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-screen',
  templateUrl: './basket-screen.component.html',
  styleUrls: ['./basket-screen.component.less']
})
export class BasketScreenComponent implements OnInit {
  
  public pos: string;
  public widthBar: string;
  public activeStore: boolean;
  public activeDelivery: boolean;

  public regionsAndCommunes = [
    {
      "name": "Arica y Parinacota",
      "number": "XV",
      "communes": [
        "Arica",
        "Camarones",
        "General Lagos",
        "Putre"
      ]
    },
    {
      "name": "Tarapacá",
      "number": "I",
      "communes": [
        "Alto Hospicio",
        "Camiña",
        "Colchane",
        "Huara",
        "Iquique",
        "Pica",
        "Pozo Almonte"
      ]
    },
    {
      "name": "Antofagasta",
      "number": "II",
      "communes": [
        "Antofagasta",
        "Calama",
        "María Elena",
        "Mejillones",
        "Ollagüe",
        "San Pedro de Atacama",
        "Sierra Gorda",
        "Taltal",
        "Tocopilla"
      ]
    },
    {
      "name": "Atacama",
      "number": "III",
      "communes": [
        "Alto del Carmen",
        "Caldera",
        "Chañaral",
        "Copiapó",
        "Diego de Almagro",
        "Freirina",
        "Huasco",
        "Tierra Amarilla",
        "Vallenar"
      ]
    },
    {
      "name": "Coquimbo",
      "number": "IV",
      "communes": [
        "Andacollo",
        "Canela",
        "Combarbalá",
        "Coquimbo",
        "Illapel",
        "La Higuera",
        "La Serena",
        "Los Vilos",
        "Monte Patria",
        "Ovalle",
        "Paiguano",
        "Punitaqui",
        "Río Hurtado",
        "Salamanca",
        "Vicuña"
      ]
    },
    {
      "name": "Valparaíso",
      "number": "V",
      "communes": [
        "Algarrobo",
        "Cabildo",
        "Calera",
        "Calle Larga",
        "Cartagena",
        "Casablanca",
        "Catemu",
        "Concón",
        "El Quisco",
        "El Tabo",
        "Hijuelas",
        "Isla de Pascua",
        "Juan Fernández",
        "La Cruz",
        "La Ligua",
        "Limache",
        "Llaillay",
        "Los Andes",
        "Nogales",
        "Olmué",
        "Panquehue",
        "Papudo",
        "Petorca",
        "Puchuncaví",
        "Putaendo",
        "Quillota",
        "Quilpué",
        "Quintero",
        "Rinconada",
        "San Antonio",
        "San Esteban",
        "San Felipe",
        "Santa María",
        "Santo Domingo",
        "Valparaíso",
        "Villa Alemana",
        "Viña del Mar",
        "Zapallar"
      ]
    },
    {
      "name": "Metropolitana de Santiago",
      "number": "MET",
      "communes": [
        "Alhué",
        "Buin",
        "Calera de Tango",
        "Cerrillos",
        "Cerro Navia",
        "Colina",
        "Conchalí",
        "Curacaví",
        "El Bosque",
        "El Monte",
        "Estación Central",
        "Huechuraba",
        "Independencia",
        "Isla de Maipo",
        "La Cisterna",
        "La Florida",
        "La Granja",
        "La Pintana",
        "La Reina",
        "Lampa",
        "Las Condes",
        "Lo Barnechea",
        "Lo Espejo",
        "Lo Prado",
        "Macul",
        "Maipú",
        "María Pinto",
        "Melipilla",
        "Ñuñoa",
        "Padre Hurtado",
        "Paine",
        "Pedro Aguirre Cerda",
        "Peñaflor",
        "Peñalolén",
        "Pirque",
        "Providencia",
        "Pudahuel",
        "Puente Alto",
        "Quilicura",
        "Quinta Normal",
        "Recoleta",
        "Renca",
        "San Bernardo",
        "San Joaquín",
        "San José de Maipo",
        "San Miguel",
        "San Pedro",
        "San Ramón",
        "Santiago",
        "Talagante",
        "Tiltil",
        "Vitacura"
      ]
    },
    {
      "name": "Libertador Gral. Bernardo O’Higgins",
      "number": "VI",
      "communes": [
        "Chimbarongo",
        "Chépica",
        "Codegua",
        "Coinco",
        "Coltauco",
        "Doñihue",
        "Graneros",
        "La Estrella",
        "Las Cabras",
        "Litueche",
        "Lolol",
        "Machalí",
        "Malloa",
        "Marchihue",
        "Nancagua",
        "Navidad",
        "Olivar",
        "Palmilla",
        "Paredones",
        "Peralillo",
        "Peumo",
        "Pichidegua",
        "Pichilemu",
        "Placilla",
        "Pumanque",
        "Quinta de Tilcoco",
        "Rancagua",
        "Rengo",
        "Requínoa",
        "San Fernando",
        "San Francisco de Mostazal",
        "San Vicente de Tagua Tagua",
        "Santa Cruz"
      ]
    },
    {
      "name": "Maule",
      "number": "VII",
      "communes": [
        "Cauquenes",
        "Chanco",
        "Colbún",
        "Constitución",
        "Curepto",
        "Curicó",
        "Empedrado",
        "Hualañé",
        "Licantén",
        "Linares",
        "Longaví",
        "Maule",
        "Molina",
        "Parral",
        "Pelarco",
        "Pelluhue",
        "Pencahue",
        "Rauco",
        "Retiro",
        "Romeral",
        "Río Claro",
        "Sagrada Familia",
        "San Clemente",
        "San Javier de Loncomilla",
        "San Rafael",
        "Talca",
        "Teno",
        "Vichuquén",
        "Villa Alegre",
        "Yerbas Buenas"
      ]
    },
    {
      "name": "Ñuble",
      "number": "XVI",
      "communes": [
        "Bulnes",
        "Chillán Viejo",
        "Chillán",
        "Cobquecura",
        "Coelemu",
        "Coihueco",
        "El Carmen",
        "Ninhue",
        "Ñiquén",
        "Pemuco",
        "Pinto",
        "Portezuelo",
        "Quillón",
        "Quirihue",
        "Ránquil",
        "San Carlos",
        "San Fabián",
        "San Ignacio",
        "San Nicolás",
        "Treguaco",
        "Yungay"
      ]
    },
    {
      "name": "Biobío",
      "number": "VIII",
      "communes": [
        "Alto Biobío",
        "Antuco",
        "Arauco",
        "Cabrero",
        "Cañete",
        "Chiguayante",
        "Concepción",
        "Contulmo",
        "Coronel",
        "Curanilahue",
        "Florida",
        "Hualpén",
        "Hualqui",
        "Laja",
        "Lebu",
        "Los Álamos",
        "Los Ángeles",
        "Lota",
        "Mulchén",
        "Nacimiento",
        "Negrete",
        "Penco",
        "Quilaco",
        "Quilleco",
        "San Pedro de la Paz",
        "San Rosendo",
        "Santa Bárbara",
        "Santa Juana",
        "Talcahuano",
        "Tirúa",
        "Tomé",
        "Tucapel",
        "Yumbel"
      ]
    },
    {
      "name": "Araucanía",
      "number": "IX",
      "communes": [
        "Angol",
        "Carahue",
        "Cholchol",
        "Collipulli",
        "Cunco",
        "Curacautín",
        "Curarrehue",
        "Ercilla",
        "Freire",
        "Galvarino",
        "Gorbea",
        "Lautaro",
        "Loncoche",
        "Lonquimay",
        "Los Sauces",
        "Lumaco",
        "Melipeuco",
        "Nueva Imperial",
        "Padre las Casas",
        "Perquenco",
        "Pitrufquén",
        "Pucón",
        "Purén",
        "Renaico",
        "Saavedra",
        "Temuco",
        "Teodoro Schmidt",
        "Toltén",
        "Traiguén",
        "Victoria",
        "Vilcún",
        "Villarrica"
      ]
    },
    {
      "name": "Los Ríos",
      "number": "XIV",
      "communes": [
        "Corral",
        "Futrono",
        "La Unión",
        "Lago Ranco",
        "Lanco",
        "Los Lagos",
        "Mariquina",
        "Máfil",
        "Paillaco",
        "Panguipulli",
        "Río Bueno",
        "Valdivia"
      ]
    },
    {
      "name": "Los Lagos",
      "number": "X",
      "communes": [
        "Ancud",
        "Calbuco",
        "Castro",
        "Chaitén",
        "Chonchi",
        "Cochamó",
        "Curaco de Vélez",
        "Dalcahue",
        "Fresia",
        "Frutillar",
        "Futaleufú",
        "Hualaihué",
        "Llanquihue",
        "Los Muermos",
        "Maullín",
        "Osorno",
        "Palena",
        "Puerto Montt",
        "Puerto Octay",
        "Puerto Varas",
        "Puqueldón",
        "Purranque",
        "Puyehue",
        "Queilén",
        "Quellón",
        "Quemchi",
        "Quinchao",
        "Río Negro",
        "San Juan de la Costa",
        "San Pablo"
      ]
    },
    {
      "name": "Aisén del Gral. Carlos Ibáñez del Campo",
      "number": "XI",
      "communes": [
        "Aisén",
        "Chile Chico",
        "Cisnes",
        "Cochrane",
        "Coihaique",
        "Guaitecas",
        "Lago Verde",
        "O’Higgins",
        "Río Ibáñez",
        "Tortel"
      ]
    },
    {
      "name": "Magallanes y de la Antártica Chilena",
      "number": "XII",
      "communes": [
        "Antártica",
        "Cabo de Hornos (Ex Navarino)",
        "Laguna Blanca",
        "Natales",
        "Porvenir",
        "Primavera",
        "Punta Arenas",
        "Río Verde",
        "San Gregorio",
        "Timaukel",
        "Torres del Paine"
      ]
    }
  ];

  public communes: string[];
  public selectedRegion: string;

  constructor() {
    this.pos = 'step2',
    this.widthBar = '0%',
    this.activeStore = false,
    this.activeDelivery = false,
    this.communes = [],
    this.selectedRegion = ''
  }

  public changeActiveDelivery(){
    if (this.activeDelivery == false && this.activeStore == false)
      this.activeDelivery = true;
    else{
      if (this.activeDelivery == false){
        this.activeDelivery = true;
        this.activeStore = false;
      }
    }
  }

  public changeActiveStore(){
    if (this.activeDelivery == false && this.activeStore == false)
      this.activeStore = true;
    else{
      if (this.activeStore == false){
        this.activeStore = true;
        this.activeDelivery = false;
      }
    }
  }

  public changePos(newPos:string){
    this.pos = newPos;
    if (this.pos === 'step1')
      this.widthBar = '0%';
    if (this.pos === 'step2')
      this.widthBar = '50%';
    if (this.pos === 'step3')
      this.widthBar = '100%';
  }

  public selectRegion(){
    for (let region of this.regionsAndCommunes){
      if (this.selectedRegion === region.number){
        this.communes = region.communes;
      }
    }
  }

  ngOnInit(): void {
  }
}
