function MakeCalendar( divId , year , month ){
    var context = document.getElementById( divId );
    var dayHash = [ 7 , 1 , 2 , 3 , 4 , 5 , 6 ];
    var zile = [ "" , "Luni" , "Marti" , "Miercuri" , "Joi" , "vineri" , "Sambata" , "Dimineca" ];
    var date = new Date( year , month );
    
    context.innerHTML = "";
    
    var calendarHeader = document.createElement( "div" );
    calendarHeader.classList.add( "row" );
    calendarHeader.classList.add( "col-xs-12" );
    
    for( var i = 1 ; i <= 7 ; i++ ){
        var newTile = document.createElement( "div" );
        newTile.classList.add( "odd-color" );
        newTile.classList.add( "calendar-tile" );
        newTile.classList.add( "text-center" );
        newTile.innerHTML = zile[ i ];
        calendarHeader.appendChild( newTile );
    }
    
    var firstDay = new Date( date.getFullYear() , date.getMonth() , 1 );
    var lastDay = new Date( date.getFullYear() , date.getMonth() + 1 , 0 );
    
    var lastMonth = new Date( date.getFullYear() , date.getMonth() , 0 );
    lastMonth.setDate( lastMonth.getDate() - dayHash[ firstDay.getDay() ] + 2 );
    
    for( var i = 1 ; i < dayHash[ firstDay.getDay() ] ; i++ ){
        var newTile = document.createElement( "div" );
        newTile.classList.add( "odd-color" );
        newTile.classList.add( "calendar-tile" );
        newTile.classList.add( "text-center" );
        newTile.innerHTML = lastMonth.getDate();
        lastMonth.setDate( lastMonth.getDate() + 1 );
        calendarHeader.appendChild( newTile );
    }
    var ok = 1;
    while( firstDay <= lastDay ){
        var newTile = document.createElement( "div" );
        newTile.classList.add( "even-color" );
        newTile.classList.add( "calendar-tile" );
        newTile.classList.add( "text-center" );
        var tileText = document.createElement( "a" );
        tileText.innerHTML = firstDay.getDate();
        newTile.appendChild( tileText );
        calendarHeader.appendChild( newTile );
        newTile.onclick = function(){ DisplayPopUp( year , month , this.getElementsByTagName( "a" )[ 0 ].innerHTML ); };
        ok++;
        firstDay.setDate( firstDay.getDate() + 1 );
    }
    
    for( var i = dayHash[ lastDay.getDay() ] + 1 ; i <= 7 ; i++ ){
        var newTile = document.createElement( "div" );
        newTile.classList.add( "odd-color" );
        newTile.classList.add( "calendar-tile" );
        newTile.classList.add( "text-center" );
        newTile.innerHTML = i - dayHash[ lastDay.getDay() ];
        calendarHeader.appendChild( newTile );
    }
    
    context.appendChild( calendarHeader );
}

function DisplayPopUp( year , month , day ){
    console.log( year );
    console.log( month );
    console.log( day );
}
