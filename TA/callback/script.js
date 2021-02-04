/*const $button = document.querySelector('button')

const handleClick = () => {
    console.log('botao foi clicado')}

$button.addEventListener("click", handleClick)*/ // eventlistener é tipo um um pavil quando o click acontece ele desencadeia os comandos

function newButton (text, callback){

    const $body = document.querySelector("body");
    const $button = document.createElement("button");
    $button.textContent = text ;

callback($button);

    $body.insertAdjacentElement("beforeend", $button)


    return $button;
}
  newButton('login', (button) => {
button.style.cssText = `
font-size: 100px;
`
button.addEventListener("click",()=>{
    alert("oi")
})
  });
 newButton('signup', (bagulho) =>{
    bagulho.style.cssText = `
font-size: 60px;
color:red;
`
 });



