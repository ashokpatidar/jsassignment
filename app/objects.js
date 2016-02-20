exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
      //fn.bind(obj);
      return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
      function constructor(name){
          this.name = name;
      }
      
      constructor.prototype.greeting = greeting;
      
      //var a1  = new C("ashok");
      //var a2 = new C("Patidar");
  },

  iterate : function(obj) {
      var a = [];
      for(var key in obj){
          if(obj.hasOwnProperty(key)){
              a.push(key+": "+obj[key]);
          }
      }
      return a;
  }
};
