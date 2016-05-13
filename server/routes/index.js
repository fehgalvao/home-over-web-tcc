/*jslint node:true*/
(function () {
    'use strict';
    var db = require('../config/db.js').init,
        starterRoutes = require('./partials/starter.js'),
        loginRoutes = require('./partials/login.js');

    module.exports = function (app) {
        starterRoutes(app);
        loginRoutes(app);

        app.get('/', function (req, res) {
            res.render('index.html');
        });

        app.get('/404', function (req, res) {
            res.status(404).render('../../client/handlers/error.view.html', { error: req });
        });

        app.use(function (req, res) {
            res.redirect('/404');
        });
    };

}());