class Game {
  constructor(playerA, playerB) {
    this.deck = new DeckOfCards();
    this.playerA = playerA;
    this.playerB = playerB;
  }

  startGame() {
    this.playerA.cardsInHand(deck.drawCard(), deck.drawCard());
    this.playerB.cardsInHand(deck.drawCard(), deck.drawCard());
    console.log(this.playerA.showCards());
    console.log(this.playerB.showCards());
    this.showTable();
    let win =this.whoWin();
    if(win=='A')
        this.playerA.winner();
    if(win=='B')
        this.playerB.winner();
  }

  showTable() {
    this.tablePlayerA = [
      this.deck.drawCard(),
      this.deck.drawCard(),
      this.deck.drawCard(),
      this.deck.drawCard(),
      this.deck.drawCard(),
      this.playerA.cardA,
      this.playerA.cardB,
    ];
    this.tableplayerB = [
      this.tablePlayerA[0],
      this.tablePlayerA[1],
      this.tablePlayerA[2],
      this.tablePlayerA[3],
      this.tablePlayerA[4],
      this.playerB.cardA,
      this.playerB.cardB,
    ];
    console.log(
      `Card 1: ${this.tablePlayerA[0].number} ${this.tablePlayerA[0].suit}\nCard 2: ${this.tablePlayerA[1].number} ${this.tablePlayerA[1].suit}\nCard 3: ${this.tablePlayerA[2].number} ${this.tablePlayerA[2].suit}\nCard 4: ${this.tablePlayerA[3].number} ${this.tablePlayerA[3].suit}\nCard 5: ${this.tablePlayerA[4].number} ${this.tablePlayerA[4].suit}\n`
    );
  }

  whoWin() {
    let royalFlashA = this.checkRoyalFlush(this.tablePlayerA),royalFlashB = this.checkRoyalFlush(this.tableplayerB);
    if ((royalFlashA || royalFlashB)&&royalFlashA!=royalFlashB) {
      return royalFlashA == true ? "A" : "B";
    }
    let checkOfKindA = this.checkTableKind(this.tablePlayerA),
      checkOfKindB = this.checkTableKind(this.tableplayerB);
    if ((checkOfKindB == 4 || checkOfKindA == 4)&&checkOfKindA!=checkOfKindB) {
    //   if (checkOfKindA == checkOfKindB) return "tie";
      return checkOfKindA == 4 ? "A" : "B";
    }
    let fullHouseA=this.checkFullHouse(this.tableplayerB),fullHouseB=this.checkFullHouse(this.tablePlayerA);
    if ((fullHouseA == true || fullHouseB == true)&&fullHouseA!=fullHouseB) {
        // if (fullHouseA == fullHouseB) 
            // return "tie";
        return fullHouseA == true ? "A" : "B";
    }
    let flashA=this.checkFlash(this.tablePlayerA),flashB=this.checkFlash(this.tableplayerB);
    if ((flashA == true || flashB == true)&&flashA!=flashB) {
        // if (flashA == flashB) 
        //     return "tie";
        return flashA == true ? "A" : "B";
    }
    let stragihtA=this.checkStright(this.tablePlayerA),stragihtB=this.checkStright(this.tableplayerB);
    if ((stragihtA == true || stragihtB == true)&&stragihtB!=stragihtA) {
        // if (stragihtA == stragihtB) return "tie";
        return stragihtA == true ? "A" : "B";
    } 
       //////check three of kind
    if ((checkOfKindB == 3 || checkOfKindA == 3)&&checkOfKindA!=checkOfKindB) {
        // if (checkOfKindA == checkOfKindB) return "tie";
        return checkOfKindA == 3 ? "A" : "B";
    }
    //check two pairs
    let twoPairsA=this.checkTwoPairs(this.tablePlayerA),twoPairsB=this.checkTwoPairs(this.tableplayerB);
    if ((twoPairsA == 3 || twoPairsB == 3)&&twoPairsA!=twoPairsB) {
        // if (twoPairsA == twoPairsB) return "tie";
        return twoPairsA == 3 ? "A" : "B";
    }
    ////check pair
    if ((checkOfKindB == 2 || checkOfKindA == 2)&&checkOfKindA!=checkOfKindB) {
        // if (checkOfKindA == checkOfKindB) return "tie";
      return checkOfKindA == 2 ? "A" : "B";
    }
    let highCardA=this.checkHighCard(this.tablePlayerA),highCardB=this.checkHighCard(this.tableplayerB);
    if(highCardA==highCardB)
        return 'tie';
    return highCardA>highCardB?"A":"B";
  }

  checkRoyalFlush(table) {
    let check = [false, false, false, false, false];
    table.forEach((card) => {
      switch (card.number) {
        case 10:
          check[0] = true;
          break;
        case "J":
          check[1] = true;
          break;
        case "Q":
          check[2] = true;
          break;
        case "K":
          check[3] = true;
          break;
        case 1:
          check[4] = true;
          break;
      }
    });
    return check[0] && check[1] && check[2] && check[3] && check[4];
    }
    checkHighCard(table){
        let max=2;
        table.forEach(card => {
            if(card.number!='J'&&card.number!='Q'&&card.number!='K'&&card.number!=1){
                if(card.number>max)
                    max=card.number;
            }
            else
            {
                if(card.number=='J'&&max<11)
                    max=11;
                if(card.number=='Q'&&max<12)
                    max=12;
                if(card.number=='K'&&max<13)
                    max=13;
                if(card.number==1&&max<14)
                    max=14;
            }
        });
        return max;
    }
    checkFullHouse = (arr) => {
        let countObj = {};
        arr.forEach(x => {
            countObj[x.number] = (countObj[x.number] || 0) + 1;
        }); 
        let vals = Object.values(countObj);
        if ((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)) {
            return true;
        }
        return false;
    };

    checkFlash(table){
        let check=false;
        let countObj={};
        table.forEach(card => {
            countObj[card.suit] = (countObj[card.suit] || 0) + 1;
        });
        let vals = Object.values(countObj);
        vals.forEach(element => {
            if(element>=5)
                check= true;
        }); 
        return check;
    }
    checkStright(table){
        let array=[false,false,false,false,false,false,false,false,false,false,false,false,false];
        table.forEach(card => {
            if(card.number!='J'&&card.number!='Q'&&card.number!='K')
                array[card.number-1]=true;
            else
            {
                switch (card.number) {
                    case 'J':
                        array[10]=true;
                        break;
                    case 'Q':
                        array[11]=true;
                        break;
                    case 'K':
                        array[12]=true;
                        break;
                }
            }
        });
        let count=0;
        array.forEach(card => {
            if(card)
                count++;
            if(!card&&count<5)
                count=0;
        });
        return count>=5;
    }

    checkTwoPairs(arr) {
        let countObj = {};
        for (let x of arr) {
            countObj[x.number] = (countObj[x.number] || 0) + 1;
        }
        let vals = Object.values(countObj);
        //console.log(vals);
        if (vals.filter((x) => x === 2).length >= 2) return true;
        return false;
    }
    checkOfKind(table, what) {
        let count = 0,
        num;
        table.forEach((card) => {
            if (card.number == what) count++;
        });
        return count;
    }
    
  checkTableKind(table) {
    let count = 0;
    table.forEach((card) => {
      let countTemp = this.checkOfKind(table, card.number);
      if (countTemp > count) count = countTemp;
    });
    return count;
  }
}
class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.loses = 0;
  }

  winner() {
    this.wins++;
  }
  loses() {
    this.loses++;
  }
  showStatus() {
    return `Name: ${this.name}\nWins: ${this.wins}\nLoses: ${this.loses}`;
  }
  showCards() {
    return `Name: ${this.name}\nCards: ${this.cardA.number} ${this.cardA.suit},${this.cardB.number} ${this.cardB.suit}`;
  }
  cardsInHand(cardA, cardB) {
    this.cardA = cardA;
    this.cardB = cardB;
  }
  clearCardsInHand() {
    this.cardA = null;
    this.cardB = null;
  }
}
class DeckOfCards {
  constructor() {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let types = ["hearts", "diams", "clubs", "spades"];
    this.deck = [];
    nums.forEach((num) => {
      types.forEach((type) => {
        this.deck.push({ number: num, suit: type });
      });
    });
    this.shuffle();
  }
  shuffle() {
    for (
      let j, x, i = this.deck.length;
      i;
      j = parseInt(Math.random() * i),
        x = this.deck[--i],
        this.deck[i] = this.deck[j],
        this.deck[j] = x
    );
    return this.deck;
  }
  drawCard() {
    let card = this.deck.shift();
    return card;
  }
}

let deck = new DeckOfCards();
let roy = new Player("Roy");
let dor = new Player("Dor");
let gameA = new Game(roy, dor);
gameA.startGame()
console.log(gameA.whoWin())
console.log(roy.showStatus());
console.log(dor.showStatus());