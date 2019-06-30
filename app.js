const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Curriculo Expresso!'
    });
});

app.get('/curriculo', (req, res, next) => {
    res.render('curriculo', {
        title: 'Meu currículo',
        name: 'André Romeu Pedruzzi',
        profession: 'Desenvolvedor',
        description: 'Experiência com desenvolvimento em Javascript, NodeJS e frameworks para projetos próprios e para aprendizado!',
        experience: [{
            company: 'Empresa exemplo 1',
            office: 'Desenvolvedor',
            description: 'Desenvolvendo um servidor NodeJS, utilizando view engine EJS para páginas!'
        },
        {
            company: 'Empresa exemplo 2',
            office: 'Desenvolvedor',
            description: 'Aprendendo React para Web e Native para criar aplicativos!'
        }],
        education: [{
            institution: 'Universidade Vila Velha',
            description: 'Ciência da Computação'
        },
        {
            institution: 'Vida',
            description: 'Aprendendo as coisas por conta própria!'
        }],
        skills: ['Backend', 'API Rest', 'JavaScript', 'Java', 'NodeJS', 'Unity']
    });
});

app.get('/cdown', (req, res) => {
    res.download('./files/curriculo.pdf', 'Curriculo - André Romeu Pedruzzi.pdf');
})

app.listen(port, () => {
    console.log(`servidor rodando http://localhost:${port}`);
});