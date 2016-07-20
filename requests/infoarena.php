<?php
    $name = $_GET[ 'name' ];
    $url = 'http://www.infoarena.ro/utilizator/' . $name . '?action=stats';
    $page = file_get_contents( $url );
    $poz = strpos( $page , 'Total: ' ) + 7;
    $val = 0;
    for( $i = $poz ; $page[ $i ] >= '0' && $page[ $i ] <= 9 ; $i++ ){
        $val = $val * 10 + $page[ $i ] - '0';
    }
    echo $val;
?>