-- Criar o banco de dados bdBiblioteca
CREATE DATABASE IF NOT EXISTS bdBiblioteca;

-- Usar o banco de dados bdBiblioteca
USE bdBiblioteca;

-- Criar a tabela tblAlunos
CREATE TABLE IF NOT EXISTS tblAlunos (
    codAluno INT(11) PRIMARY KEY AUTO_INCREMENT,
    nomAluno VARCHAR(35)
);

-- Criar a tabela tblLivros
CREATE TABLE IF NOT EXISTS tblLivros (
    codLivro INT(11) PRIMARY KEY AUTO_INCREMENT,
    nomLivro VARCHAR(45)
);

-- Inserir dados na tabela tblAlunos
INSERT INTO tblAlunos (nomAluno) VALUES 
('João da Silva'),
('Maria Oliveira'),
('Pedro Santos');

-- Inserir dados na tabela tblLivros
INSERT INTO tblLivros (nomLivro) VALUES 
('O Senhor dos Anéis'),
('Dom Quixote'),
('Cem Anos de Solidão');


SELECT * FROM bdbiblioteca.tblalunos;
SELECT * FROM bdbiblioteca.tbllivros;
