// Nome do aluno - nota 1 - nota 2 - media - Aprovado/Reprovado

//Criando variáveis
var Nomes = ["Igor ", " José ", " Mariana ", " Jorje ", " Felipe "]
var NotasA = [8, 5, 8, 6, 9]
var NotasB = [9, 6, 9.5, 4, 9.5]

var resposta = prompt("0 = Todos os estudantes    1 = Estudante específico")
var TodosAlunos = 0

//Dando opção de todos os alunos ou sómente um específico
switch(resposta){

    //Mostrando todos os alunos e suas notas
    case "0":
        while(TodosAlunos < Nomes.length){
            Info(TodosAlunos)
            TodosAlunos++
        }
    break

        //Mostando apenas 1 aluno
    case "1":
        //Mostrando as opções dos alunos
        alert(Nomes + "\n" + "0  = " + Nomes[0] + "    até    " + (Nomes.length - 1) + " = " + Nomes[Nomes.length - 1])

        var numero = prompt("Insira seu número")

        Info(numero)

    break

    default:
}

//Criando a função que imprime as informações do aluno
function Info(i){

    var media = (NotasA[i] + NotasB[i]) / 2
    
    var estado
    if(media >= 7){
        estado = "Aprovado"}
    else{
    estado = "Reprovado"}

    console.log(Nomes[i] + "  //  " + NotasA[i] + "  //  " + NotasB[i] + "  //  " + media + "  //  " + estado)
}