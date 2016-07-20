<html>
    
<head>
    <title>Barlogu`</title>
    <link rel = "stylesheet" href = "css/bootstrap.min.css">
    <link rel = "stylesheet" href = "css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto:500,400' rel='stylesheet' type='text/css'>
    <script src = "js/script.js"></script>
</head>
    
<body>
    <div id = "wrapper">
        <div id = "user-list" class = "col-xs-12 col-sm-10 col-md-8 col-lg-6 col-centered">
            <div class = "row table-row title-color">
                <div class = "col-xs-12 row table-row">
                    <div class = "col-xs-4 table-cell">
                        <p class = "table-content">Username</p>
                    </div>
                    <div class = "col-xs-2 table-cell">
                        <p class = "table-content">Infoarena</p>
                    </div>
                    <div class = "col-xs-2 table-cell">
                        <p class = "table-content">Codeforces</p>
                    </div>
                    <div class = "col-xs-2 table-cell">
                        <p class = "table-content">PbInfo</p>
                    </div>
                    <div class = "col-xs-2 table-cell">
                        <p class = "table-content">Total</p>
                    </div>
                </div>
            </div>
            
            <div id = "user-prefab" style = "display:none;" class = "row table-row even-color">
                <div class = "col-xs-4 table-cell">
                        <p id = "name" class = "table-content"></p>
                    </div>
                    <div class = "col-xs-2 table-cell">
                        <p id = "infoarena" class = "table-content"></p>
                    </div>
                    <div class = "col-xs-2 table-cell">
                        <p id = "codeforces" class = "table-content"></p>
                    </div>
                    <div class = "col-xs-2 table-cell">
                        <p id = "pbinfo" class = "table-content"></p>
                    </div>
                    <div class = "col-xs-2 table-cell">
                        <p id = "total" class = "table-content"></p>
                    </div>
            </div>

            
        </div>
    </div>
    <p style = "display: none;" id = "screen"></p>
</body>
    
</html>