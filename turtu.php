<html>
    
<head>
    
    <script src = "js/calendar.js"></script>
    
</head>

<body>

    
    <?php
        echo file_get_contents( "includes/header.html" );
    ?>
    
    <div id = "wrapper" style="width:40%;">
    </div>
    <script>MakeCalendar( "wrapper" )</script>

    
</body>
    
</html>