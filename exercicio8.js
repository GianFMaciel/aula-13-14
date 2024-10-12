
// A)

const pessoa = {
    nome: "Davi",
    apelidos: ['Davizinho', 'DV', 'Davizera']
}

let recebendo = (pessoa) => {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}

recebendo(pessoa)


//B)

const novaPessoa = {
    ...pessoa,
    apelidos: ['Dada', 'Didi', 'Vavi']
}

recebendo(novaPessoa)
