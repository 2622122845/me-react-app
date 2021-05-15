<?php
$filePath = './comment-data.json';
$file = file_get_contents($filePath);
$arr = json_decode($file);
$count = 0;
class Obj
{
    public $auther = '';
    public $content = '';
    public $date = '';
    public $id;
};
function read()
{
    echo json_encode($GLOBALS['arr']->$_GET['filename']);
};
function update()
{
    foreach ($GLOBALS['arr']->$_GET['filename'] as $value) {
        if ($value->id == $_GET['id']) {
            $value->auther = $_GET['auther'];
            $value->content = $_GET['content'];
        }
    };
    $str = json_encode($GLOBALS['arr']);
    file_put_contents($GLOBALS['filePath'], $str);
    $newfile = file_get_contents($GLOBALS['filePath']);
    echo $newfile;
};
function create()
{
    $obj = new Obj();
    $obj->auther = $_GET['auther'];
    $obj->content = $_GET['content'];
    $obj->date = $_GET['date'];
    $obj->id =  $GLOBALS['count'];
    array_push($GLOBALS['arr']->$_GET['filename'], $obj);
    $str = json_encode($GLOBALS['arr']);
    //存入数据
    file_put_contents($GLOBALS['filePath'], $str);
    $newfile = file_get_contents($GLOBALS['filePath']);
    echo $newfile;
};
function isCreate()
{
    if (isset($_GET['auther']) && isset($_GET['content']) && isset($_GET['date'])) {
        if ($_GET['auther'] !== '' && $_GET['content'] !== '' && $_GET['date'] !== '') {
            create();
        } else {
            echo '不能有空信息';
        }
    } else {
        echo '信息不全';
    }
}
function active()
{
    switch ($_GET['type']) {
        case 'read':
            read();
            break;
        case 'create':
            isCreate();
            break;
        case 'delete':
            del();
            break;
        case 'update':
            update();
            break;
        default:
            echo '无法操作';
    };
}
function isFile()
{
    if (isset($_GET['filename'])) {
        if ($_GET['filename'] !== '') {
            if (property_exists($GLOBALS['arr'], $_GET['filename'])) {
                $GLOBALS['count'] = count($GLOBALS['arr']->$_GET['filename']);
                active();
            } else {
                echo '未找到文件';
            }
        } else {
            echo '文件名不能为空';
        }
    } else {
        echo '未指定文件名';
    }
}
function del()
{
    array_splice($GLOBALS['arr']->$_GET['filename'], $_GET['id'], $_GET['id']);
    /*for ($start = 0, $end = count($GLOBALS['arr']->$_GET['filename']) - 1; $start < $end; $start++) {
        var_dump($GLOBALS['arr']->$_GET['filename'][0]);
    };*/
    $num = 0;
    foreach ($GLOBALS['arr']->$_GET['filename'] as $value) {
        $value->id = $num++;
        //var_dump($value->id);
    }
    $str = json_encode($GLOBALS['arr']);
    file_put_contents($GLOBALS['filePath'], $str);
    $newfile = file_get_contents($GLOBALS['filePath']);
    echo $newfile;
}
if (isset($_GET['type'])) {
    isFile();
} else {
    echo '未指定操作';
}
