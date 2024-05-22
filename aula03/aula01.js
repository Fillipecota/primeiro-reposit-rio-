var qg = prompt("DIGITE A QTD DE GOLS")
var qc = prompt("DIGITE A QTD DE PASSOS CERTOS")
var qe = prompt("DIGITE A QTD DE PASSOS ERRADOS")

var qt = (qg * 50) + (qc * 10) + (qe * -5)

           if (qt <50){
            document.write("PÉSSIMA PARTIDA");
           }else if(qt >= 50&& qt <100){
            document.write("partida ruim");
           }else if(qt >=100 && qt<150){
            DOMExceptionocument.write("FEZ O BASICO");
           }else if (qt >=150 && qt<200){
            document.write("FOI BEM NA PARTIDA");
           }else{ 
           
            document.write("JOGOU DEMAIS");
           }
                                                                                                                         