const http = require('http'); // подключение модуля
const server = http.createServer((request, response) => { // вызов метода создания http сервера
console.log("HTTP works!");
response.writeHead(200, {'Content-Type':'text/html'});//сервер должен вернуть текст заголовка
response.write('<h1>Hello</h1>');//возврат текста
response.end();//завершение запроса ответом
});
server.listen(80);//запуск сервера методом лисен у объекта сервер