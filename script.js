let input = document.querySelector('input[name=tarefa]');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');

let tarefas = [
    'jogar GTA5',
    'Estudar python',
    'Estudar Javascript',
    'Ver um filme',
    'Ler um livro'
];
function renderizarTarefas() {
    lista.innerHTML = '';
    for(tarefa of tarefas) {
        let itemLista = document.createElement('li');

        itemLista.setAttribute('class','list-group-item list-group-item-action');

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