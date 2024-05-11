function vote(){
    let votando = true
    let candidato1 = 0
    let candidato2 = 0
    let candidato3 = 0
    let candidato4 = 0
    let branco = 0

    while(votando){
        let votacao = prompt("vote entre os candidatos 1 e 4 ou digite 5 para voto em branco e saia digitando (sair)") 
          
        switch (votacao){
            case '1':
                candidato1++
                break
            case '2':
                candidato2++
                break
            case '3':
                candidato3++
                break
            case '4':
                candidato4++
                break
            case '5':
                branco++
                break
            case 'sair':
                votando=false
                break
            default:
                alert("opção inválida")
        } 
    }
    console.log("Resultado") 
    console.log("Candidato1 teve ", candidato1, " votos.")
    console.log("Candidato2 teve ", candidato2, " votos.")
    console.log("Candidato3 teve ", candidato3, " votos.")
    console.log("Candidato4 teve ", candidato4, " votos.")
    console.log("branco teve ", branco, " votos.")

    alert(`
    Resultado
    Candidato1 teve ${candidato1} votos.
    Candidato2 teve ${candidato2} votos.
    Candidato3 teve ${candidato3} votos.
    Candidato4 teve ${candidato4} votos.
    branco teve ${branco} votos.
    `)
}

vote()
