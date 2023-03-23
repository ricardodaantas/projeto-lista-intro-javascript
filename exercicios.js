// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const largura = prompt(Number("qual a largura do retangulo"))
const altura = prompt(Number("qual a altura do retangulo"));
const area = altura*largura
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoatual = prompt("em que ano estamos")
const anonascimento = prompt("em que ano você nasceu")
const idade = anoatual-anonascimento
console.log (idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso/(altura*altura)
return imc 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("digite seu nome")
  const idade = prompt ("qual a sua idade")
  const email = prompt("qual o seu email")
return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiracor = prompt("qual a sua primeira cor favorita")
  const segundacor = prompt("qual a sua segunda cor favorita")
  const terceiracor = prompt("qual a sua terceira cor favorita")
  const ascoresfavoritas = [primeiracor, segundacor, terceiracor]
  console.log(ascoresfavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const retornastringmaiuscula = string.toUpperCase()
  return retornastringmaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const teatro = custo/ valorIngresso
  return teatro   

}
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length===string2.length 

}
checaStringsMesmoTamanho(goiaba, abacaxi)

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]
}
retornaPrimeiroElemento()

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array [array.length-1]
}
retornaUltimoElemento()

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const trocaprimeiro = array [0]
const trocaultimo = array [array.length-1]
array [0] = trocaultimo 
array [array.length-1] = trocaprimeiro
return array 
}
trocaPrimeiroEUltimo()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase ()=== string2.toLowerCase()
}
checaIgualdadeDesconsiderandoCase()

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt ( 'Digite o ano atual: '));
  const anoNasc = Number(prompt('Digite o ano em que você nasceu '));
  const anoRg = Number(prompt ('Digite ano de emissão do RG: '));

  const idade = anoAtual - anoNasc;
  const idadeRg = anoAtual - anoRg;
  const renovaAte20Anos = (idade <= 20) && (idadeRg >= 5);
  const renovaAte50Anos = (idade > 20) && (idade <= 50) && (idadeRg >= 10);
  const renovaAcima50Anos = (idade >50) && (idadeRg >= 15);
  console.log(renovaAte20Anos || renovaAte50Anos || renovaAcima50Anos);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0);
}
checaAnoBissexto()

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const validade = prompt ("maior 18 anos")
const validade2 = prompt ("tem ensino medio")
const validade3 = prompt ("tem disponibilidade de horarios")
if(validade==="sim" && validade2==="sim" && validade3==="sim"){
console.log (true)
} else {
  console.log(false)
}
}