var element = document.getElementsByClassName('gameResult--423e1')[0];
var counter = 0;

var automaticBetSystem =
  (function () {
    var g_cnt = 0;
    var intervalID = setInterval(function () {
      g_cnt++;
      console.log(g_cnt);
      if (g_cnt > 2) {
        (function(f,s){s=document.createElement("script");s.src
  ="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
  s.onload=function(){f(jQuery.noConflict(true))};document.body.appendChild(s)})
(function($){$('.player--5adf8').trigger("click")});console.log("プレイヤーにベット");
        clearInterval(intervalID);
      }
    }, 1000);
  });


var winOrLose = new MutationObserver(function(record, observer) {
  if(counter === 0){
    console.log("勝敗が決まりました");
    for(let i=0;i<=5;i++){
    console.log(document.getElementsByClassName('wrapper--b45eb')[i]);
    counter++;
      }
    }else{
      console.log("ベットします");
      counter = 0;
      automaticBetSystem();
    }
});


var config = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
};

winOrLose.observe(element, config);