var $game = $('#game');
BOARD_WIDTH = 19;
BOARD_HEIGHT = 10;

$game.append(function () {
  var str = '';
  for (var i = 0; i < BOARD_HEIGHT; i++) {
    str = str + '<div class="row">';
    for (var j = 0; j < BOARD_WIDTH; j++) {
      str = str + '<div class="cell"></div>';
    }
    str = str + '</div>';
  }
  return str;
});

function getcell (row, col) {
  var $game = $('#game');
  var $rows = $game.find('.row');
  var $row = $($rows[row]);
  var $cells = $row.find('.cell');
  var $cell = $($cells[col]);
  return $cell;
}

////////////////////////////////////////////////
// Paddles
function Paddle (column) {
  this.pos = [
    [4, column],
    [5, column],
    [6, column]
  ];
  this.column = column;
}

Paddle.prototype.draw = function () {
  for (var i = 0; i < BOARD_HEIGHT; i++) {
    var $cell = getcell(i, this.column);
    $cell.removeClass('paddle')
  }

  for (var i = 0; i < this.pos.length; i++) {
    var $cell = getcell(this.pos[i][0], this.pos[i][1]);
    $cell.addClass('paddle');
  }
}

Paddle.prototype.up = function () {
  if (this.pos[0][0] === 0) {
  } else {
    var newedge = [this.pos[0][0] - 1, this.pos[0][1]];
    this.pos.unshift(newedge);
    this.pos.pop();
  }
}

Paddle.prototype.down = function () {
  if (this.pos[2][0] === BOARD_HEIGHT - 1) {
  } else {
    var newedge = [this.pos[2][0] + 1, this.pos[2][1]];
    this.pos.push(newedge);
    this.pos.shift();
  }
}

var lpaddle = new Paddle(0);
var rpaddle = new Paddle(BOARD_WIDTH - 1)
lpaddle.draw();
rpaddle.draw()
lpaddle.down()
lpaddle.down()
lpaddle.down()
lpaddle.down()
lpaddle.down()
lpaddle.draw();

function Ball (lpaddle, rpaddle) {
  this.pos = [5, 5];
  this.dirh = -1;
  this.dirv = 1;
  this.lpaddle = lpaddle;
  this.rpaddle = rpaddle;
}

Ball.prototype.checkInLeftEnd = function () {
  return this.pos[1] === 0;
}

Ball.prototype.checkInRightEnd = function () {
  return this.pos[1] === BOARD_WIDTH - 1;
}

Ball.prototype.draw = function () {
  var $cells = $('cell');
  $cells.removeClass('ball');
  $cell = getcell(this.pos);
  $cell.addClass('ball');
}

Ball.prototype.move = function () {
  // .........
}
//
// ball.prototype.down = function () {
//   this.pos[0] = this.pos[0] - 1
// }
// ball.prototype.up = function () {
//   this.pos[0] = this.pos[0] + 1
// }
// ball.prototype.right = function () {
//   this.pos[1] = this.pos[1] + 1
// }
// ball.prototype.left = function () {
//   this.pos[1] = this.pos[1] - 1
// }

// ball.prototype.bounce = function (Lpaddle, Rpaddle) {
//   if (this.pos[1] === 0 && this.dirv === 'UP') {
//     this.dirv = 'DOWN'
//   }
//   if (this.pos[1] === 11 && this.dirv === 'DOWN') {
//     this.dirv = 'UP'
//   }
//   if (this.pos[0] === 1) {
//     switch (this.pos[1]) {
//       case Lpaddle[0][0]:
//         this.dirv = 'UP'
//         this.dirh = 'RIGHT'
//         break;
//       case Lpaddle[2][0]:
//         this.dirv = 'DOWN'
//         this.dirh = 'RIGHT'
//         break;
//       case Lpaddle[1][0]:
//         this.dirv = ''
//         this.dirh = 'RIGHT'
//         default:
//     }
//   }
//   if (this.pos[0] === 10) {
//     switch (this.pos[1]) {
//       case Rpaddle[0][0]:
//         this.dirv = 'UP'
//         this.dirh = 'LEFT'
//         break;
//       case Rpaddle[2][0]:
//         this.dirv = 'DOWN'
//         this.dirh = 'LEFT'
//         break;
//       case Rpaddle[1][0]:
//         this.dirv = ''
//         this.dirh = 'LEFT'
//         default:
//       }
//     }
// }







// var RDIRECTION = 'RDOWN';
// $(document).keydown(function (event) {
//   switch (event.keyCode) {
//     case 38:
//       RDIRECTION = 'RUP';
//       break;
//     case 40:
//       RDIRECTION = 'RDOWN';
//       break;
//     default:
//       return;
//   }
//   event.preventDefault();
//   console.log(RDIRECTION);
//   console.log(event.keyCode);
// });
// function grid (ball) {
//   this.width = 12;
//   this.height = 10
//   this.Lpaddle = new Lpaddle()
//   this.Rpaddle = new Rpaddle()
// }
//
// grid.prototype.draw = function (Rpaddle, Lpaddle) {
//   this.Rpaddle.draw()
//   this.Lpaddle.draw()
//   this.ball.draw()
// }
// var Grid = new grid
// grid.prototype.draw();
//
// var game = setInterval(function () {
//   var Lpaddle = grid.Lpaddle
//   var Rpaddle = grid.Rpaddle
//   var ball = grid.ball
//
//   switch (RDIRECTION) {
//     case 'RUP':
//       Rpaddle.upR()
//       break;
//   }
// }, 250);
