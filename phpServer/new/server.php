<?php
header('Access-Control-Allow-Origin:*');
$content = file_get_contents("data.txt");
$decode = json_decode($content);
if ($_GET['type'] == 'create') {
    //添加get数据
    $decode->$_GET['detail'] = json_decode($_GET['data']);
    //所有数据转字符串
    $string = json_encode($decode);
    file_put_contents("./data.txt", $string);
    echo '存储成功';
}
if ($_GET['type'] == 'read') {
    $string = json_encode($decode->$_GET['detail']);
    echo $string;
}
