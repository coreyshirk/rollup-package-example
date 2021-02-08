const jsonServer = require('json-server');

const server = jsonServer.create()
const cors = require('cors');

const configs = [{name: "Joe"}, {name: "Bob"}]

server.use(jsonServer.bodyParser);
server.use(cors())

server.post('/api/configurations', (req, resp) => {
    console.log('req -- ', req);
    resp.send(configs)
});


server.listen(3000, () => {
    console.log('JSON Server is running');
})