const express = require('express');
const app = express();
const PORT = 3000;
const Pokemons = require('./models/pokemon')


///////////////////////////////////////////////////////////////////////////////
//////////////////////// MIDDLEWARE ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



//////////////// ROUTES /////////

//////////// index //////
app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {
        pokemons: Pokemons,
    });
});

///////////// New /////////
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
});

/////////// destroy ///////
app.delete('/pokemon/:id', (req, res) => {

});

//////////// Update //////////
app.put('/pokemon/:id', (req, res) => {

});

///////////// create //////////
app.post('/pokemon', (req, res) => {
    Pokemons.push(req.body);
    res.redirect("/pokemon");
});

//////////// edit ////////////
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: Pokemons[req.params.id]
    })
});

////////// show //////
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemons[req.params.id],
    });
});


////////////// LISTENER ////////////
app.listen(PORT, ()=>{
    console.log(`App is listening on port:`, PORT);
});