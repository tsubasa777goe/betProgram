var betAction = [0,1];

(function(f,s){s=document.createElement("script");s.src
="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
(function($){

    var gamePlayTimes = function(){
        var twoSecTimer = 0;
        var intervalID = setInterval(function(){
            twoSecTimer++;
            if (twoSecTimer > 1) {
                var latestGameCount = Number($('.count--d4099').eq(0).text());
                if(latestGameCount === 0){
                    console.log("カウンティングをリセットします");
                }else{
                    console.log(latestGameCount);
                    console.log("シュー継続、カウンティング続行");
                }
                clearInterval(intervalID);
            }
        }, 1000);
    };

    var cardRecord = function(){
        var p1stCardNum = $('.cards--da884:eq(0) .card--dbf7e:eq(0) use:eq(2)')[0].href.baseVal.split('-')[1];
        var p2ndCardNum = $('.cards--da884:eq(0) .card--dbf7e:eq(1) use:eq(2)')[0].href.baseVal.split('-')[1];
        var p3rdCardNum =　undefined;
        if($('.cards--da884:eq(0) .horizontal--b971d:eq(0)')[0] !== undefined){
            p3rdCardNum = $('.cards--da884:eq(0) .horizontal--b971d:eq(0) use:eq(2)')[0].href.baseVal.split('-')[1];
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

        var b1stCardNum = $('.cards--da884:eq(1) .card--dbf7e:eq(0) use:eq(2)')[0].href.baseVal.split('-')[1];
        var b2ndCardNum = $('.cards--da884:eq(1) .card--dbf7e:eq(1) use:eq(2)')[0].href.baseVal.split('-')[1];
        var b3rdCardNum =　undefined;
        if($('.cards--da884:eq(1) .horizontal--b971d:eq(0)')[0] !== undefined){
            b3rdCardNum = $('.cards--da884:eq(1) .horizontal--b971d:eq(0) use:eq(2)')[0].href.baseVal.split('-')[1];
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
        pHandsNum[2] = undefined;
        bHandsNum[2] = undefined;
    };

    function betForPlayer() {
        console.log('プレイヤーへべット');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var betChips = betAction[1];
                var numOfTwentyFiveChips = 0;
                var numOfFiveChips = 0;
                var numOfOneChips = 0;
                while(betChips>=25){
                    betChips = betChips - 25;
                    numOfTwentyFiveChips ++;
                }
                while(betChips>=5){
                    betChips = betChips - 5;
                    numOfFiveChips ++;
                }
                while(betChips>=1){
                    betChips = betChips - 1;
                    numOfOneChips ++;
                }
                var autoBetTwentyFiveDollarChip = document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 51 }));
                (function(){
                    var intervalID = setInterval(function(){
                        if (numOfTwentyFiveChips > 0) {
                            numOfTwentyFiveChips--;
                            $('.player--5adf8').trigger("click");
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
                    var numOfTwentyFiveChips = 0;
                    var numOfFiveChips = 0;
                    var numOfOneChips = 0;
                    while(betChips>=25){
                        betChips = betChips - 25;
                        numOfTwentyFiveChips ++;
                    }
                    while(betChips>=5){
                        betChips = betChips - 5;
                        numOfFiveChips ++;
                    }
                    while(betChips>=1){
                        betChips = betChips - 1;
                        numOfOneChips ++;
                    }
                    var autoBetFiveDollarChip = document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 50 }));
                    (function(){
                        var intervalID = setInterval(function(){
                            if (numOfFiveChips > 0) {
                                numOfFiveChips--;
                                $('.player--5adf8').trigger("click");
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
                    var numOfTwentyFiveChips = 0;
                    var numOfFiveChips = 0;
                    var numOfOneChips = 0;
                    while(betChips>=25){
                        betChips = betChips - 25;
                        numOfTwentyFiveChips ++;
                    }
                    while(betChips>=5){
                        betChips = betChips - 5;
                        numOfFiveChips ++;
                    }
                    while(betChips>=1){
                        betChips = betChips - 1;
                        numOfOneChips ++;
                    }
                    var autoBetOneDollarChip = document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 49 }));
                    (function(){
                        var intervalID = setInterval(function(){
                            if (numOfOneChips > 0) {
                                numOfOneChips--;
                                $('.player--5adf8').trigger("click");
                            }else{
                                clearInterval(intervalID);
                            }
                        }, 250);
                    })();
                }, 1500);
            })
        })
    }

    function betForBanker() {
        console.log('バンカーへべット');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var betChips = betAction[1];
                var numOfTwentyFiveChips = 0;
                var numOfFiveChips = 0;
                var numOfOneChips = 0;
                while(betChips>=25){
                    betChips = betChips - 25;
                    numOfTwentyFiveChips ++;
                }
                while(betChips>=5){
                    betChips = betChips - 5;
                    numOfFiveChips ++;
                }
                while(betChips>=1){
                    betChips = betChips - 1;
                    numOfOneChips ++;
                }
                var autoBetTwentyFiveDollarChip =document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 51 }));
                (function(){
                    var intervalID = setInterval(function(){
                        if (numOfTwentyFiveChips > 0) {
                            numOfTwentyFiveChips--;
                            $('.banker--23b00').trigger("click");
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
                    var numOfTwentyFiveChips = 0;
                    var numOfFiveChips = 0;
                    var numOfOneChips = 0;
                    while(betChips>=25){
                        betChips = betChips - 25;
                        numOfTwentyFiveChips ++;
                    }
                    while(betChips>=5){
                        betChips = betChips - 5;
                        numOfFiveChips ++;
                    }
                    while(betChips>=1){
                        betChips = betChips - 1;
                        numOfOneChips ++;
                    }
                    var autoBetFiveDollarChip =document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 50 }));
                    (function(){
                        var intervalID = setInterval(function(){
                            if (numOfFiveChips > 0){
                                numOfFiveChips--;
                                $('.banker--23b00').trigger("click");
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
                    var numOfTwentyFiveChips = 0;
                    var numOfFiveChips = 0;
                    var numOfOneChips = 0;
                    while(betChips>=25){
                        betChips = betChips - 25;
                        numOfTwentyFiveChips ++;
                    }
                    while(betChips>=5){
                        betChips = betChips - 5;
                        numOfFiveChips ++;
                    }
                    while(betChips>=1){
                        betChips = betChips - 1;
                        numOfOneChips ++;
                    }
                    var autoBetOneDollarChip =document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 49 }));
                    (function(){
                        var intervalID = setInterval(function(){
                            if (numOfOneChips > 0){
                                numOfOneChips--;
                                $('.banker--23b00').trigger("click");
                            }else{
                                clearInterval(intervalID);
                            }
                        }, 250);
                    })();
                }, 1300);
            })
        })
    }

    function look(){
        return console.log('ルックします');
    }

    function decideToBet(){
        if(betAction[0]===0){
            betForPlayer();
        }else if(betAction[0]===1){
            betForBanker();
        }else{
            look();
        }
    }

    var distributedCards = $('.gameResult--423e1')[0];
    var counter = true;
    var winOrLose = new MutationObserver(function(record, observer){
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
            }).then(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log("べットします");
                        decideToBet();
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
    winOrLose.observe(distributedCards, config);
});