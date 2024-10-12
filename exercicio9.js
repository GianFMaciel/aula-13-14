const pessoa1 = {
    nome: "José",
    idade: 20,
    profissao: "Bombeiro"
}

const pessoa2 = {
    nome: "João",
    idade: 27,
    profissao: "Desenvolvedor Senior"
}

const recebendoPessoas = (pessoa) => {
    const resultado = []
    resultado.push(pessoa.nome)
    resultado.push(pessoa.nome.lenght)
    resultado.push(pessoa.idade)
    resultado.push(pessoa.profissao)
    resultado.push(pessoa.profissao.lenght)
    return resultado
}

console.log(recebendoPessoas(pessoa1))
console.log(recebendoPessoas(pessoa2))