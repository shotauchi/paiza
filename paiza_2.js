//Nさんはスーパー１で果物類を1200円とお米を3000円購入し、スーパー２でお菓子類を2000円と野菜類を2400円購入しました。
//Ｎさんはそれぞれいくら分購入したでしょうか？

var market_1 = 1200 + 3000;
var market_2 = 2000 + 2400;

console.log(market_1);
console.log(market_2);

//Ｍさんはホームセンター１で証明類を3000円と25000円のデスクを購入して、ホームセンター２ではチェアを8000円で収納ボックスを7500円べ購入しました。
//Ｍさんは合計でいくら買ったでしょうか？

var homecenter_1 = 3000 + 25000;
var homecenter_2 = 8000 +  7500;

console.log(homecenter_1);
console.log(homecenter_2);

//Oさんは1ヶ月で20000からいくら使ったかを計算することにしました。買い物１では2800円と買い物２では3200円、買い物３では4600円使っていました。
//Oさんはいくら買い物に使ったでしょうか？

var shopping_1        = 2800;
var shopping_2        = 3200;
var shopping_3        = 4600;
var Amount_of_money_1 = 20000;
var rest_3            = Amount_of_money_1 - (shopping_1 + shopping_2 + shopping_3);

console.log(rest_3);

//Pさんは貯金額50000円から今月に何円使ったのか計算しました。
//映画館に行った日は4000円、ライブに行った日は、6000円、博物館に行った日は3000円使いました。Pさんはいくら使ったでしょうか？

var Amount_of_money_2 = 50000;
var movie_day         = 4000;
var live_day          = 6000;
var museum_day        = 3000;
var rest_4            = Amount_of_money_2 - (movie_day + live_day + museum_day);

console.log(rest_4);

//Qさんはお土産のお菓子１の35個入りを部署の2個、お土産２の26個入りのお土産3個購入しました。
//それぞれいくつになったでしょうか？

var souvenir_1 = 35 * 2;
var souvenir_2 = 26 * 3;

console.log(souvenir_1);
console.log(souvenir_2);

//Rさんはお店でデザートの詰め合わせ1個1600円とデザートの詰め合わせ２1800円を売っていました。
//詰め合わせ１は20個売れて詰め合わせ２は18個売れました。それぞれいくら売れたでしょう？

var Assortment_1 = 1600 * 20;
var Assortment_2 = 1800 * 18;

console.log(Assortment_1);
console.log(Assortment_2);

//Sさんは1パック8個入りのたこ焼きを4個購入し、３人の友達と分けました。
//その場合いくつ余るでしょうか？

var takoyaki  = 8 * 4;
var people    = 3;
var remainder_3 = takoyaki % people;

console.log(remainder_3)

//Tさんは1デッキ50枚入りのカードを友達4人で分けて遊ぶ事にしました。
//その場合何枚余るでしょうか？

var card        = 50;
var people_4    =  4;
var remainder_4 = card % people_4;

console.log(remainder_4);

//Uさんは36本のボールペンをクラスメイト18人で分ける事にしました。
//結果はいくつになるでしょう？

var ballpoint_pen = 36;
var Classmate     = 18;
var divide        = ballpoint_pen / Classmate;

console.log(divide);

//Vさんは1箱に32冊のノートを生徒16人で分ける事にしました。
//結果はいくつになるでしょう？

var note    = 32;
var student = 16;
var book    = note / student;

console.log(book);

//Ｗさんは遊園地Aに行こうか遊園地Bに行こうか迷っていました。最初は遊園地Aに行こうと思いましたが結果的に遊園地Bに行くことにしました。
//その場合どの様に表示されるでしょうか？

var amusement_park = 'Ｗさんは遊園地Ａに行く';

console.log(amusement_park);

var change_3 = amusement_park.replace('遊園地Ａ','遊園地Ｂ');

console.log(change_3);

//Xさんは公園Aに行こうか公園Bに行こうか考えました。最初は公園Bに行く予定でしたが公園Aにいくことにしました。
//その場合どの様に表示されるでしょうか？

var park = 'Xさんは公園Bに行く';

console.log(park);

var change_4 = park.replace('公園B','公園A');

console.log(change_4);
