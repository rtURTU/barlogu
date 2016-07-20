var names = [ "Turtu" , "Tudor" , "Turdean" , "Tosa" , "Flavius" , "Victor" ];
var infoarenaName = [ "dyskode" , "lolkekzor" , "alexmisto342" , "andytosa" , "vlasiuflavius" , "victor24" ];
var codeforcesName = [ "dyskode" , "lolkekzor" , "alex342" , "andytosa" , "flavius" , "victor24" ];
var pbinfoName = [ "DysKode" , "Lolkekzor" , "alex342" , "andytosa" , "vlasiuflavius" , "Victor24" ];
var infoarenaScore,codeforcesScore,pbinfoScore;
var prefabUser,newUser,userList,screenNode,apiReturns;

function CodeforcesAPI( url ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            apiReturns = xhttp.responseText;
            parseCodeforces();
        }
    };
    xhttp.open( "GET" , url , false );
    xhttp.send();
}

function loadDoc( url ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            screenNode.innerHTML = xhttp.responseText;
        }
    };
    xhttp.open( "GET" , url , false );
    xhttp.send();
}

function parseCodeforces(){
    var hash = new Array( 5000 );
    var result = 0;
    for( var i = 0 ; i < hash.length ; i++ )
        hash[ i ] = new Array( 20 );
    var obj = JSON.parse( apiReturns );
    for( var i = 0 ; i < obj.result.length ; i++ ){
        if( hash[ obj.result[ i ].problem.contestId ][ obj.result[ i ].problem.index ] != true && obj.result[ i ].verdict == "OK" ){
            hash[ obj.result[ i ].problem.contestId ][ obj.result[ i ].problem.index ] = true;
            result = result + 1;
        }
    }
    screenNode.innerHTML = result;
}

function GetInfoarenaScore( name ){
    loadDoc( "requests/infoarena.php?name=" + name );
    return parseInt( screenNode.innerHTML );
}

function GetCodeforcesScore( name ){
    var url = "http://codeforces.com/api/user.status?handle=" + name + "&from=1";
    CodeforcesAPI( url );
    return screenNode.innerHTML;
}

function GetPbinfoScore( name ){
    loadDoc( "requests/pbinfo.php?name=" + name );
    return parseInt( screenNode.innerHTML );
}

window.onload = function(){
    screenNode = document.getElementById( "screen" );
    userList = document.getElementById( "user-list" );
    prefabUser = document.getElementById( "user-prefab" );
    
    for( var i = 0 ; i < names.length ; i++ ){
        newUser = document.createElement( "div" );
        newUser.innerHTML = prefabUser.innerHTML;
        newUser.classList.add( "row" );
        newUser.classList.add( "table-row" );
        if( i % 2 == 0 )
            newUser.classList.add( "even-color" );
        else
            newUser.classList.add( "odd-color" );
        
        infoarenaScore = parseInt( GetInfoarenaScore( infoarenaName[ i ] ) );
        codeforcesScore = parseInt( GetCodeforcesScore( codeforcesName[ i ] ) );
        pbinfoScore = parseInt( GetPbinfoScore( pbinfoName[ i ] ) );
        
        newUser.getElementsByClassName( "table-content" )[ 0 ].innerHTML = names[ i ];
        newUser.getElementsByClassName( "table-content" )[ 1 ].innerHTML = infoarenaScore;
        newUser.getElementsByClassName( "table-content" )[ 2 ].innerHTML = codeforcesScore;
        newUser.getElementsByClassName( "table-content" )[ 3 ].innerHTML = pbinfoScore;
        newUser.getElementsByClassName( "table-content" )[ 4 ].innerHTML = infoarenaScore + codeforcesScore + pbinfoScore;
        userList.appendChild( newUser );
    }
}