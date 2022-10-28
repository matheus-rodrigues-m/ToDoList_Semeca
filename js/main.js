// 1- Seleção de todos os elementos que vamos trabalhar aqui. No caso, definindo-os como variável

// Formulário de Adicionar Tarefa
const todoForm = document.querySelector("#todo-form");
// Campo de texto / título da tarefa
const todoInput = document.querySelector("#todo-input");
// Lista de tarefas onde as tarefas são incluídas
const todoList = document.querySelector("#todoList");
// Formulário de Edição de tarefa
const editForm = document.querySelector("#edit-form");
// Campo de texto / título da tarefa a ser editada
const editInput = document.querySelector("#todo-form");




// Funções / funcionalidades do projeto

// 3- Função saveTask esperando um Text
const saveTask = (text) => {
    // Agora iremos criar a estrutura da "fichinha" de todo, mas de forma programática aqui no JS

    const todo = document.createElement("div"); // Criação da Div que é a "ficha" que contém nome da tarefa e botões
    todo.classList.add("todo"); // Adicionando classe na div que engloba o texto e botões do todo

    const toDoTitle = document.createElement("h3"); // Criando elemento de título h3 na tarefa
    toDoTitle.innerHTML = text; // O Texto do título será o texto passado para esta função, que vem do submit do formulário 
    todo.appendChild(toDoTitle); // Colocando este elemento h3 criado, dentro da div todo, como uma "child"

    //console.log(todo); // Mostrando no console que a div com o h3 está sendo criada
    // ----> Aqui podemos testar

    // Criando os botões dentro da "ficha" da tarefa

    
    const doneTask = document.createElement("button"); // Botão de tarefa concluída
    doneTask.classList.add("finishToDo");
    doneTask.innerHTML = '<i class="fa-solid fa-check"></i>'; // Colocando o ícone no botão
    todo.appendChild(doneTask); // Inserindo o botão de tarefa concluída dentro da ficha da task, como um child
    

    const deleteTask = document.createElement("button"); // Botão de remover tarega
    deleteTask.classList.add("removeToDo");
    deleteTask.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Colocando o ícone no botão
    todo.appendChild(deleteTask); // Inserindo o botão de remoção de rarefa dentro da ficha da task, como um child



    // Agora vamos colocar essa task, esta "todo", dentro da lista geral, que é a "todoList"
    todoList.appendChild(todo);
    // ----> Aqui podemos testar


    todoInput.value = ""; // Limpa o campo após o submit
    todoInput.focus(); // Deixa o campo em foco após a submit
    // ----> Aqui podemos testar
}


// Eventos


// 2- Adicionando um evento ao formulário, que irá "ouvir" o submit, sendo uma função anônima
todoForm.addEventListener("submit", (e) => {

    e.preventDefault(); // Faz com que o formulário seja enviado e que não haja carregamento da página com isso.

    console.log("Formulário Enviado"); // Mostra no console que o form foi enviado

    const inputValue = todoInput.value; // a variável inputValue irá conter o valor passado no input do formulário

    // ----> Aqui podemos testar

    // Validação: Garantir que o usuário não criará tarefa sem título
    if (inputValue) {
        //console.log(inputValue)
        // ----> Aqui podemos testar

        // Criando função de salvar esta tarefa, pois será importante ter ela salva depois
        saveTask(inputValue)
    }
})


// 4- Agora precisamos identificar os cliques no documento para sabermos quando e quais botões serão clicados

document.addEventListener("click", (e) => {

    const targetElement = e.target; // Pegando o elemnto e que foi clicado no documento
    const parentElement = targetElement.closest("div"); // Aqui estamos pegando o elemento de div mais próximo do elmento que foi clicado
    // No caso, estamos pegando o elemento de div pai do clicado, que é o div mais próximo

    if (targetElement.classList.contains("finishToDo")) { // Verificando se o elemento clicado contém a classe finishToDo,
                                                          //que é o de concluir a tarefa 
        // console.log("Finalizadaa!")
        // ----> Aqui podemos testar

        parentElement.classList.toggle("done"); // Adicionando / tirando classe de "done" à tarefa que recebeu o clique, para que
        // ela fique com o estilo CSS de tarefa finalizada   
    }
     // ----> Aqui podemos testar


    if (targetElement.classList.contains("removeToDo")) { // Verificando se o elemento clicado contém a classe removeToDo
        parentElement.remove(); // Remove o elemento pai do documento, no caso, o pai do botão clicado, é a ficha de tarefa
    }
     // ----> Aqui podemos testar

})