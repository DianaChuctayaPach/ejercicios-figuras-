function quiz2(n) {
  //var e = espacios(n);
  for (var i = 0; i < n; i++) {
      var s = "";
      for (var j = i+1; j <= n; j++) {
        s += j;
      }
      console.log(s);
  }
}
quiz2(5);
