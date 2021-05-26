<?php
header('Access-Control-Allow-Origin:*');
$content = file_get_contents("data.txt");
$decode = json_decode($content);
foreach ($decode as $key => $value) {
    $arr = $decode->$key;
    foreach ($arr as $item) {
        $item->data->submitter='站主';
        echo '<hr/>';
        //var_dump($item);
    }
};
echo '<hr/>';
var_dump($decode->wangYiYun[0]->data);

$string = json_encode($decode);
file_put_contents("./data.txt", $string);
