// 3.Գրել ծրագիր, որը կհաշվարկի Ֆիբոնաչիի ալգորիթմը անալիտիկ ձևով։
//function fibonacci(n) {
//  let numbers = [0, 1];
//  for (let i = 2; i <= n; i++) {
//    let a = numbers[i - 2] + numbers[i - 1];
//    numbers.push(a);
//  }
//  console.log(numbers);
//}

//fibonacci(15);

// 4. Գրել ծրագիր, որը կկարդա n թիվը, և կգտնի բոլոր այն a և b թվերը, որոնք ենթարկվում են հետևյալ կանոնին՝
//a և b թվերի արտադրյալը պետք է հավասար լինի 1-ից մինչև n-ը ներառյալ բոլոր թվերի՝ բացառությամբ այդ a և b, գումարին։
//Օրինակ՝ n = 5, a = 2, b = 3 դեպքի համար, կստացվի, որ 2 * 3 === 1 + 4 + 5: Այսինքն 1-ից 5-ը ներառյալ թվերի գումարը բացառությամբ 2-ի և 3-ի։

//function findNumbers(n) {
//  const result = [];
//  const sumOfN = (n) => {
//    let sum = 0;
//    for (let i = 1; i <= n; i++) {
//      sum += i;
//    }
//    return sum;
//  };

//  for (let i = 1; i <= n; i++) {
//    for (let j = 1; j <= n; j++) {
//      let sumOfExcep = i === j ? i : i + j;
//      if (i * j === sumOfN(n) - sumOfExcep) {
//        result.push([i, j]);
//      }
//    }
//  }

//  if (result.length === 0) {
//    return 'There is no such a number';
//  }
//  return console.log(result);
//}

//findNumbers(17);

// 5.Գրել x-o խաղի կոնսոլային տարբերակը 3x3 չափերի համար։ Ձեր ծրագիրը պետք է բրաուզերի կոնսոլում ամեն քայլից հետո տպի նոր վիճակը,
//ինչպես նաև կոնսոլից պետք է ունենաք հնարավորություն նոր քայլ անելու և նոր խաղ սկսելու։ Ծրագիրը պետք է ճիշտ պահին որոշի հաղթող խաղացողին և հայտնի դրա մասին։
//Հուշում․
//1) OOP-ն կարող է լրջորեն հեշտացնել Ձեր աշխատանքը
//2) Հաշվի առեք բոլոր արտառոց դեպքերը նույնպես

console.log(`Insert 'game.start()' for start`);

class Game {
  constructor() {
    this.board = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
    };
    this.count = 0;
  }

  start() {
    console.log(
      `Game started. Please insert step like this 'player1.step(x/0, 1)' `
    );
    showBoard(this.board);
  }

  checkInputs(str, pos) {
    if (str !== 'x' && str !== '0') {
      console.log(`Please insert 'x' or '0'`);
      return false;
    } else if (pos > 9) {
      console.log(`Please insert number small than 9'`);
      return false;
    }
    return true;
  }
}

class PlayerX {
  constructor(name) {
    this.name = name;
    this.gamePlayer = null;
  }

  step(str, pos) {
    if (game.checkInputs(str, pos)) {
      this.gamePlayer = str;
      if (game.count % 2 !== 0) {
        console.log('It is the turn of the second player');
      } else if (game.board[pos] !== null) {
        console.log('Please insert other position');
      } else {
        game.board[pos] = str;
        showBoard(game.board);
        game.count++;
        if (check(game.board)) {
          game.count = 0;
          console.log(`Player ${this.name} won!`);
        }
      }
    }
  }
}



class Player0 {
  constructor(name) {
    this.name = name;
    this.gamePlayer = null;
  }

  step(str, pos) {
    if (game.checkInputs(str, pos)) {
      if (str === player1.gamePlayer) {
        console.log('Please input corect symbol ');
      } else if (game.count % 2 === 0) {
        console.log('It is the turn of the first player');
      } else if (game.board[pos] !== null) {
        console.log('Please insert other position');
      } else {
        game.board[pos] = str;
        showBoard(game.board);
        game.count++;
        if (check(game.board)) {
          console.log(`Player ${this.name} won!`);
        }
      }
    }
  }
}


function check(board) {
  return (
    false ||
    (board['7'] && board['7'] == board['8'] && board['7'] == board['9']) ||
    (board['4'] && board['4'] == board['5'] && board['4'] == board['6']) ||
    (board['1'] && board['1'] == board['2'] && board['1'] == board['3']) ||
    (board['7'] && board['7'] == board['4'] && board['7'] == board['1']) ||
    (board['8'] && board['8'] == board['5'] && board['8'] == board['2']) ||
    (board['9'] && board['9'] == board['6'] && board['9'] == board['3']) ||
    (board['7'] && board['7'] == board['5'] && board['7'] == board['3']) ||
    (board['9'] && board['9'] == board['5'] && board['9'] == board['1'])
  );
}

function showBoard(board) {
  console.log(
    `${board['7'] || '7 '} | ${board['8'] || ' 8 '} | ${board['9'] || ' 9 '}`
  );
  console.log(
    `${board['4'] || '4 '} | ${board['5'] || ' 5 '} | ${board['6'] || ' 6 '}`
  );
  console.log(
    `${board['1'] || '1 '} | ${board['2'] || ' 2 '} | ${board['3'] || ' 3 '}`
  );
}

const game = new Game();
const player1 = new PlayerX(prompt('Please insert player 1 name'));
const player2 = new Player0(prompt('Please insert player 2 name'));
