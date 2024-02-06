import express from 'express';
import mysql from 'mysql2';

const app = express();
app.use(express.json());
const port = 80;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bdbiblioteca'
});

// Método GET
app.get('/alunos/', (req, res) => {
    pool.execute(
        'SELECT * FROM `tblalunos`',
        (err, results, fields) => {
            res.send(results);        
        }
    );

});

app.get('/alunos/:id', (req, res) => {
    pool.execute(
        'SELECT * FROM `tblalunos`',
        (err, results, fields) => {
            const alunoId = Number(req.params.id) - 1;
            res.send(results[alunoId]);        
        }
    );
});

// Método POST
app.post('/alunos/', (req, res) => {
    const ultimoId = alunos[alunos.length - 1].id;

    const alunoNovo = {
        id: ultimoId + 1,
        nome: req.params.nome,
        idade: req.params.idade 
    }

    alunos.push(alunoNovo);
    return res.json(alunoNovo);
});


// Método PUT
app.put('/alunos/', (req, res) => {
    res.send(alunos)
});

// Método DELETE
app.delete('/alunos/', (req, res) => {
    res.send(alunos)
});

app.listen(port, () => console.log(`Rodando na porta ${port}`));