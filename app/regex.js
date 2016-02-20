exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
      
      if(str.match(/\d+/g)){
          return true;
      }
      else {
          return false;
      }

  },

  containsRepeatingLetter : function(str) {
      
      return (/([a-zA-Z]).*?\1/).test(str);

  },

  endsWithVowel : function(st) {
     // var s = str.length-1;
      
      var str = st.toLocaleLowerCase();
      
      if( str[str.length-1] == "a" || str[str.length-1] == "e" || str[str.length-1] == "i" || str[str.length-1] == "o"|| str[str.length-1] == "u"){
          return true;
      }
      else{
          return false;
      }

  },

  captureThreeNumbers : function(str) {
      
      var sr = str.match(/\d+/g);
      
      if(sr == null){
          return false;
      }
      
      if(sr[0].length >=2){
          
          return sr[0].substr(0,3);
      }
      else{
          return false;
      }

  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
