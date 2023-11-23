
var combo = function(a, min, max) {
  min = min || 1;
  max = max < a.length ? max : a.length;
  var fn = function(n, src, got, all) {
    if (n == 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (var j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
  }
  var all = [];
  for (var i = min; i < Math.min(max + 1, a.length); i++) {
    fn(i, a, [], all);
  }
  if(a.length == max) all.push(a);
  return all;
}
module.exports = combo;
