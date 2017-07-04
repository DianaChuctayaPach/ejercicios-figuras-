function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}
function quiz1(n) {

  }

  for (var i = 0; i < n; i++) {
      var s = "";
      for (var j = 1; j >= n-i; j++) {
        s += j;
      }
      console.log( s);
  }

  quiz1(5);
