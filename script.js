const valor = document.querySelector("#valor");
const pagamento = document.querySelector("#pagamento");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#calcular");

botao.addEventListener("click", function(){
    let preco = Number(valor.value);
    let total = 0;

if(preco <= 0 || valor.value === ""){
    resultado.textContent = "Digite um valor válido!";
return;
}
switch(pagamento.value){
    case "avista":
    total = preco * 0.90; 
    resultado.textContent = `Valor final: R$ ${total.toFixed(2)} (10% de desconto)`;
    break;

    case "credito":
    total = preco * 1.05; 
    resultado.textContent = `Valor final: R$ ${total.toFixed(2)} (acréscimo de 5%)`;
    break;

    case "2x":
    resultado.textContent = `Valor final: R$ ${preco.toFixed(2)} (parcelado em 2x sem juros)`;
    break;

    case "3x":
    total = preco * 1.10; 
    resultado.textContent = `Valor final: R$ ${total.toFixed(2)} (parcelado em 3x ou mais)`;
    break;
}
});