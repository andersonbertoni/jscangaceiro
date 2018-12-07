// client/app/controllers/NegociacaoController.js

class NegociacaoController {
    constructor() {
        //a ideia é que $ seja o querySelector
        //realizando o bind, $ mantém document como seu contexto this
        let $ = document.querySelector.bind(document);

        //buscando os elementos
        //usaremos o prefixo _ (a convenção para propriedades privadas)
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        //cancelando a submissão do formulário
        event.preventDefault(); 

        //lembre-se de que arrays começam com índice 0, 
        //logo, 1 é o segundo elemento!
        let data = new Date(...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2 ));

        //precisamos acessar as propriedades através de this
        let negociacao = new Negociacao(        
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao);
    }
}