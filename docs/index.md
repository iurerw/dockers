# Documentação do CRUD em Node.js utilizando express para renderizar as páginas

Este é um um tutorial para baixar, instalar, e rodar a aplicação crud "NinjasGames"

## Introdução

A aplicação NinjasGames foi implementado usando node(servidor), express(renderizador), html(página web), css(estilo da página), mysql (banco de dados). rodando tanto aplicação quanto banco de dados em containers (docker)

## Pré-requisitos

Para essa aplicação precisaremos dos seguintes programas:

- Docker (virtualização)
- git (baixar a aplicação de um repositório github)

## Baixando a aplicação

1. Clone o repositório do projeto:
   ```bash
   git clone https://github.com/iurerw/dockers
   ```

## Criando a base de Dados

1. Entre na pasta myapp/databases e copie o conteudo do arquivo db.sql

   ```bash
   cd myapp/databases

   ```

2. Volte para a pagina inicial da pasta Dockers e acesse a pasta mysql

   ```bash
   cd ..
   cd ..
   cd mysql

   ```

3. Executando o container mysql setando password

   ```bash
   docker build .
   docker run --name dbninja -e MYSQL_ROOT_PASSWORD=iurerw08 mysql

   ```

4. Acessando o container e o mysql

   ```bash
   docker exec -it dbninja bash
   mysql -u root -p
   iurerw08

   ```

5. Criando a base de dados e suas respectivas tabelas colando o que foi copiado anteriormente do arquivo db.sql

   ```bash
   CREATE DATABASE ninjasgames;

   USE ninjasgames;

   CREATE TABLE games (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       made_by VARCHAR(255) NOT NULL,
       gender VARCHAR(255) NOT NULL
   );
   exit
   exit
   ```

## Iniciando container da aplicação

1. Acessando novamente a pasta myapp

   ```bash
   cd ..
   cd myapp

   ```

2. Executando o build do docker para construir nossa imagem da aplicação

   ```bash
   docker build -t myapp .

   ```

3. Subindo a imagem da aplicação em um container docker
   ```bash
   docker run -d --name myapp -p 80:3000 myapp
   ```

## Acessando a aplicação

1. Abra um navegador de sua preferência

2. acesse http://localhost:80
