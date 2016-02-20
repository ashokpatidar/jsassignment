exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    var myObject = { // var was not defined
      name : 'Jory'
    };

    return myObject;
  },

  functions : function(flag) {
      var getValue;
    if (flag) {
      getValue = function () { return 'a'; }
    } else {
      getValue = function () { return 'b'; }
    }

    return getValue();
  },

  parseInt : function(num) {
    return parseInt(num,10); // base is required
  },

  identity : function(val1, val2) {
      if(val1 === val2){
          return true;
      }
      if(val1 !== val2){
          return false;
      }
  }
};
