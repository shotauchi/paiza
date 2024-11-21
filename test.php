<?php
// // 自分の得意な言語で
// // Let's チャレンジ！！
$input_line = fgets(STDIN);

// $arr = explode(" ",$input_line);

// // $arr[0]: 給料
// // $arr[1]: 掛ける月数
// echo $arr[0] * $arr[1];
// echo "\n";

list($kyuryou, $month) = explode(" ",$input_line);
// $kyuryou = 250000;
// $month = 3;
$bonus = $kyuryou * $month;
echo $bonus;
echo "\n";

/*
// 自分の得意な言語で
// Let's チャレンジ！！
$input_line = fgets(STDIN);

$arr = explode(" ",$input_line);

//echo $arr[0] + $arr[1] + $arr[2];
$total = 0;
foreach ($arr as $value) {
    $total += $value;
}
echo $total;
echo "\n";
*/
?>
