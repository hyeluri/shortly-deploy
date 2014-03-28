var mongoose = require('mongoose');
 
var path = process.env.MONGODB ||'mongodb://localhost/shorty';

mongoose.connect(path, function(err){

});
