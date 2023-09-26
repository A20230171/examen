var nombre = prompt("Cuestionario sobre el Turismo en el Perú. Escribe tu nombre:");
var c = 0


var p1 = propmt("1. ¿En qué departamento se encuentra el lago Titicaca?\nA. Tacna\nB. Puno\nC. Cusco ");

if(p1 =="B"){
    c =c + 1 ;
}else if(p1 =="A"){
    i = i + 1;
}else if(p1 =="C"){
    i = i + 1;
}else{
    alert("NO es una opcon valida");
}

var p2 = propmt("2. ¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA. Lima e Ica\nB. Arequiupa y Tacna\nC. Piura y Tumbes ");

if(p2 =="C"){
    c =c + 1 ;
}else if(p1 =="A"){
    i = i + 1;
}else if(p1 =="B"){
    i = i + 1;
}else{
    alert("NO es una opcon valida");
}

var p3 = propmt("3. Plato típico de la Selva peruana\nA. Tacacho con cecina\nB. Arroz con pollo\nC. Lomo saltado ");

if(p3 =="A"){
    c =c + 1 ;
}else if(p1 =="B"){
    i = i + 1;
}else if(p1 =="C"){
    i = i + 1;
}else{
    alert("NO es una opcon valida");
}

if(c<i){
    document.write("bien");
}else{
    document.write("mal")
}