function criarCartao(categoria, pergunta, resposta) {
    /*console.log(categoria,pergunta,resposta) -> imprime no navegador as inf*/
    /*criar uam variavel 'let'*/
    let container = document.getElementById('container')
    

    let card = document.createElement('article')
    card.className = 'card'
    card.innerHTML = ` <div class="card_content">
                    <h3>${categoria}</h3>
                    <div class="card_content_question">
                    <p>${pergunta}</p>
                    </div>                     
                    <div class="card_content_answer">
                    <p>${resposta}</p>
                    </div>                    
                </div>`

    card.addEventListener('click', virarCard)

    let respIsView = false
    function virarCard() {
        
        respIsView = !respIsView
        card.classList.toggle('active', respIsView)
    }

    container.appendChild(card)



}










/*Os tipos de variáveis em JavaScript são:
var: Uma palavra-chave comum em outras linguagens  
let: Uma palavra-chave criada nas versões modernas do JavaScript para corrigir problemas do var 
const: Uma palavra-chave que pode ser utilizada para declarar variáveis 
 
Os tipos de dados em JavaScript são:
String, Number, Boolean, Object, Array, Null, Undefined. 
 
No JavaScript, não é necessário declarar o tipo de dado da variável. 
Por exemplo, a linguagem reconhece uma variável em texto como um String. 
 
Para declarar variáveis no JavaScript, é preciso seguir algumas regras:
O nome da variável deve começar com uma letra, underline ( _ ), ou cifrão ( $ ) 
 
Os caracteres subsequentes podem ser números (0-9) 
 
A linguagem é case-sensitive, ou seja, letras maiúsculas e minúsculas são diferentes 
 
Não é possível declarar variáveis com palavras reservadas, como let, var, while, for, etc. 
*/