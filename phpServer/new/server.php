<?php
header('Access-Control-Allow-Origin:*');
if ($_GET['type'] == 'create') {
    file_put_contents("./data.txt", $_GET['data']);
    echo '存储成功';
}
if ($_GET['type'] == 'read') {
    echo file_get_contents("data.txt");
}
