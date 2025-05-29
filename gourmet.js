
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for(let r of data.results.shop){
    console.log(r.name);
    console.log(r.station_name);
    console.log(r.address);
    console.log(r.genre.name);
    console.log(r.budget.name);
    console.log(r.open);
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
//nは入力したもの,bはボタン押した時の反応
function printDom(data) {
  let o = document.querySelectorAll('#result, p');
  for (let el of o) {
    el.remove();
  }
  let body = document.querySelector('body'); 
  let p = document.createElement('p');
  p.textContent = '(検索結果は'+data.results.shop.length+'件)'
  body.insertAdjacentElement('beforeend',p);
  let count = 1;
  for(let r of data.results.shop){
    let p1 = document.createElement('p');
    p1.textContent = '検索結果'+count+'件目';
    body.insertAdjacentElement('beforeend',p1);
    //div#resultをbodyの中に作り、そこにtableを作る
    let div = document.createElement('div'); 
    div.setAttribute('id','result');
    body.insertAdjacentElement('beforeend',div);
    let table = document.createElement('table');
    div.insertAdjacentElement('beforeend',table);
    //theadを作る
    let thead = document.createElement('thead'); 
    table.insertAdjacentElement('beforeend',thead);
    let tr = document.createElement('tr'); 
    thead.insertAdjacentElement('beforeend',tr); 
    let th = document.createElement('th'); 
    tr.insertAdjacentElement('beforeend',th);
    th.setAttribute('scope','col'); 
    th.textContent = '名前'; 
    let td = document.createElement('td'); 
    tr.insertAdjacentElement('beforeend',td);
    td.setAttribute('scope','col'); 
    td.setAttribute('id','name'); 
    td.textContent=r.name;
    //tbody作る
    let tbody = document.createElement('tbody'); 
    table.insertAdjacentElement('beforeend',tbody);
    //1つ目のtr
    let tr1 = document.createElement('tr'); 
    tbody.insertAdjacentElement('beforeend',tr1);
    let th1 = document.createElement('th'); 
    let td1 = document.createElement('td');
    tr1.insertAdjacentElement('beforeend',th1);
    tr1.insertAdjacentElement('beforeend',td1); 
    th1.setAttribute('scope','row'); 
    td1.setAttribute('id','stationname');
    th1.textContent= '最寄駅'; 
    td1.textContent= r.station_name;
    //2つ目のtr
    let tr2 = document.createElement('tr');
    tbody.insertAdjacentElement('beforeend',tr2);
    let th2 = document.createElement('th');
    let td2 = document.createElement('td');
    tr2.insertAdjacentElement('beforeend',th2);
    tr2.insertAdjacentElement('beforeend',td2);
    th2.setAttribute('scope','row');
    td2.setAttribute('id','address');
    th2.textContent = '住所';
    td2.textContent = r.address;
    //3つ目のtr
    let tr3 = document.createElement('tr');
    tbody.insertAdjacentElement('beforeend',tr3);
    let th3 = document.createElement('th');
    let td3 = document.createElement('td');
    tr3.insertAdjacentElement('beforeend',th3);
    tr3.insertAdjacentElement('beforeend',td3);
    th3.setAttribute('scope','row');
    td3.setAttribute('id','genre');
    th3.textContent = 'ジャンル';
    td3.textContent = r.genre.name;
    //4つ目のtr
    let tr4 = document.createElement('tr');
    tbody.insertAdjacentElement('beforeend',tr4);
    let th4 = document.createElement('th');
    let td4 = document.createElement('td');
    tr4.insertAdjacentElement('beforeend',th4);
    tr4.insertAdjacentElement('beforeend',td4);
    th4.setAttribute('scope','row');
    td4.setAttribute('id','budget');
    th4.textContent = '予算';
    td4.textContent = r.budget.name;
    //5つ目のtr
    let tr5 = document.createElement('tr');
    tbody.insertAdjacentElement('beforeend',tr5);
    let th5 = document.createElement('th');
    let td5 = document.createElement('td');
    tr5.insertAdjacentElement('beforeend',th5);
    tr5.insertAdjacentElement('beforeend',td5);
    th5.setAttribute('scope','row');
    td5.setAttribute('id','open');
    th5.textContent = '営業時間';
    td5.textContent = r.open;
    count = count + 1;
  }
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b2 = document.querySelector('button#kensaku');
b2.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let ny = document.getElementById('genre'); 
  let nx = ny.options[ny.selectedIndex];
  let yx = nx.value 
  let url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+yx+".json";
  axios.get(url)
       .then(showResult)
       .catch(showError)
       .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}