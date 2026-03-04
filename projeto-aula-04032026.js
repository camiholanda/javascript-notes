/*function maioridade(){
    //Solicitar ano nascimento do usuário
    let anonasc = parseInt(prompt('Digite ano de seu nascimento:'))

    //Pegar ano atual
    //const = constante -> quando valor é imutável
    //variável -> quando sabe que o valor poderá ser alterado
    const anoAtual = new Date().getFullYear()
    const idade = anoAtual - anonasc
       
    //Validações com operadores relacionais
    //modo simples por algoritmo por *eliminação* com uma condição

    if (idade >= 18 && idade <= 65) {
        alert('Sofredor');
    } else if (idade < 18) {
        alert('Iniciante');
    } else {
        alert('Sobrevivente');
    }
} */



//Operador Ternário 

/* O operador ternário é uma forma curta de escrever um `if...else` em uma única linha:
`condição ? valorSeVerdadeiro : valorSeFalso`.
    Exemplo:
        ```js
        let idade = 18;
        let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
        ```
//Retorno exibido pelo alert dependendo da condição inside

 */
alert ( idade > 18? 'Iniciante' : 'Outra coisa')


