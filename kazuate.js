// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
let b = document.querySelector('button#kaitou');
b.addEventListener('click',hantei); 
let n,yoso,p,j;
j = document.querySelector('span[id="nannde"]');
//pは結果表示用、nとyosoとjは入力した値、
let i = document.querySelector('span[id="kaisu"]'); 
i.textContent = kaisu ;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  console.log(kaisu);
  n = document.querySelector('input[name="yosou"]'); 
  yoso = Number(n.value);
  kaisu = kaisu + 1;
  p = document.querySelector('span#answer');
  j.textContent = yoso;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  i.textContent = kaisu;
  if(kaisu <= 3){
    if(kotae === yoso){
      p.textContent = '正解です。おめでとう！';
      kaisu = kaisu + 3;
    }else{
      if(kaisu <= 2){
          if(yoso < kotae){
            p.textContent = 'まちがい、答えはもっと大きいですよ';
          }else{
            p.textContent = 'まちがい、答えはもっと小さいですよ';
          }
      }else if(kaisu===3){
        p.textContent = 'まちがい、残念でした答えは'+kotae+'でした。';
      }
    }
  }else{
    p.textContent = '答えは'+kotae+'でした。すでにゲームは終わっています';
  }
}
