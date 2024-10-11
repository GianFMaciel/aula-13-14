const filme = {
    direcao: "Frank Darabont",
    nome: "À Espera de um Milagre",
    anodelancamento: 1999,
    elenco: ["Michael Clarke Duncan", "Tom Hanks", "David Morse", "Sam Rockwell", "Doug Hutchison", "Michael Jeter", "James Cromwell", "Barry Pepper"],
    jaAssistiu: true
    
}
filme.personagens = ["John coffey", "Paul Edgecomb", "Brutus Howell", "Wild Bill", "Percy Wetmore", "Eduard Delacroix", "Warden Hal", "Dean Stanton"]


console.log(`${filme.elenco[0]} Interpreta ${filme.personagens[0]}`)
console.log(`${filme.elenco[1]} Interpreta ${filme.personagens[1]}`)
console.log(`${filme.elenco[2]} Interpreta ${filme.personagens[2]}`)
console.log(`${filme.elenco[3]} Interpreta ${filme.personagens[3]}`)
console.log(`${filme.elenco[4]} Interpreta ${filme.personagens[4]}`)
console.log(`${filme.elenco[5]} Interpreta ${filme.personagens[5]}`)
console.log(`${filme.elenco[6]} Interpreta ${filme.personagens[6]}`)
console.log(`${filme.elenco[7]} Interpreta ${filme.personagens[7]}`)

filme.elenco[0]="XuXa"

console.log(filme)

