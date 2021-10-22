let dataDoEvento = "Posterior a data atual"
let idadeDoParticipante = 18
let quantidadeDeParticipantes = Math.floor(Math.random() * 118)
let listaDeParticipantes = Math.floor(Math.random() * 107)
let listaDePalestrantes = Math.floor(Math.random() * 6)

if (dataDoEvento == "Posterior a data atual")
{

    console.log("Evento permitido")
    console.log("Enquanto a quantidade de participantes for menor igual a 99, permitir cadastro")

        if (quantidadeDeParticipantes <= 118)
        {

        console.log("Permitido cadastro de participantes")

            if (idadeDoParticipante >= 18)
            {

            console.log("Idade autorizada, permitir cadastro do participante.")
            console.log("No total o evento possui  " + listaDeParticipantes + " participantes e " + listaDePalestrantes + " palestrantes" )

            }
            else
            {
            console.log("Não é permitido cadastro pela idade")
            }
        }
        else
        {
        console.log("Negado cadastro de participantes, pois o limite foi excedido!")
    }
}
else
{
    console.log("Data inválida")
} 