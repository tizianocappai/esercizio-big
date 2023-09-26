//importiamo il modulo http
const http = require('http')

//impostiamo una porta
const port = 3000

//creiamo un server
//req e res sono l'abbreviazione di request e response
const server = http.createServer((req, res) => {
    //vediamo da cosa è composta una richiesta
    console.log(req);
    //rispondiamo alla richiesta con una pagina html
    res.setHeader('Content-type', 'text/html')
    //scriviamo un titolo
    res.write('<h1>Ho creato un server con Node.js</h1>');
    //terminiamo il processo di risposta
    res.end();
})

//mettiamo il server in ascolto sulla porta che abbiamo impostato
server.listen(port, () => {
    //verifichiamo che il server sia in funzione
    console.log(`Server is running on port:${port}`);
})