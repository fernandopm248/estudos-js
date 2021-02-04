//function sum(number1,number2){
  //  return number1 + number2
//}
//console.log(sum(2, 8))

/*const sum = (number1,number2) =>                      //2 sem retorno mais retorna

     number1 + number2;


console.log(sum(2, 8))*/

/*const community = () =>       // 3 sem parametro
 'rony';

console.log(community())*/  // 4 1 parametro
/*const double = number =>  number * 2;

console.log(double(20))*/

/*/const sum= (num1,num2) =>  num1 + num2 //5 2 ou mais parametro/6 com chaves
console.log(sum(20,23));*/
/*const sum = (year)=> {
if (year>=18){
  return 'dmaior,'
} {
  return 'dmenor'
}



}
console.log(sum(18))*/ // 7 retornando json sem retorno
/*function init() {
const getPerson = () => (
  {name: "henri", eye: "BLUE"});
console.log(getPerson());
}

init();*/ //esse init serve pra nao vazar o escopo e permitir vars de mesmo nome em pags diferentes

/*(function () { // 8 iffe
  const getPerson = () => (
    {name: "henri", eye: "BLUE"});
  console.log(getPerson());
  })() // init sem o init tecnica iife que n permite quea func seja reloadada*/
  ( () => {                       // 9 this é simples
function person () {
  
this.year = 0 ;
  setInterval(() => {
      this.year = this.year+1
    console.log('qual this?', this)
    console.log('qual idade?', this.year)

  }, 1000)
}
const p1 = new person()

  })()
  