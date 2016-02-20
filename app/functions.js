exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
      return fn.apply(null,arr);
  },

  speak : function(fn, obj) {
      return fn.call(obj)
  },

  functionFunction : function(str) {
      return function(y){
          //return function(str){
              return str +", "+y;
          //}
      }
  },

  makeClosures : function(arr, fn) {
      
      var squire = function(x) {
          return x*x;
      }
       squire(arr.length);

  },

  partial : function(fn, str1, str2) {
      //return 
      
      var partial = function(fn, str1, str2){
          return str1+", "+str1+""+fn;
      }
      partial(fn, str1, str2);
  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
