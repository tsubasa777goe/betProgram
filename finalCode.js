var betAction = [0,38];

var cardCountCheck =(function(){
  var gameCounter = document.getElementsByClassName('count--d4099')[0];
  var gameCounterLast = gameCounter.getElementsByTagName('div')[0].innerHTML;
  gameCounterLast = Number(gameCounterLast);
  if(gameCounterLast === 0){
      console.log("カウントをリセットします");
  }else{
    console.log(gameCounterLast);
    console.log("カウント続行");
  }
});

var gamePlayTimes =(function () {
    var g_cnt = 0;
    var intervalID = setInterval(function () {
      g_cnt++;
      console.log(g_cnt);
      if (g_cnt > 1) {
        cardCountCheck();
        clearInterval(intervalID);
      }
    }, 1000);
});

var cardRecord = (function(){
    var pCards = document.getElementsByClassName('cards--da884')[0];
    var p1stCard = pCards.getElementsByClassName('card--dbf7e')[0];
    var p1stCardNum = p1stCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1] ;
    var p2ndCard = pCards.getElementsByClassName('card--dbf7e')[1];
    var p2ndCardNum = p2ndCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    var p3rdCard = pCards.getElementsByClassName('horizontal--b971d')[0];
    if(p3rdCard !== undefined){
        var p3rdCardNum = p3rdCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    }

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

    var bCards = document.getElementsByClassName('cards--da884')[1];
    var b1stCard = bCards.getElementsByClassName('card--dbf7e')[0];
    var b1stCardNum = b1stCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1] ;
    var b2ndCard = bCards.getElementsByClassName('card--dbf7e')[1];
    var b2ndCardNum = b2ndCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    var b3rdCard = bCards.getElementsByClassName('horizontal--b971d')[0];
    if(b3rdCard !== undefined){
        var b3rdCardNum = b3rdCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    }

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

    var cardsResult = [[pHandsNum],[bHandsNum]];
    console.log(cardsResult[0][0],cardsResult[0][1],cardsResult[0][2]);
    console.log(cardsResult[1][0],cardsResult[1][1],cardsResult[1][2]);

    p3rdCardNum =　undefined;
    pHandsNum[2] = undefined;
    b3rdCardNum =　undefined;
    bHandsNum[2] = undefined;
});

var betChipCulc =(function(){
    var betChips = betAction[1];
    var twentyFiveChipBet = 0;
    var fiveChipBet = 0;
    var oneChipBet = 0;
    while(betChips>=25){
        betChips = betChips - 25;
        twentyFiveChipBet ++;
    }
    while(betChips>=5){
        betChips = betChips - 5;
        fiveChipBet ++;
    }
    while(betChips>=1){
        betChips = betChips - 1;
        oneChipBet ++;
    }
    var betChipSelect = [oneChipBet, fiveChipBet, twentyFiveChipBet];
    console.log(betChipSelect);
    return betChipSelect;
});

function playerBetAutoFunc() {
    console.log('プレイヤーへべット');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                var betChips = betAction[1];
                var twentyFiveChipBet = 0;
                var fiveChipBet = 0;
                var oneChipBet = 0;
                while(betChips>=25){
                    betChips = betChips - 25;
                    twentyFiveChipBet ++;
                }
                while(betChips>=5){
                    betChips = betChips - 5;
                    fiveChipBet ++;
                }
                while(betChips>=1){
                    betChips = betChips - 1;
                    oneChipBet ++;
                }

            var autoBetTwentyFive =document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 51 }));
            (function () {
                var g_cntTwentyFive = twentyFiveChipBet;
                var intervalID = setInterval(function () {
                    if (g_cntTwentyFive > 0) {
                        console.log(g_cntTwentyFive);
                        g_cntTwentyFive--;
                        var playerBetAuto =(function(f,s){s=document.createElement("script");s.src
                            ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
                            s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
                        (function($){$('.player--5adf8').trigger("click")});
                    }else{
                        clearInterval(intervalID);
                    }
                }, 250);
            })();
            resolve();
        }, 1000);
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                            var betChips = betAction[1];
                            var twentyFiveChipBet = 0;
                            var fiveChipBet = 0;
                            var oneChipBet = 0;
                            while(betChips>=25){
                            betChips = betChips - 25;
                            twentyFiveChipBet ++;
                            }
                            while(betChips>=5){
                                betChips = betChips - 5;
                                fiveChipBet ++;
                            }
                            while(betChips>=1){
                            betChips = betChips - 1;
                            oneChipBet ++;
                            }
                var autoBetFive =document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 50 }));
                (function () {
                    var g_cntFive = fiveChipBet;
                    var intervalID = setInterval(function () {
                        if (g_cntFive > 0) {
                            console.log(g_cntFive);
                            g_cntFive--;
                            var playerBetAuto =(function(f,s){s=document.createElement("script");s.src
                                ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
                                s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
                            (function($){$('.player--5adf8').trigger("click")});
                        }else{
                            clearInterval(intervalID);
                        }
                    }, 250);
                })();
                resolve();
            }, 1100)
        })
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                            var betChips = betAction[1];
                            var twentyFiveChipBet = 0;
                            var fiveChipBet = 0;
                            var oneChipBet = 0;
                            while(betChips>=25){
                            betChips = betChips - 25;
                            twentyFiveChipBet ++;
                            }
                            while(betChips>=5){
                                betChips = betChips - 5;
                                fiveChipBet ++;
                            }
                            while(betChips>=1){
                            betChips = betChips - 1;
                            oneChipBet ++;
                            }
                var autoBetFive =document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 49 }));
                (function () {
                    var g_cntOne = oneChipBet;
                    var intervalID = setInterval(function () {
                        if (g_cntOne > 0) {
                            console.log(g_cntOne);
                            g_cntOne--;
                            var playerBetAuto =(function(f,s){s=document.createElement("script");s.src
                                ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
                                s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
                            (function($){$('.player--5adf8').trigger("click")});
                        }else{
                            clearInterval(intervalID);
                        }
                    }, 250);
                })();
            }, 1500);
        })
    })
}

function bankerBetAutoFunc() {
    console.log('バンカーへべット');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                            var betChips = betAction[1];
                            var twentyFiveChipBet = 0;
                            var fiveChipBet = 0;
                            var oneChipBet = 0;
                            while(betChips>=25){
                            betChips = betChips - 25;
                            twentyFiveChipBet ++;
                            }
                            while(betChips>=5){
                                betChips = betChips - 5;
                                fiveChipBet ++;
                            }
                            while(betChips>=1){
                            betChips = betChips - 1;
                            oneChipBet ++;
                            }
            var autoBetTwentyFive =document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 51 }));
            (function () {
                var g_cntTwentyFive = twentyFiveChipBet;
                var intervalID = setInterval(function () {
                    if (g_cntTwentyFive > 0) {
                        g_cntTwentyFive--;
                        var bankerBetAuto =(function(f,s){s=document.createElement("script");s.src
                            ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
                            s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
                        (function($){$('.banker--23b00').trigger("click")});
                    }else{
                        clearInterval(intervalID);
                    }
                }, 250);
            })();
            resolve();
        }, 1000);
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                            var betChips = betAction[1];
                            var twentyFiveChipBet = 0;
                            var fiveChipBet = 0;
                            var oneChipBet = 0;
                            while(betChips>=25){
                            betChips = betChips - 25;
                            twentyFiveChipBet ++;
                            }
                            while(betChips>=5){
                                betChips = betChips - 5;
                                fiveChipBet ++;
                            }
                            while(betChips>=1){
                            betChips = betChips - 1;
                            oneChipBet ++;
                            }
                var autoBetFive =document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 50 }));
                (function () {
                    var g_cntFive = fiveChipBet;
                    var intervalID = setInterval(function () {
                        if (g_cntFive > 0) {
                            g_cntFive--;
                            var bankerBetAuto =(function(f,s){s=document.createElement("script");s.src
                                ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
                                s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
                            (function($){$('.banker--23b00').trigger("click")});
                        }else{
                            clearInterval(intervalID);
                        }
                    }, 250);
                })();
                resolve();
            }, 1100)
        })
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                            var betChips = betAction[1];
                            var twentyFiveChipBet = 0;
                            var fiveChipBet = 0;
                            var oneChipBet = 0;
                            while(betChips>=25){
                            betChips = betChips - 25;
                            twentyFiveChipBet ++;
                            }
                            while(betChips>=5){
                                betChips = betChips - 5;
                                fiveChipBet ++;
                            }
                            while(betChips>=1){
                            betChips = betChips - 1;
                            oneChipBet ++;
                            }
                var autoBetFive =document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 49 }));
                (function () {
                    var g_cntOne = oneChipBet;
                    var intervalID = setInterval(function () {
                        if (g_cntOne > 0) {
                            g_cntOne--;
                            var bankerBetAuto =(function(f,s){s=document.createElement("script");s.src
                                ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
                                s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
                            (function($){$('.banker--23b00').trigger("click")});
                        }else{
                            clearInterval(intervalID);
                        }
                    }, 250);
                })();
            }, 1300);
        })
    })
}

function lookBetAutoFunc() {
    return console.log('ルックします');
    }

function betFor(){
    if(betAction[0]===0){
        playerBetAutoFunc();
    }else if(betAction[0]===1){
        bankerBetAutoFunc();
    }else{
        lookBetAutoFunc();
    }
}


var element = document.getElementsByClassName('gameResult--423e1')[0];
var counter = true;
var winOrLose = new MutationObserver(function(record, observer) {
  if(counter){
    console.log("勝敗が決まりました");
    cardRecord();
    betAction = betAction;
    console.log('[べット先,べット額]');
    console.log(betAction);
    counter = !counter;
    }else{
        new Promise((resolve, reject) => {
            setTimeout(() => {
            gamePlayTimes();
            resolve();
            }, 100);
        }) .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("べットします");
            betFor();
            counter = !counter;
            resolve();
            }, 1500)
        })
        })
    }
});
var config = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true
};

winOrLose.observe(element, config);
