// プレイヤーにベットする関数
(function(f,s){s=document.createElement("script");s.src
  ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
  s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
(function($){$('.player--5adf8').trigger("click")});console.log("プレイヤーにベット");


// バンカーにベットする関数
(function(f,s){s=document.createElement("script");s.src
  ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
  s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
(function($){$('.banker--23b00').trigger("click")});console.log("バンカーにベット");


// シューが終わった際にリセットする関数
var shoeReset =(function(){
  var gameCounter = document.getElementsByClassName('count--d4099')[0];
  var gameCounterLast = gameCounter.getElementsByTagName('div')[0].innerHTML;
  console.log(gameCounterLast);
  if(gameCounterLast !== 0){
        console.log("ベットします");
              // プレイヤーにベットする関数
        (function(f,s){s=document.createElement("script");s.src
        ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
        s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
        (function($){$('.player--5adf8').trigger("click")});console.log("プレイヤーにベット");
  }else{
      console.log("ベットしません");
      console.log("シューをリセットします");
  }
});


//自動的にベットする関数。setIntervalにより、関数の実行から３秒後にベットする
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


// 配布カードを記録する関数
var cardRecord = (function(){
    // プレイヤーへの配布
    // class='player--5adf8'がプレイヤーのハンド情報の全て
    // 1枚目のカードを取得
    var pCards = document.getElementsByClassName('cards--da884')[0];
    var p1stCard = pCards.getElementsByClassName('card--dbf7e')[0];
    var p1stCardNum = p1stCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1] ;
    console.log(p1stCardNum);
    // 2枚目のカードを取得
    var p2ndCard = pCards.getElementsByClassName('card--dbf7e')[1];
    var p2ndCardNum = p2ndCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    console.log(p2ndCardNum);
    // 3枚目のカードを取得(有無をチェックし、存在していればカードを取得、無ければundefinedをreturn)
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
//次ゲームに影響するため、リセット
p3rdCardNum =　undefined;
pHandsNum[2] = undefined;

    // バンカーへの配布
    // class='banker--23b00'がバンカーのハンド情報の全て
    // 1枚目のカードを取得
    var bCards = document.getElementsByClassName('cards--da884')[1];
    var b1stCard = bCards.getElementsByClassName('card--dbf7e')[0];
    var b1stCardNum = b1stCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1] ;
    console.log(b1stCardNum);
    // 2枚目のカードを取得
    var b2ndCard = bCards.getElementsByClassName('card--dbf7e')[1];
    var b2ndCardNum = b2ndCard.getElementsByTagName('use')[2].href.baseVal.split('-')[1];
    console.log(b2ndCardNum);
    // 3枚目のカードを取得(有無をチェックし、存在していればカードを取得、無ければundefinedをreturn)
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
//次ゲームに影響するため、リセット
b3rdCardNum =　undefined;
bHandsNum[2] = undefined;
// （注意）ゲーム側の出力、全て型：Numberに変換
// 2〜9：そのまま数字が表示
// A：Aと表示のため「1」に書き換え
// J,Q,K→J,Q,Kと表示されるため、「0」に書き換え
// 10→「0」に書き換え
});


//監視する要素の指定
var element = document.getElementsByClassName('gameResult--423e1')[0];
// カウンター、勝敗表示の表示・非表示を検出する際に用いる
var counter = 0;
// 「勝敗表示を検出〜配布カード情報取得〜結果非表示を検出〜ベット操作」を繰り返す
var winOrLose = new MutationObserver(function(record, observer) {
  // 変更検出時に実行する内容
  if(counter === 0){
        // 勝敗結果表示時の実行内容
        // カード情報の取得
    console.log("勝敗が決まりました");
    // カード情報を取得する関数
    cardRecord();
    counter++;
    }else{
        // 勝敗結果非表示時、自動でベットする関数を実行
      autoBet();
      counter = 0;
    }
});

//監視する「もの」の指定（必ず1つ以上trueにする）
var config = {
  childList: true,//「子ノード（テキストノードも含む）」の変化
  attributes: true,//「属性」の変化
  characterData: true,//「テキストノード」の変化
  subtree: true,//孫以降のノードの変化も検出
};

//監視の開始
winOrLose.observe(element, config);


//監視の終了、ただし使用することはない。
// 停止は手動で行う
// winOrLose.disconnect();