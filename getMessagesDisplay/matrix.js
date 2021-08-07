var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var a = new five.Led.RGB([ 9, 10, 11 ]);

  var b = new five.Led.RGB({
    pins: {
      red: 3,
      green: 5,
      blue: 6
    }
  });

  this.repl.inject({
    a: a,
    b: b
  });

  a.toogle(500);
  b.toogle(1000);
});