'use strict';

var gplay = require('google-play-scraper');
exports.list_routes = function(request, response){
    console.log('Requested');
};

exports.get_app_details = function (request, response) {
    gplay.app({ appId: request.params.appId})
        .then(function(res){
            response.send(res);
        });
};

exports.get_all_apps = function (request, response) {
    gplay.developer({devId: "MoH Kenya"}).then(function(res){
        response.send(res);
    });
};

exports.get_specific_apps = function (request, response){
    gplay.developer({devId: "MoH Kenya"}).then(function(res){
        var specificApps = [];
        res.forEach(function(app){
            if (app.appId != request.params.appId) {
                specificApps.push(app);
            }
        });

        response.json(specificApps);
    });
};

exports.get_reviews = function(request, response){
    gplay.reviews({
        appId: request.params.appId,
        page: 0,
        sort: gplay.sort.RATING
    }).then(function(a){
        response.send(a);
    });
};