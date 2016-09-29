// EXPORTS
module.exports = function() {
  var args = Array.prototype.slice.call(arguments);
  var url = '';
  for(var i = 0; i < args.length; i++) {
    var arg = args[i].toString().replace(/^\/|\/$/g, '');
    if(arg.length > 0) url += '/' + arg;
  }
  return url;
};
