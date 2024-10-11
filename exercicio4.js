const pessoa = { 
    nome: "Gian",
    idade: 33,
    generoMusical: ["Rap", "Rock", "Gospel", "Eletronica"]
}

let recebendoObjeto = (pessoa) => {
    
        const novaPessoa = {
            ...pessoa,
            comidas: ["Churrasco", "Xis", "Pizza", "Lasanha"],
            melhorAmigo: {
                nomeAmigo: "Anderson",
                idadeAmigo: 30

            },
            
        }

console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidas[0]}, ${novaPessoa.comidas[1]}, ${novaPessoa.comidas[2]} e ${novaPessoa.comidas[3]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nomeAmigo} e tem ${novaPessoa.melhorAmigo.idadeAmigo} anos.`)
}

