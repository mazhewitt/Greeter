/**
 * Created by mazda on 26/04/2016.
 */
var request = require('request');

function renderGreeting(req, res){
    res.render('index', { greeting: 'Hello World!' });
}
module.exports = renderGreeting;