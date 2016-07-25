<html>
    
<head>
</head>

<body>



    <?php
        function callFunction( $name ){
            echo "<script>" . $name . "</script>";
        }
        echo file_get_contents( "includes/header.html" );
        //echo file_get_contents( "includes/standings.html" );
       // callFunction( "MakeStandings()" );

    ?>
</body>
    
</html>