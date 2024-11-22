"use strict";
var DiaSemana;
(function (DiaSemana) {
    DiaSemana["DOMINGO"] = "domingo";
    DiaSemana["SEGUNDA"] = "segunda";
    DiaSemana["TERCA"] = "terca";
    DiaSemana["QUARTA"] = "quarta";
    DiaSemana["QUINTA"] = "quinta";
    DiaSemana["SEXTA"] = "sexta";
    DiaSemana["SABADO"] = "sabado";
})(DiaSemana || (DiaSemana = {}));
console.log(DiaSemana.SEXTA);
let dia;
dia = DiaSemana.QUINTA;
//dia = 'sexta'
console.log(dia);
