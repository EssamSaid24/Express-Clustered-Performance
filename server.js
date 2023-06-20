const express = require('express');
const os = require('os');
const cluster = require('cluster')
const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {}
}

app.get('/', (req, res) => {
    res.send(`Performance Example  ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`ding ding ding !! ${process.pid}`);
});

// console.log('Running server.js ');
if (cluster.isMaster){
    console.log('Master has been started ...')
    const NumCpus = os.cpus().length;
    for(let i = 0; i<NumCpus ; i++){
        cluster.fork();
    }
    console.log(NumCpus)

}else{
    console.log('worker process started')
    app.listen(3000);
}




