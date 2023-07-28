const frm = document.querySelector("form")
const data = document.getElementById("DtAtual")


function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        aa: date.getFullYear().toString().slice(-2),
        aaaa: date.getFullYear()
    }

    return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
}
data.innerText = formatDate(new Date(), 'dd/mm/aa')


let List = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const tarefa = frm.inLista.value



    if (tarefa != "") {

        LimparLista()
        List.push(tarefa)
        PopularLista()
    }

    frm.inLista.value = ""
    frm.inLista.focus()
})

function ExcluirItem(botao) {

    const parentElement = botao.parentElement;
    console.log(parentElement)
    const valorItem = parentElement.textContent;
    console.log(valorItem)

    const index = List.indexOf(valorItem);
    console.log(index)
    
    List.splice(index, 1);
    parentElement.remove();

    LimparLista()
    PopularLista()
}

function LimparLista() {
    const tarefas = document.getElementById("tarefas")
    tarefas.innerHTML = ""
}

function PopularLista() {
    for (let i = 0; i < List.length; i++) {

        const li = document.createElement("li")
        const textnode = document.createTextNode(List[i])
        li.appendChild(textnode)
        document.getElementById("tarefas").appendChild(li)

        if (i % 2 == 0) {
            li.className = "par"
        } else {
            li.className = ("impar")
        }
        const bt = document.createElement("input")
        bt.setAttribute("type", "button")
        bt.setAttribute("value", "🗑️")
        bt.onclick = () => {
            ExcluirItem(bt)
        }
        bt.className = "excluir"
        li.appendChild(bt)

    }
}