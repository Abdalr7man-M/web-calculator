const http = require('http');
const url = require('node:url');

const PORT = process.env.PORT || 3000;

const doMath = (query, operation) => {
  const a = Number(query.a);
  const b = Number(query.b);
  let resulte = 0;

  if (operation === 'add') {
    resulte = a + b;
  } else if (operation === 'subtract') {
    resulte = a - b;
  } else if (operation === 'multiply') {
    resulte = a * b;
  } else if (operation === 'divide') {
    resulte = a / b;
  }

  return resulte;
}

const app = http.createServer((req, res) => {
  const myUrl = url.parse(req.url, true);

  if (req.url === '/') {
    res.end("Hello to the web-calculator.");
  } else if (req.url.includes('/add?')) {
    res.end(`response => ${doMath(myUrl.query, 'add')}`)
  } else if (req.url.includes('/subtract?')) {
    res.end(`response => ${doMath(myUrl.query, 'subtract')}`)
  } else if (req.url.includes('/multiply?')) {
    res.end(`response => ${doMath(myUrl.query, 'multiply')}`)
  } else if (req.url.includes('/divide?')) {
    res.end(`response => ${doMath(myUrl.query, 'divide')}`)
  } else {
    res.end('sorry your path are wrong write in this way http://localhost:/add?a=3&b=6')
  }

});

app.listen(PORT, 'localhost', () => {
  console.log("Server Start at: http://localhost:3000");
})

