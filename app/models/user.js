require('./../mongDb'); //our db file
var mongoose = require('mongoose'); //library file
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre("save", function(done){
    var cipher = Promise.promisify(bcrypt.hash);
    // shasum.update(this.url);
    // this.code = shasum.digest('hex').slice(0, 5);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.password = hash;
      });
    done();
});
var User = mongoose.model('User', userSchema);



module.exports =  User;