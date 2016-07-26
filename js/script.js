var User = function( name , infoarena , codeforces , pbinfo ){
    this.name = name;
    this.infoarenaName = infoarena;
    this.codeforcesName = codeforces;
    this.pbinfoName = pbinfo;
    this.scores = [];
    this.scores.push( 0 );
    this.scores.push( 0 );
    this.scores.push( 0 );
    this.scores.push( 0 );
};

User.prototype.constructor = User;

var objList = [];
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
        if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
            screenNode.innerHTML = xhttp.responseText;
        }
    };
    xhttp.open( "GET" , url , false );
    xhttp.send();
}

function loadUsers( url ){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if( xhttp.readyState == 4 && xhttp.status == 200 ){
            var obj = JSON.parse( xhttp.responseText );
            for( var i = 0 ; i < obj.Users.length ; i++ ){
                objList.push( new User( obj.Users[ i ].Name , obj.Users[ i ].InfoarenaUsername , obj.Users[ i ].CodeforcesUsername , obj.Users[ i ].PbinfoUsername ) );
            }
        }
    }
    xhttp.open( "GET" , url , false );
    xhttp.send();
}

function parseCodeforces(){
    var hash = new Array( 110000 );
    var result = 0;
    for( var i = 0 ; i < hash.length ; i++ )
        hash[ i ] = new Array( 20 );
    var obj = JSON.parse( apiReturns );
    for( var i = 0 ; i < obj.result.length ; i++ ){
        if( hash[ obj.result[ i ].problem.contestId ][ obj.result[ i ].problem.index.charCodeAt( 0 ) - 'A'.charCodeAt( 0 ) ] != true && obj.result[ i ].verdict == "OK" ){
            hash[ obj.result[ i ].problem.contestId ][ obj.result[ i ].problem.index.charCodeAt( 0 ) - 'A'.charCodeAt( 0 ) ] = true;
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

function CreateUser( name , infoarenaScore , codeforcesScore , pbinfoScore , color ){
    var userTemp;
    userTemp = document.createElement( "div" );
    userTemp.innerHTML = prefabUser.innerHTML;
    userTemp.classList.add( "row" );
    userTemp.classList.add( "table-row" );
    userTemp.classList.add( "user" );
    userTemp.classList.add( color + "-color" );
    userTemp.id = name;
    userTemp.getElementsByClassName( "table-content" )[ 0 ].innerHTML = name;
    userTemp.getElementsByClassName( "table-content" )[ 1 ].innerHTML = infoarenaScore;
    userTemp.getElementsByClassName( "table-content" )[ 2 ].innerHTML = codeforcesScore;
    userTemp.getElementsByClassName( "table-content" )[ 3 ].innerHTML = pbinfoScore;
    userTemp.getElementsByClassName( "table-content" )[ 4 ].innerHTML = infoarenaScore + codeforcesScore + pbinfoScore;
    return userTemp;
}

function sortBy( indx ){
    for( var i = 0 ; i < objList.length ; i++ ){
        for( var j = i + 1 ; j < objList.length ; j++ ){
            if( objList[ i ].scores[ indx ] < objList[ j ].scores[ indx ] ){
                var tmp = objList[ i ];
                objList[ i ] = objList[ j ];
                objList[ j ] = tmp;
            }
        }
    }
    displayList();
}

function displayList(){
    for( var i = 0 ; i < objList.length ; i++ ){
        document.getElementById( objList[ i ].name ).classList.remove( "odd-color" );
        document.getElementById( objList[ i ].name ).classList.remove( "even-color" );
        document.getElementById( objList[ i ].name ).classList.add( i % 2 ? "odd-color" : "even-color" );
        userList.appendChild( document.getElementById( objList[ i ].name ) );
    }
}

function MakeStandings(){
    loadUsers( "userdata.json" );
    screenNode = document.getElementById( "screen" );
    userList = document.getElementById( "user-list" );
    prefabUser = document.getElementById( "user-prefab" );
    
    for( var i = 0 ; i < objList.length ; i++ ){
        objList[ i ].scores[ 0 ] = parseInt( GetInfoarenaScore( objList[ i ].infoarenaName ) );
        objList[ i ].scores[ 1 ] = parseInt( GetCodeforcesScore( objList[ i ].codeforcesName ) );
        objList[ i ].scores[ 2 ] = parseInt( GetPbinfoScore( objList[ i ].pbinfoName ) );
        objList[ i ].scores[ 3 ] = objList[ i ].scores[ 0 ] + objList[ i ].scores[ 1 ] + objList[ i ].scores[ 2 ];
        
        newUser = CreateUser( objList[ i ].name , objList[ i ].scores[ 0 ] , objList[ i ].scores[ 1 ] , objList[ i ].scores[ 2 ] , ( i % 2 == 0 ? "even" : "odd" ) );
        userList.appendChild( newUser );
    }
    sortBy( 3 );
}