function exercicio1() {
    const numero = Number(prompt("Digite um número:"))
    const outroNumero = Number(prompt("Digite outro número:"))
 
    alert(numero+outroNumero)
}
    const buttonExercicio1 = document.getElementById("exercício1")
    buttonExercicio1.addEventListener('click' , () => {exercicio1()})
//exercicio2
 
    function exercicio2() {
    const valorhora = Number(prompt("Digite quanto você ganha por hora:"))
    const horastrabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas no mês:"))
    const resultado = valorhora*horastrabalhadas
    alert("Seu salário é:" + resultado)
}
const buttonExercicio2 = document.getElementById("exercício2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })
 
//exercicio3
function exercicio3() {
    const media1 = Number(prompt("Digite o peso da pessoa 1:"))
    const media2 = Number(prompt("Digite o peso da pessoa 2:"))
    const media3 = Number(prompt("Digite o peso da pessoa 3:"))
    const media4 = Number(prompt("Digite o peso da pessoa 4:"))
    const media5 = Number(prompt("Digite o peso da pessoa 5:"))
    const media = ((media1+media2+media3+media4+media5)/5)
    alert("A média dos pesos informados é:"+media)
}
const buttonExercicio3 = document.getElementById("exercício3")
buttonExercicio3.addEventListener('click', () => {exercicio3()})
 
//exercicio4
function exercicio4() {
const celsius = Number(prompt("Digite a temperatura em graus celsius:"))
const Fahrenheit = (((9*celsius) + 160) / 5)
alert(" A temperatura em fahrenheit é: "+ Fahrenheit)
 }
 const buttonExercicio4 = document.getElementById("exercício4")
 buttonExercicio4.addEventListener('click', () => {exercicio4() })
 
 //exercicio5
 function exercicio5 () {
const milhas = Number(prompt("Digite a distância em milhas: "))
const quilometros = (milhas*1.60934)
 alert("As milhas em km é:"+ quilometros)
 }
 const buttonExercicio5 = document.getElementById("exercício5")
 buttonExercicio5.addEventListener('click', () => {exercicio5() })
 
 //exercicio6
 function exercicio6(){
const duracao = Number(prompt("Digite a duração do evento em segundos:"))
const horas = duracao/3600
alert("A duração em horas é:"+horas)
 }
 const buttonExercicio6 = document.getElementById("exercício6")
 buttonExercicio6.addEventListener('click', () => {exercicio6()})
 
 //exercicio7
 function exercicio7() {
const distancia = Number(prompt("Digite a distância em quilometros:"))
const metros = distancia*1000
const centimetros = metros*100
alert("A distância em metros é:"+ metros + "\n A distância em centímetros é:" + centimetros)
 }
 const buttonExercicio7 = document.getElementById("exercício7")
 buttonExercicio7.addEventListener('click', () => {exercicio7 ()})
 
 //exercicio8
 function exercicio8() {
    const numero = Number(prompt("Digite o numero inteiro"))
alert(`
    0 x ${numero} = ${numero*0}
    1 x ${numero} = ${numero*1}
    2 x ${numero} = ${numero*2}
    3 x ${numero} = ${numero*3}
    4 x ${numero} = ${numero*4}
    5 x ${numero} = ${numero*5}
    6 x ${numero} = ${numero*6}
    7 x ${numero} = ${numero*7}
    8 x ${numero} = ${numero*8}
    9 x ${numero} = ${numero*9}
    10 x ${numero} = ${numero*10}
    `)
 }
 const buttonExercicio8 = document.getElementById("exercício8")
 buttonExercicio8.addEventListener('click', () => {exercicio8 ()})
 