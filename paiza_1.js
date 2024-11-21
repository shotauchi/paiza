//Aさんはスーパー１で食品を5000円分、生活用品を2500円分購入しました。
//スーパー２では食品を3500円分と生活用品を3600円分購入しました。Aさんは合計でいくら買ったでしょうか？

var super_1  = 5000 + 2500;
var super_2  = 3500 + 3600;
var total    = super_1 + super_2;

console.log(total);

//Bさんは2日間のツアーに参加しました。そのツアーは2日間で参加費が5000円、食費が6500円、宿泊費が12000円でした。
//Bさんは現金30000円を持っていました。残りはいくらでしょうか？

var mony  = 30000;
var Tours = 5000 + 6500 + 12000;
var use   = mony - Tours;

console.log(use);

//Cさんはイタリアンレストランで働いていて、この日は日替わりランチ1200円が16食売れ、スパゲッティ900円が24食売れました。
//それぞれいくら売れたでしょう？

var Daily_lunch = 1200 * 16;
var spaghetti   = 900 * 24;

console.log(Daily_lunch);
console.log(spaghetti);

//Dさんは20個プリンとエクレア15個を友達6人で分ける事にしました。
//余りはそれぞれいくつになるでしょうか？

var Pudding = 20 % 6;
var eclair  = 15 % 6;

console.log(Pudding);
console.log(eclair);



//Eさんは予算18000円以内でお店Aとお店Bでそれぞれお店Aが6000円、お店Bが9000円、お店Cでは2000円使いました。
//Eさんはそれぞれいくら使ったでしょうか？

var budget  = 18000;
var store_A = 6000;
var store_B = 9000;
var store_C = 2000;
var use_1   = budget / store_A;
var use_2   = budget / store_B;
var use_3   = budget / store_C;

console.log(store_A);
console.log(store_B);
console.log(store_C);

//Fさんは休日に卓球をしようかテニスをしようか迷っています。結果的に卓球をすることにしました。
//その場合どのように表示されるでしょうか？

var holiday = 'Fさんはテニスをする';

console.log(holiday);

var change_1 = holiday.replace('テニス','卓球');

console.log(change_1);

//Gさんはホームセンター１で4500円の掃除機と30000円の冷蔵庫を買いました。
//ホームセンター２では3000円のガスコンロと5000円の扇風機を購入しました。Gさんは合計でいくら買ったでしょうか？

var Home_center1 = 4500 + 30000;
var Home_center2 = 3000 +  5000;
var sum          = Home_center1 + Home_center2;

console.log(sum);

//Hさんは映画を2本観に行きました。どちらの映画もそれぞれ2000円でチケットを購入し、
//それと別に1個250円のポップコーンを1個、1本200円のドリンクも購入しました。
//Hさんは現金を8000円持ってきていました。残りはいくらでしょうか？

var wallet  = 8000;
var movie   = 4000;
var popcone =  250;
var drink   =  200;
var rest_1    = wallet - (movie + popcone + drink);

console.log(rest_1);

//Iさんはパン屋さんで働いていました。その日は1個１５０円のメロンパンが35個売れ、1個180円のカレーパンが50個売れました。
//スイーツ系では1個200円のアップルパイが16個売れました。それぞれいくつになるでしょう？

var melon_Bread = 150 * 35;
var Curry_bread = 180 * 50;
var apple_pie   = 200 * 16;

console.log(melon_Bread);
console.log(Curry_bread);
console.log(apple_pie);

//Jさんは親戚からもらったみかんを家族4人で分けることにしました。みかんは1箱に30個入っています。
//いくつ余るでしょうか？

var mandarin_orange = 30;
var family_4        =  4;
var remainder_1       = mandarin_orange % family_4;

console.log(remainder_1);

//Kさんはパーティーで必要なピザを買いに来ました。先ず、Lサイズの2800円のピザを2枚、Mサイズの2000円のピザを2枚注文しました。
//それらをまとめて12000円から払いました。いくら残るでしょうか？

var pizza_L         = 3000 * 2;
var pizza_M         = 2000 * 2;
var pay             = 20000;
var Amount_of_money = pay / (pizza_L + pizza_M);

console.log(Amount_of_money);

//Lさんは7月に海に行く予定でしたが最終的に8月に行くことになりました。なので忘れないようにカレンダーにチェックしました。
//その場合に変更点を表示してください下さい。

var Ocean = 'Lさんは7月に海に行く';

console.log(Ocean);

var change_2 = Ocean.replace('7月','8月');

console.log(change_2);

//Nさんはスーパー１で果物類を1200円とお米を3000円購入し、スーパー２でお菓子類を2000円と野菜類を2400円購入しました。
//Ｎさんはそれぞれいくら分購入したでしょうか？

var market_1 = 1200 + 3000;
var market_2 = 2000 + 2400;

console.log(market_1);
console.lopg(super_2);

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


