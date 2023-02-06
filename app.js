'use strict'

const calcular = document.getElementById('calcular')

function determinar() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const mostrarMedia = document.getElementById('media-final')

    mostrarMedia.value = (nota1 + nota2) / 2 

    const mostrarSituacao = document.getElementById('situacao-final')

    if (mostrarMedia.value <= 5) {
        const formulario = document.getElementById('formulario')
        formulario.classList.remove('tela-verde')
        formulario.classList.add('tela-vermelha')
        mostrarSituacao.setAttribute('value', 'Reprovado')
    } else if (mostrarMedia.value > 5){
        const formulario = document.getElementById('formulario')
        formulario.classList.remove('tela-vermelha')
        formulario.classList.add('tela-verde')
        mostrarSituacao.setAttribute('value', 'Aprovado')
    }


}

calcular.addEventListener('click', determinar)