const formulario = document.querySelector('.conteiner-forms');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = document.querySelector("#peso");
    const inputAltura = document.querySelector("#altura");
    
    let peso = inputPeso.value;
    let altura = inputAltura.value;

    peso = Number(peso.replace(',', '.'));
    altura = Number(altura.replace(',', '.'));
    
    if (peso == "" || altura == "") {
        alert('Preencha os campos vazios')
    }
    else {
        if (!peso || !altura) {
            alert('Digite valores válidos')
            return;
        }
        else {
            const imc = calcularIMC(peso, altura);
            createResultado(imc);
            inputAltura.value='';
            inputPeso.value='';
        }
    }
});

function calcularIMC(peso, altura) {
    const resultadoIMC = (peso / (altura ** 2)).toFixed(2);
    return resultadoIMC;
}

function getNivel(imc) {
    const array = ['Muito abaixo do peso', 'Abaixo do peso', 'Peso Normal', 'Acima do peso',
        'Obeseidade grau I', 'Obeseidade grau II', 'Obeseidade grau III'];
    if (imc > 40) return array[6];
    if (imc > 35) return array[5];
    if (imc > 30) return array[4];
    if (imc > 25) return array[3];
    if (imc > 18.5) return array[2];
    if (imc > 17) return array[1];
    if (imc < 17) return array[0];
}

function createResultado(imc) {
    const conteinterResultado = document.querySelector('.conteiner-result');
    const resultado = document.querySelector('.conteiner-result');
    resultado.innerHTML = '';

    const pImc = document.createElement('p');
    const pNivel = document.createElement('p');

    pNivel.innerHTML = getNivel(imc);
    pImc.innerHTML = `Índice de massa corporal: ${imc}`;

    resultado.appendChild(pImc);
    resultado.appendChild(pNivel);
    conteinterResultado.style.display = 'flex'
}