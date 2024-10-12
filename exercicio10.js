const carrinho = []

const laranja = {
    nome: "Laranja",
    disponibilidade: true

}

    const banana = {
    nome: "Banana",
    disponibilidade: true
}

    const maca = {
    nome: "Maça",
    disponibilidade: true
}

const sacolao = (fruta) => {
    carrinho.push(fruta)
    
}

sacolao(laranja)
sacolao(banana)
sacolao(maca)

console.log(carrinho)

