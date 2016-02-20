exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      for(var i = 0;i<arr.length;i++){
          if(arr[i] == item){
              return i;
          }
      }
      return -1;
  },

  sum : function(arr) {
      var sum = 0;
      for(var i=0;i<arr.length;i++){
          sum += arr[i];
      }
      return sum;

  },

  remove : function(arr, item) {
    
      
      var i = 0; 
      while(i<arr.length){
          if(arr[i]==item){
          arr.splice(i,1)
          }
          
          i++;
      }

      return arr;
      
      

  },

  removeWithoutCopy : function(arr, item) {
      
      var i =0;
      var arrLength = arr.length;
      
      for(var i=0; i< arrLength; i++){
          if(arr[i] === item){
              arr.splice(i,1);
              i--;
          
          arrLength = arr.length;
              
          }
          
          
      }
      
      return arr;
 },

  append : function(arr, item) {
     arr.push(item);
      return arr;
  },

  truncate : function(arr) {
       arr.pop();
      return arr;
  },

  prepend : function(arr, item) {
       arr.unshift(item);
      return arr;
  },

  curtail : function(arr) {
    arr.shift();
      return arr;
  },

  concat : function(arr1, arr2) {
      var a = [];
      a = arr1.concat(arr2);
     // a.concat(arr1,arr2);
      return a;
  },

  insert : function(arr, item, index) {
       arr.splice(index,0,item);
      return arr;
  },

  count : function(arr, item) {
      var count = 0;
      for(var i=0;i<arr.length;i++){
          if(arr[i] === item ){
              count++
          }
      }
      return count;

  },

  duplicates : function(arr) {
      var a = [];
      var b = [];
      
      for(var i=0;i<arr.length;i++){
          if(a.indexOf(arr[i]) == -1){ 
              a.push(arr[i])
          } 
          else {
              if(b.indexOf(arr[i]) == -1){
                  b.push(arr[i])
              }
          }
      }
      
      return b;
  },

  square : function(arr) {
      return arr.map(function(idx){ return idx*idx;})
  },

  findAllOccurrences : function(arr, target) {
      var count = 0;
      var app = [];
     for(var i=0;i<arr.length;i++){
         if(arr[i] === target ){
             // count++
             app.push(i);
          }
     }
      return app;
  }
};
