//alert('Boas vindas ao jogo do número secreto');
//let numeroSecreto = 5;
//let chute = prompt('Escolha um número entre 1 e 10');

//if (chute == numeroSecreto) {
    //console.log('Isso ai! Você descobriu o número secreto (5)');
//}

//01: Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt('Qual o dia da semana?');

if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo'){
    alert ('Bom fim de semana!');
}
else{
    alert ('Boa semana!');
}

//02: Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let valor = prompt('Digite um número.');

if (valor < 0){
    alert ('Valor negativo')
}
else{
    alert ('Valor Positivo')
}

//03: Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let valor = prompt('Digite a Pontuação.');

if (valor >= 100){
   alert('Parabéns, você venceu!');
}
else{
    alert('Tente novamente para ganhar.')
}

//04: Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let valor = 350;

alert(`Seu saldo é ${valor} Reais`)

//05: Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Insira eu nome.');

alert(`Que bom ter você aqui, ${nome}`);