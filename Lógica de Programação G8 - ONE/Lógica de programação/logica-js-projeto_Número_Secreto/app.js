let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

alert("Boas vindas ao jogo do Numero Secreto!!")
console.log(numeroSecreto)
while (chute != numeroSecreto){
    let chute = prompt('Escolha um numero entre 1 e 100');
    
    if (chute == numeroSecreto){
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O numero ${chute} é maior do que o Numero secreto`);
        } else {
            alert(`O numero ${chute} é Menor do que o Numero secreto`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
