
const express = require('express');
const app = express();
const fs = require('fs')



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "https://liuj42.netlify.app/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(process.env.PORT || 5000, () => {
    console.log(`server up on https://localhost:${process.env.PORT || 5000}`);
});




app.get('/', (req, res) => { res.send('hi bri') })

app.get('/lectures', async (req, res) => {
    const files = fs.readdirSync('data/lectures');
    console.log(files);
    res.status(200).send(files)
});




app.get('/lectures/:name', (req, res) => {
    const name = req.params.name;
    const files = fs.readdirSync(`data/lectures`);
    const data = fs.readFileSync(`data/lectures/${name}`)
    res.status(200).send(data);


});

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
}