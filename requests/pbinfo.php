<?php
    $name = $_GET[ 'name' ];
    $url = 'http://www.pbinfo.ro/?pagina=profil&user=' . $name;
    $page = file_get_contents( $url );
    $src = 'pagina=judge-board&user=' . $name;
    $poz = strpos( $page , $src ) + strlen( $src ) + 2;
    $val = 0;
    for( $i = $poz ; $page[ $i ] >= '0' && $page[ $i ] <= '9' ; $i++ ){
        $val = $val * 10 + $page[ $i ] - '0';
    }
    echo $val;
?>