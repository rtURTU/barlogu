<html>
    
    <head>
        <title>Home</title>
        <link rel = "stylesheet" href = "css/bootstrap.min.css">
        <link rel = "stylesheet" href = "css/style.css">
        <link rel = "stylesheet" href = "style.css">
        <link href='https://fonts.googleapis.com/css?family=Roboto:500,400' rel='stylesheet' type='text/css'>
        <script src = "js/script.js"></script>
    </head>
    
    <body>
        <div class = "col-xs-1 float-left color-blue add-height page-margin">
        
        </div>
        <div class = "col-xs-10 float-left main-content-div">
            <?php 
                echo file_get_contents ("includes/header.html");
            ?>
            <div class = "col-xs-12 float-left">
                <?php
                    echo file_get_contents ("includes/Articol.php");
                ?>
            </div>
            
        </div>
        <div class = "col-xs-1 float-left color-blue add-height page-margin">
        
        </div>
    </body>
    
</html>