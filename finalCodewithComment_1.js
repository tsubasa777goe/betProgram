//監視する要素の指定、勝敗結果
var element = document.getElementsByClassName('gameResult--423e1')[0];

// カウンター、勝敗表示の表示・非表示を検出
var counter = 0;

var playerBet = () =>{
  document.getElementsByClassName("betSpotUnderlay--cb0b1").click();
}
playerBet();

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



var automaticBetSystem =
  (function () {
    var g_cnt = 0;
    var intervalID = setInterval(function () {
      g_cnt++;
      console.log(g_cnt);
      if (g_cnt > 2) {
        // プレイヤーにベットする関数
        (function(f,s){s=document.createElement("script");s.src
  ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
  s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
(function($){$('.player--5adf8').trigger("click")});console.log("プレイヤーにベット");
        clearInterval(intervalID);
      }
    }, 1000);
  });


// 結果表示〜ベット操作まで
var winOrLose = new MutationObserver(function(record, observer) {
    /* 変更検出時に実行する内容 */
  if(counter === 0){
        /* 勝敗結果表示時の実行内容 */
        /* カード情報の取得 */
    console.log("勝敗が決まりました");
    for(let i=0;i<=5;i++){
    console.log(document.getElementsByClassName('wrapper--b45eb')[i]);
    counter++;
      }
    }else{
        /* 勝敗結果非表示時の実行内容 */
        /* ベットする */
      console.log("ベットします");
// プレイヤーにベットする関数
automaticBetSystem();

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


//監視の終了
// winOrLose.disconnect();