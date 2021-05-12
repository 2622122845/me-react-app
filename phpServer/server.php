<?php
$file = file_get_contents($_GET['filename']);
class obj
{
    private $name = 'bruce';
    public function  getName()
    {
        return $this->name;
    }
};
array_push(json_decode($file), $push);
echo '成功';
/* switch ($_GET['filename']) {
    case 'wzry':

        break;
} */
