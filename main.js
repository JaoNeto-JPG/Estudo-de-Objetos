let listaDeItens = []

const forms = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

forms.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarItem ();
})

function salvarItens() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase())

    if (checarDuplicado) {
        alert("Item já existe")
    } else {
        listaDeItens.push({
        valor: comprasItem
    })
}

    
    
}