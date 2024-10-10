const filme = {
    direcao: "Frank Darabont",
    nome: "À Espera de um Milagre",
    anodelancamento: 1999,
    elenco: ["Tom Hanks", "Michael Clarke Duncan", "David Morse", "James Cromwell", "Graham Greene", "Michael Jeter", "Sam Rockwell", "Doug Hutchison", "Harry Dean Stanton", "Barry Pepper", "Bonnie Hunt", "Dabbs Greer."],
    jaAssistiu: true
    
}

console.log("Diretor: ",filme.direcao)
console.log("Filme: ", filme.nome)
console.log("Ano Lançamento: ", filme["anodelancamento"])
console.log("Elenco: ", filme.elenco)
console.log("Já Assistiu? ", filme.jaAssistiu)