const calcular = document.getElementById('calcular');


function imc(evento) {
    evento.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    const valorimc = (peso / (altura * altura)).toFixed(2);

    if (peso !== '' && altura !== '') {
        resultado.textContent = `O RESULTADO É : ${valorimc} `;
    
        if (valorimc < 18.5) {
            resultado.innerHTML = `Resultado ${valorimc}. Abaixo do peso!`
        }
        else if (valorimc >= 18.5 && valorimc <= 24.9) {
            resultado.innerHTML = `Resultado ${valorimc}. Peso Normal!`
        }
        else if (valorimc >= 25 && valorimc <= 29.9) {
            resultado.innerHTML = `Resultado ${valorimc}. Sobrepeso!`
        }
        else if (valorimc >= 30 && valorimc <= 34.9) {
            resultado.innerHTML = `Resultado ${valorimc}. Obesidade grau 1!`
        }
        else if (valorimc >= 35 && valorimc <= 39.9) {
            resultado.innerHTML = `Resultado ${valorimc}. Obesidade grau 2!`
        }
        else if (valorimc >= 40) {
            resultado.innerHTML = `Resultado ${valorimc}. Obesidade grau 3!`
        }
    }

    else {
        resultado.innerHTML = `PREENCHA TODOS OS CAMPOS!`;
    }


}





calcular.addEventListener('click', imc);