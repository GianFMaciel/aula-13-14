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

const recebendoPessoas = (pessoa1) => {
 const resultado = []
 rusultado.push(pessoa1.nome)
 resultado.push(pessoa1.nome.lenght)
 resultado.push(pessoa1.idade)
 resultado.push(pessoa1.profissao)
 resultado.push(pessoa1.profissao.lenght)

 return resultado
}

console.log(recebendoPessoas(pessoa1))
console.log(recebendoPessoas(pessoa2))