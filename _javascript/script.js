document.getElementById('btn-calcular').addEventListener('click', () => {
    let nome = prompt('Digite seu nome.')
    let qtdPassageiros = Number(prompt('Digite quantas pessoas viajarão.'))
    let valorViagem = Number(prompt('Digite o valor da viagem.'))
    let valorTotal = valorViagem * qtdPassageiros
    alert(`${nome}\nO valor total da viagem é:\nR$ ${valorTotal}`)
})
