var NumeroDecimal , NumeroConvertido = ""
var BaseX = "1100100010110100"
var ArrayBaseX
var Potencia = 0
var PotenciasIndividuais = 0
var SomatorioPotencias = 0
var VerificarNumero
var NumeroFornecido = document.getElementById('Base')
var Resultado = document.getElementById('Resultado')

function Base10ParaX(){

    NumeroDecimal = parseInt(NumeroFornecido.value)
    NumeroConvertido = ""
    
    let select1 = document.querySelector('#Base2')
    let X = parseInt(select1.options[select1.selectedIndex].value)

    while(NumeroDecimal > 0 || NumeroDecimal == 1){
    
        VerificarNumero = parseInt(NumeroDecimal % X )
        switch(VerificarNumero){
            case 10:
                VerificarNumero = 'A'
            break
            case 11:
                VerificarNumero = 'B'
            break
            case 12:
                VerificarNumero = 'C'
            break
            case 13:
                VerificarNumero = 'D'
            break
            case 14:
                VerificarNumero = 'E'
            break
            case 15:
                VerificarNumero = 'F'
            break
        }
        NumeroConvertido =  "" + VerificarNumero + NumeroConvertido
        NumeroDecimal = parseInt(NumeroDecimal / X)
    }
    Resultado.innerText = NumeroConvertido
}


function BaseXPara10(){
    Potencia = 0
    SomatorioPotencias = 0

    BaseX = NumeroFornecido.value
    ArrayBaseX = BaseX.split('')

    let select1 = document.querySelector('#Base1')
    let X = parseInt(select1.options[select1.selectedIndex].value)
   
    
    for (var i = ArrayBaseX.length - 1; i >= 0; i--) {
 
        VerificarNumero = parseInt(ArrayBaseX[i])

        switch(ArrayBaseX[i]){
            case 'A':
                VerificarNumero = 10
            break
            case 'B':
                VerificarNumero = 11
            break
            case 'C':
                VerificarNumero = 12
            break
            case 'D':
                VerificarNumero = 13
            break
            case 'E':
                VerificarNumero = 14
            break
            case 'F':
                VerificarNumero = 15
            break
        }

        PotenciasIndividuais = VerificarNumero * Math.pow(X, Potencia)
        Potencia++
        SomatorioPotencias += PotenciasIndividuais
    }
    Resultado.innerText = SomatorioPotencias
}


