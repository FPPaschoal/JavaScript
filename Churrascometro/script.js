

 var pessoa
 var carne
 var cerveja
 var refrigerante
 var crianca
 var hora
 var totalCarne
 var totalCerveja
 var totalRefrigerante


  pessoa = document.getElementById("Adultos")
  crianca = document.getElementById("Criancas")
  hora = document.getElementById("Horas")

  var resp = document.getElementById("resposta")
  

 function calcular() {
    

 if(hora.value >= 6){

    carne = 650
    cerveja = 2000
    refrigerante = 1500
 }else{

    carne = 400
    cerveja = 1200
    refrigerante = 1000
 }

 totalCarne = ((pessoa.value * carne) + ((crianca.value * carne) / 2)) / 1000
 totalCerveja = (pessoa.value * cerveja) / 355
 totalRefrigerante = ((pessoa.value * refrigerante) + ((crianca.value * refrigerante) / 2)) / 1000


 document.getElementById("carne").innerHTML = Math.ceil(totalCarne)
 document.getElementById("cerveja").innerHTML = Math.ceil(totalCerveja)
 document.getElementById("refrigerante").innerHTML = totalRefrigerante

 resp.style.display = "inline-block"
 
}




