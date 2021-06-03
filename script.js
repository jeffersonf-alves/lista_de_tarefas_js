let input = document.querySelector('input[name=tarefa]');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');

let tarefas = JSON.parse(localStorage.getItem(tarefas))
function renderizarTarefas() {
    lista.innerHTML = '';
    for(tarefa of tarefas) {
        let itemLista = document.createElement('li');

        itemLista.setAttribute('class','list-group-item list-group-item-action');

        itemLista.onclick = function() {
            removerTarefa(this);
        }

        let itemTexto = document.createTextNode(tarefa);

        itemLista.appendChild(itemTexto);

        lista.appendChild(itemLista);
    }
}
renderizarTarefas();

btn.onclick = function() {
    let novaTarefa = input.value;
    if(novaTarefa !== "") {
        tarefas.push(novaTarefa);
        renderizarTarefas();
        input.value = '';
        removerSpan();
        SalvarDadosNoStorage();
    } else {
        let card = document.querySelector('.card');
        let span = document.createElement('span');

        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa inserir uma tarefa');
        
        span.appendChild(msg)
        card.appendChild(span);
    }
    
}

function removerSpan() {
    let span = document.querySelectorAll('span');
    let card = document.querySelector('.card');

    for(let i = 0;i <= span.length; i++) {
        card.removeChild(span[i]);
    }
}
function removerTarefa(tar) {
    // console.log(tarefas.indexOf(tar.textContent));
    tarefas.splice(tarefas.indexOf(tar.textContent),1);
    renderizarTarefas();
    SalvarDadosNoStorage();
}

function SalvarDadosNoStorage() {

    localStorage.setItem('tarefas', JSON.stringify(tarefas));


}
