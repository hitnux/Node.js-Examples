const http = require('http');

const server = http.createServer((req,res)=>{
    var content = "Sayfa Bulunamadı.";
    var status = 200;
    switch(req.url){
        case '/':
            content = "<h2>Anasayfaya Hoşgeldiniz.</h2>";
            break;
        case '/about':
            content = "<h2>Hakkımda Sayfasına Hoşgeldiniz.</h2>";
            break;
        case '/contact':
            content = "<h2>İletişim Sayfasına Hoşgeldiniz.</h2>";
            break;
        default:
            status = 404;
    }
    res.writeHead(status, { "Content-Type": "text/html; charset=UTF-8" });
    res.write(content);
    res.end();
});

const port = 5000;
server.listen(port, ()=>{
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});
