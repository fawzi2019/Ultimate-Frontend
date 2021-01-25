
var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dist/',            // required, the root of the server file tree
  port: 9080 // optional, defaults to undefined

});

server.start(function () {
  console.log('Server Started At Port ', server.port);
});
