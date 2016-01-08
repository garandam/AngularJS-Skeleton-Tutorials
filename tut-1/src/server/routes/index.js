module.exports = function(app) {
    app.get('/api/1/ping', getPong);

    function getPong(req, res, next) {
        console.log(req.body);
        res.send('pong');
    }
};