// betAction[ベット先,べット額]を記載
var betAction = [0,3];

//ゲーム回数をチェックする関数。setIntervalにより、関数の実行（勝敗非表示の検出）
// から2秒後にチェックする
// latestGameCountが0であれば、シューのカウントをリセットする
var gamePlayTimes = function(){
    var twoSecTimer = 0;
    var intervalID = setInterval(function(){
        twoSecTimer++;
        if (twoSecTimer > 1) {
            var gameCounter = document.getElementsByClassName('count--d4099')[0];
            var latestGameCount = gameCounter.getElementsByTagName('div')[0].innerHTML;
            latestGameCount = Number(latestGameCount);
            if(latestGameCount === 0){
                console.log("カウンティングをリセットします");
            }else{
                console.log(latestGameCount);
                console.log("カウンティング続行");
            }
            clearInterval(intervalID);
        }
    }, 1000);
};

// 配布カードを記録する関数
var cardRecord = function(){
    // プレイヤーへの配布
    // class='player--5adf8'がプレイヤーのハンド情報の全て
    // 1枚目のカードを取得
    var pCards = document.getElementsByClassName('cards--da884')[0];
    var p1stCard = pCards.getElementsByClassName('card--dbf7e')[0];
    var p1stCardNum = p1stCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1] ;
    // console.log(p1stCardNum);
    // 2枚目のカードを取得
    var p2ndCard = pCards.getElementsByClassName('card--dbf7e')[1];
    var p2ndCardNum = p2ndCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    // console.log(p2ndCardNum);
    // 3枚目のカードを取得(有無をチェックし、存在していればカードを取得、無ければundefinedをreturn)
    var p3rdCard = pCards.getElementsByClassName('horizontal--b971d')[0];
    if(p3rdCard !== undefined){
        var p3rdCardNum = p3rdCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    }
    // console.log(p3rdCardNum);

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
    // console.log(pHandsNum);

    // バンカーへの配布
    // class='banker--23b00'がバンカーのハンド情報の全て
    // 1枚目のカードを取得
    var bCards = document.getElementsByClassName('cards--da884')[1];
    var b1stCard = bCards.getElementsByClassName('card--dbf7e')[0];
    var b1stCardNum = b1stCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1] ;
    // console.log(b1stCardNum);
    // 2枚目のカードを取得
    var b2ndCard = bCards.getElementsByClassName('card--dbf7e')[1];
    var b2ndCardNum = b2ndCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    // console.log(b2ndCardNum);
    // 3枚目のカードを取得(有無をチェックし、存在していればカードを取得、無ければundefinedをreturn)
    var b3rdCard = bCards.getElementsByClassName('horizontal--b971d')[0];
    if(b3rdCard !== undefined){
        var b3rdCardNum = b3rdCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    }
    // console.log(b3rdCardNum);

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
    // console.log(bHandsNum);

    var cardsResult = [[pHandsNum],[bHandsNum]];
    console.log(cardsResult[0][0],cardsResult[0][1],cardsResult[0][2]);
    console.log(cardsResult[1][0],cardsResult[1][1],cardsResult[1][2]);

    //次ゲームに影響するため、プレイヤー、バンカーの３枚目情報をリセット
    p3rdCardNum =　undefined;
    pHandsNum[2] = undefined;
    b3rdCardNum =　undefined;
    bHandsNum[2] = undefined;
    // （注意）ゲーム側の出力、全て型：Numberに変換
    // 2〜9：そのまま数字が表示
    // A：Aと表示のため「1」に書き換え
    // J,Q,K→J,Q,Kと表示されるため、「0」に書き換え
    // 10→「0」に書き換え
};

// (1)べットするチップ枚数を確定させる関数。[1ドル,5ドル,25ドル]の順に配列で出力
// けれどもうまく呼び出せないため、各べットの関数の中で計算している
var betNumOfChips =function(){
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
    var totalNumOfBetChips = [numOfOneChips, numOfFiveChips, numOfTwentyFiveChips];
    console.log(totalNumOfBetChips);
    return totalNumOfBetChips;
};

// プレイヤーへべットする関数
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

//プレイヤーにべットするときに用いる
// betForPlayer();


// バンカーへべットする関数
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

// ルックの処理
function look(){
    return console.log('ルックします');
    }

// ベット先を確定する処理[0:Player,1:Banker,2:Look]
function decideToBet(){
    if(betAction[0]===0){
        betForPlayer();
    }else if(betAction[0]===1){
        betForBanker();
    }else{
        look();
    }
}


//監視する要素の指定
var distributedCards = document.getElementsByClassName('gameResult--423e1')[0];
// flag:勝敗表示の表示時true,非表示時false
var counter = true;
// 「勝敗表示を検出〜配布カード情報取得〜結果非表示を検出〜ベット操作」を繰り返す
var winOrLose = new MutationObserver(function(record, observer){
  // 変更検出時に実行する内容
  if(counter){
        // 勝敗結果表示時の実行内容
        // カード情報の取得
    console.log("勝敗が決まりました");
    // カード情報を取得する関数
    cardRecord();
    //「重要」外部からの情報を受け、常に更新を要する箇所
    // betAction[ベット先、べット額]（べット先：0:Player,1:Banker,2:Look）（結果をもとに、次のべット先、べット額を決定）
    betAction = betAction;
    console.log('[べット先,べット額]');
    console.log(betAction);
    //各チップのべット枚数を確定

    counter = !counter;
    }else{
        // 勝敗結果非表示時から２秒後、ゲームカウントをチェックする
        // 0であればシューのカウンティングをリセットする
        new Promise((resolve, reject) => {
            setTimeout(() => {
            gamePlayTimes();
            resolve();
            }, 100);
        }) .then(() => {
        // プレイヤー、バンカー、ルックのいずれかを実行
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

//監視する「もの」の指定（必ず1つ以上trueにする）
var config = {
  childList: true,//「子ノード（テキストノードも含む）」の変化
  attributes: true,//「属性」の変化
  characterData: true,//「テキストノード」の変化
  subtree: true//孫以降のノードの変化も検出
};

//監視の開始
winOrLose.observe(distributedCards, config);


//監視の終了、ただし使用することはない。
// 停止は手動で行う
// winOrLose.disconnect();