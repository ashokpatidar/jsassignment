exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
      return Number(num).toString(10);
  },

  convertToBinary: function(num) {
      var s;
      s = (Number(num).toString(2));
      return s;
  },

  multiply: function(a, b) {
      return a*b;
  }
};
