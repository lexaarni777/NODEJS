const http = require('http'); // подключение модуля
const server = http.createServer((request, response) => { // вызов метода создания http сервера
console.log("HTTP works!");
});
server.listen(80);//запуск сервера методом лисен у объекта сервер