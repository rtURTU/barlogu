function loadPage( name ) {
    name = "../includes/" + name + ".html";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
            document.body.innerHTML += xhttp.responseText;
        }
    };
    xhttp.open( "GET", name , false );
    xhttp.send();
}

function loadJSFile ( url, callback ) {
    var newScript = document.createElement( "script" );
    newScriptsetAttribute( "src" , url );
    document.getElementsByTagName( "head" )[ 0 ].appendChild( newScript );
    if ( callback && typeof( callback ) === "function" ) {
        callback();
    }
}