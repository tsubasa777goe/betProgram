var counter = 0;

var shoeReset =(function(){
  var gameCounter = document.getElementsByClassName('count--d4099')[0];
  var gameCounterLast = gameCounter.getElementsByTagName('div')[0].innerHTML;
  console.log(gameCounterLast);
  if(gameCounterLast !== 0){
        console.log("ベットします");
        (function(f,s){s=document.createElement("script");s.src
        ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
        s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
        (function($){$('.player--5adf8').trigger("click")});console.log("プレイヤーにベット");
  }else{
      console.log("ベットしません");
      console.log("シューをリセットします");
  }
});

var autoBet =
  (function () {
    var g_cnt = 0;
    var intervalID = setInterval(function () {
      g_cnt++;
      console.log(g_cnt);
      if (g_cnt > 2) {
        shoeReset();
        clearInterval(intervalID);
      }
    }, 1000);
  });


var cardRecord = (function(){
    var pCards = document.getElementsByClassName('cards--da884')[0];
    var p1stCard = pCards.getElementsByClassName('card--dbf7e')[0];
    var p1stCardNum = p1stCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1] ;
    console.log(p1stCardNum);
    var p2ndCard = pCards.getElementsByClassName('card--dbf7e')[1];
    var p2ndCardNum = p2ndCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    console.log(p2ndCardNum);
    var p3rdCard = pCards.getElementsByClassName('horizontal--b971d')[0];
    if(p3rdCard !== undefined){
        var p3rdCardNum = p3rdCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    }
    console.log(p3rdCardNum);

    var pHands = [p1stCardNum,p2ndCardNum,p3rdCardNum];
    var pHandsNum = pHands.map(function(cardHand){
        if(cardHand === '10' || cardHand === 'J' || cardHand === 'Q' || cardHand === 'K'){
            return cardHand = 0;
        }else if(cardHand === 'A'){
            return cardHand = 1;
        }else{
            return Number(cardHand);
        }
    });
console.log(pHandsNum);
p3rdCardNum =　undefined;
pHandsNum[2] = undefined;
    var bCards = document.getElementsByClassName('cards--da884')[1];
    var b1stCard = bCards.getElementsByClassName('card--dbf7e')[0];
    var b1stCardNum = b1stCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1] ;
    console.log(b1stCardNum);
    var b2ndCard = bCards.getElementsByClassName('card--dbf7e')[1];
    var b2ndCardNum = b2ndCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    console.log(b2ndCardNum);
    var b3rdCard = bCards.getElementsByClassName('horizontal--b971d')[0];
    if(b3rdCard !== undefined){
        var b3rdCardNum = b3rdCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    }
    console.log(b3rdCardNum);

    var bHands = [b1stCardNum,b2ndCardNum,b3rdCardNum];
    var bHandsNum = bHands.map(function(cardHand){
        if(cardHand === '10' || cardHand === 'J' || cardHand === 'Q' || cardHand === 'K'){
            return cardHand = 0;
        }else if(cardHand === 'A'){
            return cardHand = 1;
        }else{
            return Number(cardHand);
        }
    });
console.log(bHandsNum);
b3rdCardNum =　undefined;
bHandsNum[2] = undefined;
});

var element = document.getElementsByClassName('gameResult--423e1')[0];
var winOrLose = new MutationObserver(function(record, observer) {
  if(counter === 0){
    console.log("勝敗が決まりました");
    cardRecord();
    counter++;
    }else{
      autoBet();
      counter = 0;
    }
});
var config = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
};

winOrLose.observe(element, config);