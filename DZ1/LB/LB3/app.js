const http = require('http'); // подключение модуля
const fs = require('fs');//подключение модуля жля работы с файлом
const filename = 'index.html';
const header = 'header.html';
const body = 'body.html';
const footer = 'footer.html';

http.createServer(function(request, response){
  
  
  fs.readFile(filename, 'utf-8', function(err,data){//прочитываем первый файл 
    //console.log(err); //как можно посмотреть что из себя представляет err и data (если я правиьно понял это текст страницы которую мы загружаем)
    //console.log(data);//(и можно ли посмотреть как выпоняется код)
    
    response.writeHead(200, {'Content-type':'text/html'});//почемуто без этой строки тоже работает почему?
    
    if(err){//усли ошибка тогда выполняется этот код
      console.log('Could not find or open file for reading\n');
      response.statusCode = 404;
      response.end();
    }else{//или добавляется на верску
      console.log(`The file ${filename} is read and sent to the client\n`);
      response.write(data);
            
      fs.readFile(header, 'utf-8', function(err,data){//и тиак далее по каждой вновьобавляемой странице
        if(err){
          response.statusCode = 404;
          response.end();
        }else{
          response.write(data);
          
          fs.readFile(body,'utf-8', function(err, date){
            if(err){
              response.statusCode = 404;
              response.end();
            }else{
              response.write(date);
              
              fs.readFile(footer,'utf-8',function(err, date){
                if(err){
                  response.statusCode = 404;
                  response.end();
                }else{
                  response.end(date);
                }
              });
            }
          });
        }
      }); 
    }
  });
 console.log('Request accepted!');
}).listen(80, function(){
  console.log('HTTP server works in 8080 port!\n');
});
