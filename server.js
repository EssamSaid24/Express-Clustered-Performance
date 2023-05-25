const express = require('express');
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

console.log("Master has been started ...");
console.log('Worker process started');
app.listen(3000);

