'use strict';

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

var generate = function(callback) {
  // SYNCHRONOUS, IS DANGEROUS
  if(!callback) return generateBase64Id();
  // ASYNC, IT'S COOL
  return generateBase64Id({}, callback);
};

module.exports = {
  generate: generate
};


var crypto = require('crypto');

function generateBase64Id(options, callback) {
  options = options || {};
  options.chars = options.chars || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';
  options.length = options.length || 6;
  // IF NO CALLBACK IS GIVEN, FUNCTION IS SYNC
  if(!callback) {
    return done(options, crypto.randomBytes(options.length));
  } else {
    // CALLBACK IS GIVEN, FUNCTION IS ASYNC
    crypto.randomBytes(options.length, function(err, random) {
      if(err) return callback(err);
      return callback(null, done(options, random));
    });
  }
}

function done(options, random) {
  var value = new Array(options.length);
  for(var i = 0; i < options.length; i++) {
    value[i] = options.chars[random[i] % options.chars.length];
  }
  return value.join('');
}