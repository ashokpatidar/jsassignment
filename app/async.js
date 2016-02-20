exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var promise = new Promise(); 
    
    promise.then(function(result){
        resolve();
    },function(){
    reject();
});
    

  

  },

  manipulateRemoteData : function(url) {

  }
};
