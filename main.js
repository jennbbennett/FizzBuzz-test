module.exports = {
  fizzBuzz: function(n) {
    var newArray = [];
    for(var i = 0; i <= n; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
      newArray.push("FizzBuzz");
    } else if(i % 3 === 0){
      newArray.push("Fizz");
    } else if(i % 5 === 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(i);
    };
   };
   return newArray.toString();
  }
}
