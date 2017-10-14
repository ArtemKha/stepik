var foo = 10;
bar = 3;
(function () {
  var foo = 2;
  bar = 1;
}())
  bar = bar + foo;
  console.log(bar);

