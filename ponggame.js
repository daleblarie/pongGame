/* global $ BOARD_WIDTH:true BOARD_HEIGHT:true */


const $game = $('#game');
BOARD_WIDTH = 19;
BOARD_HEIGHT = 10;

$game.append(() => {
  let str = '';
  for (let i = 0; i < BOARD_HEIGHT; i += 1) {
    str += '<div class="row">';
    for (let j = 0; j < BOARD_WIDTH; j += 1) {
      str += '<div class="cell"></div>';
    }
    str += '</div>';
  }
  return str;
});

function getcell(row, col) {
  const $rows = $game.find('.row');
  const $row = $($rows[row]);
  const $cells = $row.find('.cell');
  const $cell = $($cells[col]);
  return $cell;
}

// //////////////////////////////////////////////
// Paddles
function Paddle(column) {
  this.pos = [
    [4, column],
    [5, column],
    [6, column],
  ];
  this.column = column;
}

Paddle.prototype.draw = () => {
  for (let i = 0; i < BOARD_HEIGHT; i += 1) {
    const $cell = getcell(i, this.column);
    $cell.removeClass('paddle');
  }

  for (let i = 0; i < this.pos.length; i += 1) {
    const $cell = getcell(this.pos[i][0], this.pos[i][1]);
    $cell.addClass('paddle');
  }
};

Paddle.prototype.up = () => {
  if (this.pos[0][0] !== 0) {
    const newedge = [this.pos[0][0] - 1, this.pos[0][1]];
    this.pos.unshift(newedge);
    this.pos.pop();
  }
};

Paddle.prototype.down = () => {
  if (this.pos[2][0] !== BOARD_HEIGHT - 1) {
    const newedge = [this.pos[2][0] + 1, this.pos[2][1]];
    this.pos.push(newedge);
    this.pos.shift();
  }
};

function Ball(lpaddle, rpaddle) {
  this.pos = [5, 5];
  this.dirh = -1;
  this.dirv = 1;
  this.lpaddle = lpaddle;
  this.rpaddle = rpaddle;
}

Ball.prototype.checkInLeftEnd = () => this.pos[1] === 0;

Ball.prototype.checkInRightEnd = () => this.pos[1] === BOARD_WIDTH - 1;

Ball.prototype.draw = () => {
  const $cells = $('cell');
  $cells.removeClass('ball');
  const $cell = getcell(this.pos);
  $cell.addClass('ball');
};

Ball.prototype.move = () => {
  // .........
};

let lpaddle1 = new Paddle(0);
let rpaddle1 = new Paddle(BOARD_WIDTH - 1);
lpaddle1.draw();
rpaddle1.draw();
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
