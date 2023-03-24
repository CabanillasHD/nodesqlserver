const sql = require("msnodesqlv8");
const express = require("express");
const Database = require("./Database");
const { Sequelize } = require("sequelize");
const app = express();

// const config = {
//     user: 'sa',
//     password: 'cs2',
//     server: 'localhost',
//     database: 'EMPRESA' ,
//     dialectOptions: {
//         options: { encrypt: false }
//     }
// };

const database = new Database();


app.get("/", async (req, res) => {
    res.sendfile(__dirname + "/index.html");
});

app.get("/api/alunos", async (request, res) => {

    let query = "SELECT * FROM ALUNO WHERE 1=1 ";
    let data = request.query.data;
    let busca = request.query.busca;

    if (data){
        query += " AND NASCIMENTO ='" + data + "'";
    };

    if (busca){
        query += " AND NOME LIKE '%" + busca + "%'";
    };


    res.json(await database.query(query));
});

app.post("/api/aluno", async (request, res) => {

    let query = "INSERT INTO ALUNO (NOME, NASCIMENTO) VALUES ('" + request.query.nome + "', '" + request.query.data + "')";

    res.json(await database.query(query));
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});
