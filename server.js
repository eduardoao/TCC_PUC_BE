const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// /!\ Bind the router db to the app
server.db = router.db

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(auth)
server.use(router);
server.listen(port, ()=>{
    console.log(`JSON Server is running in ${port}`);
});