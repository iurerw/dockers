const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
var path = require('path'); 


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Listagem de jogo
app.get('/', (req, res) => {
  db.query('SELECT * FROM games', (err, results) => {
    if (err) throw err;
    res.render('index', { games: results });
  });
});

// Formulário de criação
app.get('/create', (req, res) => {
  res.render('create');
});

// Salvar novo jogo
app.post('/store', (req, res) => {
  const { name, made_by, gender } = req.body;
  db.query('INSERT INTO games (name, made_by, gender) VALUES (?, ?, ?)', [name, made_by, gender], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Formulário de atualização
app.get('/edit/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM games WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.render('edit', { game: results[0] });
  });
});

// Atualizar jogo
app.post('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, made_by, gender } = req.body;
  db.query('UPDATE games SET name = ?, made_by = ?, gender = ? WHERE id = ?', [name, made_by, gender, id], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Mostrar jogo
app.get('/show/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM games WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.render('show', { game: results[0] });
  });
});

// Deletar jogo
app.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM games WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
