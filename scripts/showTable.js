function CreateTableFromJSON() {
   
    
    var carrera = data[0]["carreras"];
    var semestre = carrera["semestre"];
    var table = document.createElement("table");


    var tr = table.insertRow(-1);                   // TABLE ROW.
    var th = document.createElement("th");
    th.innerHTML = "Hora";
    tr.appendChild(th);
    for (var i = 0; i < 6; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        
        th.innerHTML = diasSemana[i];
        th.className = "text-center";
        tr.appendChild(th);
    }
    

    for (var i = 0; i < 10; i++) {
        tr = table.insertRow(-1);
        th=document.createElement("th");
        th.innerHTML = horas[i];
        tr.appendChild(th);
        for (var j = 0; j < 6; j++) {
            var td= document.createElement("td");
            td.className = "text-center";
            tr.appendChild(td);
            td.id = ("celda" + (j + (i * 10)));
        }
    }
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < semestre.length; i++) {

        var materia = semestre[i]["materia"];
        for (var j = 0; j < materia.length; j++) {

            var grupos = materia[j]["grupo"];

            for (var h = 0; h < grupos.length; h++) {

                var horarios = grupos[h]["horario"];
                if (grupos[h]["seleccionado"] == true) {
                    
                    for (var k = 0; k < horarios.length; k++) {
                        var horaActual = horarios[k].toString();
                       
                        doc_id = calcularCelda(horaActual);

                        
                        document.getElementById("celda" + doc_id).innerHTML = materia[j]["nombre"]+"-"+horaActual.split("(").pop().split(")")[0];
                        document.getElementById("celda" + doc_id).style.backgroundColor="#66ff66";
                    }
                }
            }

        }
    }
}

function calcularCelda(hora) {
    var id = 0;
    var dia = hora.substr(0, 2);
    var periodo = hora.substr(3, 3);

    if (dia == "LU") {
        id = 0;
    }
    if (dia == "MA") {
        id = 1;
    }
    if (dia == "MI") {
        id = 2;
    }
    if (dia == "JU") {
        id = 3;
    }
    if (dia == "VI") {
        id = 4;
    }
    if (dia == "SA") {
        id = 5;
    }


    if (periodo == "815") {
        id += 10;
    }
    if (periodo == "945") {
        id += 20;
    }
    if (periodo == "111") {
        id += 30;
    }
    if (periodo == "124") {
        id += 40;
    }
    if (periodo == "141") {
        id += 50;
    }
    if (periodo == "154") {
        id += 60;
    }
    if (periodo == "171") {
        id += 70;
    }
    if (periodo == "184") {
        id += 80;
    }
    if (periodo == "201") {
        id += 90;
    }

    return id.toString();
}


var data=[
    {
        "carreras": {
            "nombre": "informatica",
            "semestre": [
                {
                    "id_semestre": "5",
                    "materia":
                    [
                        {
                            "nombre": "Introduccion a la Programación",
                            "grupo":
                            [
                                {
                                    "id_grupo": 2,
                                    "docente": "Leticia Blanco",
                                    "numero": 2,
                                    "horario": [
                                        "MA 1715-1845(617)",
                                        "MI 1715-1845(691B)",
                                        "JU 1545-1715(624)"
                                    ],
                                    "seleccionado": false
                                },
                                {

                                    "id_grupo": 4,
                                    "docente": "Vladimir Costas",
                                    "numero": 4,
                                    "horario": [
                                        "MA 945-1115(692D)",
                                        "MI 945-1115(INFLAB)",
                                        "JU 1415-1545(691B)"
                                    ],
                                    "seleccionado": true
                                },
                                {
                                    "id_grupo": 6,
                                    "docente": "Carla Salazar",
                                    "numero": 6,
                                    "horario": [
                                        "MI 945-1115(612)",
                                        "JU 945-1115(617C)",
                                        "SA 815-945(691C)"
                                    ],
                                    "seleccionado": false
                                }
                            ]

                        },
                        {
                            "nombre": "Redes de Computadoras",
                            "grupo": [
                                {
                                    "id_grupo": 2,
                                    "docente": "Jorge Orellana",
                                    "numero": 2,
                                    "horario": [
                                        "LU 945-1115(691B)",
                                        "MA 945-1115(693A)",
                                        "VI 815-945(692B)"
                                    ],
                                    "seleccionado": true
                                }

                            ]
                        },
                        {
                            "nombre": "Taller de Base de Datos",
                            "grupo": [
                                {

                                    "id_grupo": 3,
                                    "docente": "Marcelo Flores",
                                    "numero": 3,
                                    "horario": [
                                        "LU 645-815(690B",
                                        "JU 645-815(690B)"
                                    ],
                                    "seleccionado": true
                                }

                            ]
                        }
                    ]
                }
            ]
        }
    }
]

var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var horas = ["6:45-8:15", "8:15-9:45", "9:45-11:15", "11:15-12:45", "12:45-14:15", "14:15-15:45", "15:45-17:15"
, "17:15-18:45", "18:45-20:15", "20:15-21:45"];