<?php
if($_GET['type']=='create'){
    file_put_contents("./data.txt",$_GET['data']);
}
