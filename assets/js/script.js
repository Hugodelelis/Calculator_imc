const form = document.querySelector('#form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    let altura = inputAltura.value
    altura = altura.replace(',', '.')
    Number(altura)

    if (!peso && !altura) {
        setResultado('Peso e altura inválidos!', false)
        return
    }

    if (!peso || peso > 500) {
        setResultado('Peso inválido!', false)
        return
    }

    if (!altura || altura > 2.70) {
        setResultado('Altura inválida!', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc}.)`

    setResultado(msg, true)
})

function getImc (peso, altura) {
    const imc = peso/altura**2
    return imc.toFixed(2)
}

function getNivelImc (imc) {
    const nivel  = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) {
        return nivel[5]
    } else if (imc >= 34.9) {
        return nivel[4]
    } else if (imc >= 29.9) {
        return nivel[3]
    } else if (imc >= 24.9) {
        return nivel[2]
    } else if (imc >= 18.5) {
        return nivel[1]
    } else if (imc <= 18.5) {
        return nivel[0]
    }
}

function createP () {
    const p = document.createElement('p')
    return p
}

function setResultado (msg, isValid) {
    const resultado  = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = createP()

    if(isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)
}