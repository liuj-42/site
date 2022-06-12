
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

app.listen(process.env.PORT || 5000);




app.get('/', (req, res) => { res.send('hi bri') })

app.get('/lectures', async (req, res) => {
    console.log(getDirectories('data/lectures'));
    res.status(200).send(getDirectories('data/lectures'));
});




app.get('/lectures/:num', (req, res) => {
    const num = req.params.num;
    // res.send(`you selected lecture #${num}`);
    const files = fs.readdirSync(`data/lectures/${num}`);
    let arr = [];
    files.forEach(file => {
        const data = fs.readFileSync(`data/lectures/${num}/${file}`, 'utf8');
        console.log(data)
        arr.push(data);
    })
    res.status(200).send(arr);


    // files.forEach(file => {
    //     fs.readFileSync('data/lectures', 'utf8', (err, data) => {
    //         if (err) {
    //           console.error(err);
    //           return;
    //         }
    //         console.log(data);
    //       });
    // })
});

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
}