const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)   // A) aparece no console nome: 'Juca'  idade: 3  raca: 'SRD'    B) Copia todos os dados do objeto relacionado.
console.log(gato)       // A) aparece no console nome: 'Juba'  idade: 3  raca: 'SRD'   
console.log(tartaruga)  // A) aparece no console nome: 'Jubo'  idade: 3  raca: 'SRD'   