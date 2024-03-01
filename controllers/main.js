var fn_main = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
};

module.exports = {
    'GET /': fn_main,
}