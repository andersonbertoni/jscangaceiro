// client/app/app.js

//criou a instância do controller
let controller = new NegociacaoController();

//associa o evento de submissão do formulário à chamada do método "adiciona"
document
    .querySelector(".form")
    //bind aqui!
    .addEventListener("submit", controller.adiciona.bind(controller));