const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    switch(ctx.path){
        case '/':
            ctx.body = "Ana sayfa";
            break;
        case '/about':
            ctx.body = "Hakkımda";
            break;
        case '/contact':
            ctx.body = "İletişim";
            break;
        default:
            ctx.body = "Sayfa Bulanamadı";
    }
});

app.listen(3000);
