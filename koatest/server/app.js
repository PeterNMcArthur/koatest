var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello World';
});
console.log('the server is running')
app.listen(3000);

