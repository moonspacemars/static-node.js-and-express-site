const express = require('express');
const port =3000;
const app = express();
const data =require("./data.json");



app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req,res) =>{
    // res.send('<h1>home</h1>');
    res.render('index',{data});
    // res.render('index');
});

app.get('/about', (req,res) =>{
    // res.send('<h1>about</h1>');
    res.render('about',{data});
});


data.projects.forEach((item)=>{
    app.get(`/projects/${item.id}`, (req,res) =>{
        // res.send('<h1>projects</h1>');
        res.render('project',{data});
    });
    }
)



app.listen(port, console.log(`Server is running on localhost:${port}`));