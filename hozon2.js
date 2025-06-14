
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
  let n = document.querySelector('input[name="sentaku"]'); 
  let b = document.querySelector('button#kensaku');
  b.addEventListener('click',printDom);
  //nは入力したもの,bはボタン押した時の反応
  function printDom(data) {
      //div#resultをbodyの中に作り、そこにtableを作る
      let div = document.createElement('div'); 
      div.setAttribute('id','result');
      let body = document.querySelector('body'); 
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
      for(let r of data.results.shop){
        td.textContent = r.name;
        td1.textContent = r.station_name;
        td2.textContent = r.address;
        td3.textContent = r.genre.name;
        td4.textContent = r.budget.name;
        td5.textContent = r.open;
      }
  }
  
  
  // 課題6-1 のイベントハンドラ登録処理は以下に記述
  
  
  
  
  // 課題6-1 のイベントハンドラ sendRequest() の定義
  function sendRequest() {
  
  }
  
  // 課題6-1: 通信が成功した時の処理は以下に記述
  function showResult(resp) {
  
  }
  
  // 課題6-1: 通信エラーが発生した時の処理
  function showError(err) {
      console.log(err);
  }
  
  // 課題6-1: 通信の最後にいつも実行する処理
  function finish() {
      console.log('Ajax 通信が終わりました');
  }
  
  ////////////////////////////////////////
  // 以下はグルメのデータサンプル
  // 注意: 第5回までは以下を変更しないこと！
  // 注意2: 課題6-1 で以下をすべて削除すること
  let data = {
    "results": {
      "api_version": "1.26",
      "results_available": 52,
      "results_returned": "10",
      "results_start": 1,
      "shop": [
        {
          "access": "京王八王子駅を背にし右手に見えるローソンの隣のビル、ホテルザ・ビーの2階です。",
          "address": "東京都八王子市明神町４-6-12　ホテル・ザ・ビー八王子（旧八王子プラザホテル）2F",
          "band": "可",
          "barrier_free": "なし",
          "budget": {
            "average": "ディナー3000円",
            "code": "B003",
            "name": "3001～4000円"
          },
          "budget_memo": "",
          "capacity": 100,
          "card": "利用可",
          "catch": "【サプライズ演出有】 結婚パーティー受付中",
          "charter": "貸切可 ：VIPルーム1部屋2～15名様前後（完全個室）/パーティーフロア！50型モニター・スポットライト等充実",
          "child": "お子様連れOK",
          "close": "不定休有り。店休時は店長携帯電話09035324825まで問い合わせください♪",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ000989843/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ000989843/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "なし",
          "free_drink": "あり",
          "free_food": "なし",
          "genre": {
            "catch": "大人の社交場非日常を味わうダイニング",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "なし",
          "id": "J000989843",
          "karaoke": "あり",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.6585460152,
          "lng": 139.34327231,
          "logo_image": "https://imgfp.hotp.jp/IMGH/21/04/P038512104/P038512104_69.jpg",
          "lunch": "なし",
          "middle_area": {
            "code": "Y110",
            "name": "八王子・立川"
          },
          "midnight": "営業していない",
          "mobile_access": "京王八王子駅1分/JR八王子駅北口5分",
          "name": "バグダッドカフェ Bagdadcafe/モータウン MOTOWN",
          "name_kana": "ばぐだっどかふぇもーたうんはちおうじ",
          "non_smoking": "禁煙席なし",
          "open": "月～日、祝日、祝前日: 17:00～21:00 （料理L.O. 20:00 ドリンクL.O. 20:00）",
          "other_memo": "ステージ・マイク・カラオケ等",
          "parking": "なし",
          "party_capacity": 250,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_58_s.jpg"
            }
          },
          "private_room": "あり ：VIPルーム1部屋2～15名様前後（完全個室）/パーティーフロア",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "ご質問、ご要望はお気軽にお問い合わせください♪",
          "show": "あり",
          "small_area": {
            "code": "X220",
            "name": "八王子"
          },
          "station_name": "京王八王子",
          "sub_genre": {
            "code": "G002",
            "name": "ダイニングバー・バル"
          },
          "tatami": "なし",
          "tv": "あり",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ000989843/?vos=nhppalsa000016"
          },
          "wedding": "大歓迎！ステージ・マイク・音響・映像等、設備充実！！最大200名様まで是非どうぞ★",
          "wifi": "あり"
        },
        {
          "access": "ＪＲ八王子駅北口徒歩1分/京王八王子駅徒歩3分",
          "address": "東京都八王子市東町12-14",
          "band": "不可",
          "barrier_free": "あり ：スタッフがお手伝いさせて頂きます。ご不明な点等お気軽にお声掛け下さい。事前のお問い合わせも◎",
          "budget": {
            "average": "2,000円(通常平均) 3,000円(宴会平均) ",
            "code": "B002",
            "name": "2001～3000円"
          },
          "budget_memo": "",
          "capacity": 100,
          "card": "利用可",
          "catch": "2.5時間飲み放題付2000円~ 【★少人数様ソファー★】",
          "charter": "貸切可 ：八王子で人気の個室バル最大50名様まで対応できます。20名様～フロア貸切応相談　最大100名様までOK",
          "child": "お子様連れ歓迎 ：チャイルドシートもご用意しています。お子様連れのママ会・ご家族でのご利用にもお気軽にどうぞ♪",
          "close": "【年中無休】貸切宴会のご予約も絶賛受付中！最大100名様までご利用可能ですので、会社宴会 同窓会 宴会にオススメ♪",
          "coupon_urls": {
            "pc": "https://www.hotpepper.jp/strJ001275177/map/?vos=nhppalsa000016",
            "sp": "https://www.hotpepper.jp/strJ001275177/scoupon/?vos=nhppalsa000016"
          },
          "course": "あり",
          "english": "なし",
          "free_drink": "あり ：★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
          "free_food": "あり ：★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
          "genre": {
            "catch": "八王子 個室居酒屋 飲み放題 肉バル 女子会",
            "code": "G001",
            "name": "居酒屋"
          },
          "horigotatsu": "なし ：温かな照明と開放的な店内で楽しくご宴会♪八王子での宴会 飲み会 女子会 二次会 合コンに◎",
          "id": "J001275177",
          "karaoke": "なし",
          "ktai_coupon": 0,
          "large_area": {
            "code": "Z011",
            "name": "東京"
          },
          "large_service_area": {
            "code": "SS10",
            "name": "関東"
          },
          "lat": 35.6582259169,
          "lng": 139.3381858122,
          "logo_image": "https://imgfp.hotp.jp/IMGH/61/98/P038366198/P038366198_69.jpg",
          "lunch": "なし",
          "middle_area": {
            "code": "Y110",
            "name": "八王子・立川"
          },
          "midnight": "営業している",
          "mobile_access": "JR八王子駅北口徒歩1分/京王八王子駅徒歩3分",
          "name": "隠れ家バル Funny&Bouquet",
          "name_kana": "かくれやばる　ふぁにーあんどぶーけ",
          "non_smoking": "禁煙席なし",
          "open": "月～日、祝日、祝前日: 17:00～翌5:00 （料理L.O. 翌3:00 ドリンクL.O. 翌4:00）",
          "other_memo": "個室や貸切の詳細等お気軽にお電話にてお問い合わせください。八王子での飲み会に◎",
          "parking": "なし ：お近くのコインパーキングをご利用下さい。",
          "party_capacity": 50,
          "pet": "不可",
          "photo": {
            "mobile": {
              "l": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_100.jpg"
            },
            "pc": {
              "l": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_238.jpg",
              "m": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_168.jpg",
              "s": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_58_s.jpg"
            }
          },
          "private_room": "なし ：個室　2名×4室　4名×8室　8名～10名×4室　20名～40名×2室",
          "service_area": {
            "code": "SA11",
            "name": "東京"
          },
          "shop_detail_memo": "★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
          "show": "なし",
          "small_area": {
            "code": "X220",
            "name": "八王子"
          },
          "station_name": "八王子",
          "sub_genre": {
            "code": "G002",
            "name": "ダイニングバー・バル"
          },
          "tatami": "なし ：八王子で人気のお座敷個室！最大50名様まで対応できます。",
          "tv": "あり",
          "urls": {
            "pc": "https://www.hotpepper.jp/strJ001275177/?vos=nhppalsa000016"
          },
          "wedding": "八王子での結婚式の二次会や同窓会、打ち上げパーティー等多様なシーンにご利用下さい",
          "wifi": "あり"
        }
      ]
    }
  };
  
  