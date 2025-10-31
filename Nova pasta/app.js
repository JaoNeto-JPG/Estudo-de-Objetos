const formulario = document.querySelector('form js-form');

function mostrarValor(evento){
    evento.preventDefault();

    const nome = document.querySelector('#name').value;
    const dataNascimento = document.querySelector('#birth-date').value;

    console.log('Nome: ', nome);
    console.log('Data de Nascimento: ', dataNascimento);
}

formulario.addEventListener('submit', mostrarValor);