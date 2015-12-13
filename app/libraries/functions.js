var SoH = function(){
      var item = RegExp.$4;
      speak('The stock of: '+item+' is not known so far');
      alert('The stock of: '+item+' is not known so far');
  };
  
  var itemsIdentification = function(){
    var itemType = RegExp.$2;
    switch(itemType.toUpperCase()){
                      case 'TF':
                      case 'FFS':
                            speak('The meaning of: '+itemType+' is Tube Film');
                            alert('The meaning of: '+itemType+' is Tube Film');
                     break;
                     default:
                           speak("I'll check with Mr. Badie and come back to you");
                           alert("I'll check with Mr. Badie and come back to you");
                     break;
                    }
    
  }
  
var math = function(){
               //   'callback': function(par1,a,operation,b){  /// below is better
                    var operation = RegExp.$3;
                    var a = parseFloat(RegExp.$2);
                    var b = parseFloat(RegExp.$4);
                    switch(operation){
                      case '+':
                      case 'and':
                      case 'plus':
                            speak('The sum of: '+a+' and '+b+' is: '+(a+b));
                            alert('The sum of: '+a+' and '+b+' is: '+(a+b));
                     break;
                     case '-':
                     case 'less':
                     case 'minus':
                            speak('The substraction of: '+a+' and '+b+' from: '+(a-b));
                            alert('The substraction of: '+a+' from '+b+' is: '+(a-b));
                     break;
                     case '*':
                     case 'x':
                     case 'by':
                     case 'multiplied by':
                            speak('The multiplication of: '+a+' and '+b+' is: '+(a*b));
                            alert('The multiplication of: '+a+' and '+b+' is: '+(a*b));
                     break;
                     case '/':
                     case 'over':
                     case 'divided by':
                            speak('The division of: '+a+' by '+b+' is: '+(a/b));
                            alert('The division of: '+a+' by '+b+' is: '+(a/b));
                     break;
                     default:
                           speak('sorry did not understand');
                           alert('sorry did not understand');
                     break;
                    }
};  