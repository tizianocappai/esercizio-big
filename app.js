//importiamo il modulo http
const http = require('http');

const fs = require('fs');

const fileHTML = fs.readFileSync('index.html');

//impostiamo una porta
const port = 3000

//creiamo un server
//req e res sono l'abbreviazione di request e response
const server = http.createServer((req, res) => {
    //vediamo da cosa è composta una richiesta
    console.log(req);
    //rispondiamo alla richiesta con una pagina html
    //res.setHeader('Content-type', 'text/html')
    //scriviamo un titolo
    //res.write('index.html');
    //terminiamo il processo di risposta
    //res.end();

    // cambiamo il valore di Content-type
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(fileHTML);
})

//mettiamo il server in ascolto sulla porta che abbiamo impostato
server.listen(port, () => {
    //verifichiamo che il server sia in funzione
    console.log(`Server is running on port:${port}`);
})