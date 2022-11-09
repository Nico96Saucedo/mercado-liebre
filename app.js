const express = require ("express")
const app = express()
const mainRouter = require ("./router/mainRouter")

let PORT =  process.env.PORT || 3000

app.listen(PORT, ()=>{ console.log ("escuchando al puerto " + PORT);});

app.use(express.static("public"))

app.use("/", mainRouter)