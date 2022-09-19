let pessoas = ["Batman", "Coringa", "Pinguim","charada","Espantalho"]

function sortear(){

    let np = pessoas.length

    let ns = Math.floor(Math.random() * np)

    let h1 = document.getElementById("D")

    console.log(ns)

    h1.innerHTML = pessoas[ns]
}
