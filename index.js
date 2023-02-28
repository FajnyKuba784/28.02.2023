const express = require('express')              //importowanie express i corsa
const cors = require('cors')                

const app = express()                       //uzywanie express

app.use(cors())                             //uzywanie nagłówków


app.get("/",function(req, res){                //funcja na odpowiedz servera
             
    res.send("ok")

})                                           //pozwalana na wejscie na strone

app.get("/imie/:imie/:nazwisko",function(req, res){
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    res.send(imie+" "+nazwisko)
    console.log(imie+" "+nazwisko)
})





app.listen(3000)                            //uzywanie portu