//configurando o server

 const express = require("express")
 const server = express()

 //config server para utilizar arquivos estaticos
 server.use(express.static('./public'))

 //habilitar body do form
 server.use(express.urlencoded({extended:true}))
 //config a tamplate engine 
 const nunjucks= require("nunjucks")
 nunjucks.configure("./", {
     express:server,
     noCache:true,

 })

//lista de doadores: vetor ou array
const donors =[
    {
    name:"Diego Fernandes",
    blood:"AB+"
    },
    {
        name:"Pastel",
        blood:"A+"
    },
    {
        name:"Tapioca",
        blood:"A-"
    },
    {
        name:"Bananinha",
        blood:"B+"
    },
]


 //configurar apresentação da pagina
 server.get("/",  function(req, res){

    return res.render("index.html", {donors})
     

 })
 server.post("/",function(req,res){
     //pegar dados do form
     const name = req.body.name
     const email = req.body.email
     const blood = req.body.blood
//valores dentro do array
     donors.push({
         name:name,
         blood:blood,
     })
     return res.redirect("/")
 })
 //start servidor e permissão de acesso na porta 3000
 server.listen(3000,function(){
     console.log("iniciei o servidor")
 })