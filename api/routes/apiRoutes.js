'use strict';

module.exports = function(app){
    var api = require('../controllers/apiController');

    app.route('/')
        .get(api.list_routes);
    
    app.route('/app/:appId')
        .get(api.get_app_details);
    
    
    app.route('/all-apps')
        .get(api.get_all_apps);
    
    app.route('/all-except/:appId')
    	.get(api.get_specific_apps);
    
    app.route('/reviews/:appId')
        .get(api.get_reviews);
};