const express = require("express")
const router = express.Router()

const data = new Date()
const hora = data.toLocaleTimeString('pt-BR')

const app = express()
const PORTA = 3333

function mostraPorta () {
    console.log ('Servidor criado e rodando na porta ', PORTA)
}

function mostraHora(request, response) {

    const data = new Date()
   
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)
   
}


app.use(router.get("/hora", mostraHora))
app.listen(PORTA, mostraPorta)