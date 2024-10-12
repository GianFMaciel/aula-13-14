function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))  // A) Imprime no console false       B) Imprimiu false pois o atributo backender tem o resultado sendo false
console.log(minhaFuncao(pessoa, "altura"))     // A) Imprime no console undefined   B) Imprimiu undefined pois não tem o atributo altura dentro do objeto pessoa