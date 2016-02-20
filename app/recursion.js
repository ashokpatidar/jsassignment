exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
      
       function fab(n){
           if(n <= 2) {
                return 1;
            } else {
                return fab(n - 1) + fab(n - 2);
            }
       }
      
      return fab(n);
       
  },

  validParentheses: function(n,expected) {
      
      var res = [];
      
      for(var i=0;i<expected.length;i++){
          //res.push(isBalanced(expected[i]));
          
          if(isBalanced(expected[i])){
              res.push(expected[i]);
          }
      }
      
      function isBalanced(string){
          var count = 0;
          for(var i = 0; i < string.length; i++) {
            if (string[i] === '(') count ++;
            if (string[i] === ')') count --;
            if (count < 0) return false;
          }

          return count === 0;
        }
      return res;

          }
};
