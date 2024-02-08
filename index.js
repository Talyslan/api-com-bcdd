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
        (err, results, fields) => res.json(results)
    );
});

app.get('/alunos/:id', (req, res) => {
    pool.execute(
        'SELECT * FROM `tblalunos` WHERE `codAluno` = ?', 
        [req.params.id],
        (err, results, fields) => res.json(results)
    );
});

// Método POST
app.post('/alunos/', (req, res) => {
    const { codAluno, nomAluno } = req.body;
    
    pool.execute(
        'INSERT INTO `tblalunos` (codAluno, nomAluno) VALUES (?, ?)',
        [codAluno, nomAluno],
        (err, results, fields) => res.status(201).json({ message: 'Dados inseridos com sucesso' })
    );
});


// Método PUT
app.put('/alunos/:id', (req, res) => {
    const { codAluno, nomAluno } = req.body;
    const id = req.params.id;

    pool.execute(
        'UPDATE tblalunos SET codAluno = ?, nomAluno = ? WHERE codAluno = ?',
        [codAluno, nomAluno, id],
        (err, results, fields) => res.status(201).json({ message: 'Dados atualizados com sucesso!' })
    );
});

// Método DELETE
app.delete('/alunos/:id', (req, res) => {
    const id = req.params.id;

    pool.execute(
        'DELETE FROM tblalunos WHERE codAluno = ?', [id],
        (err, results, fields) => res.status(201).json({ message: 'Aluno deletado com sucesso!' })
    );
});

app.listen(port, () => console.log(`Rodando na porta ${port}`));