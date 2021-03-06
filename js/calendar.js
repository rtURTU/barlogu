var ov;
var previousId, previousYear, previousMonth;
function MakeCalendar( divId , year , month ){
    while( month >= 12 ){
        month -= 12;
        year++;
    }
    while( month < 0 ){
        month += 12;
        year--;
    }
    previousId = divId;
    previousYear = year;
    previousMonth = month;
    var context = document.getElementById( divId );
    var dayHash = [ 7 , 1 , 2 , 3 , 4 , 5 , 6 ];
    var zile = [ "" , "Luni" , "Marti" , "Miercuri" , "Joi" , "vineri" , "Sambata" , "Dimineca" ];
    var luni = [ "Ianuarie" , "Februarie" , "Martie" , "Aprilie" , "Mai" , "Iunie" , "Iulie" , "August" , "Septembrie" , "Octombrie" , "Noiembrie" , "Decembrie" ];
    var date = new Date( year , month );
    
    context.innerHTML = "";
    
    var calendarHeader = document.createElement( "div" );
    calendarHeader.classList.add( "row" );
    calendarHeader.classList.add( "col-xs-12" );
    
    var newTile = document.createElement( "div" );
    newTile.classList.add( "col-xs-12" );
    
    var tempDivs = document.createElement( "span" );
    tempDivs.classList.add( "col-xs-4" );
    tempDivs.classList.add( "glyphicon" );
    tempDivs.classList.add( "glyphicon-chevron-left" );
    tempDivs.classList.add( "text-center" );
    tempDivs.classList.add( "vertical-middle" );
    tempDivs.onclick = function(){MakeCalendar( previousId , previousYear , previousMonth - 1 ); }
    newTile.appendChild( tempDivs );
    
    var tempDivs = document.createElement( "span" );
    tempDivs.classList.add( "col-xs-4" );
    tempDivs.classList.add( "text-center" );
    tempDivs.classList.add( "vertical-middle" );
    tempDivs.innerHTML = year + " " + luni[ month ];
    newTile.appendChild( tempDivs );
    
    var tempDivs = document.createElement( "span" );
    tempDivs.classList.add( "col-xs-4" );
    tempDivs.classList.add( "glyphicon" );
    tempDivs.classList.add( "glyphicon-chevron-right" );
    tempDivs.classList.add( "text-center" );
    tempDivs.classList.add( "vertical-middle" );
    tempDivs.onclick = function(){MakeCalendar( previousId , previousYear , previousMonth + 1 ); }
    newTile.appendChild( tempDivs );
    
    calendarHeader.appendChild( newTile );
    
    for( var i = 1 ; i <= 7 ; i++ ){
        newTile = document.createElement( "div" );
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
        newTile = document.createElement( "div" );
        newTile.classList.add( "odd-color" );
        newTile.classList.add( "calendar-tile" );
        newTile.classList.add( "text-center" );
        newTile.innerHTML = lastMonth.getDate();
        lastMonth.setDate( lastMonth.getDate() + 1 );
        calendarHeader.appendChild( newTile );
    }
    while( firstDay <= lastDay ){
        newTile = document.createElement( "div" );
        newTile.classList.add( "even-color" );
        newTile.classList.add( "calendar-tile" );
        newTile.classList.add( "text-center" );
        var tileText = document.createElement( "a" );
        tileText.innerHTML = firstDay.getDate();
        newTile.appendChild( tileText );
        calendarHeader.appendChild( newTile );
        newTile.onclick = function(){ DisplayPopUp( year , month , this.getElementsByTagName( "a" )[ 0 ].innerHTML ); };
        firstDay.setDate( firstDay.getDate() + 1 );
    }
    
    for( var i = dayHash[ lastDay.getDay() ] + 1 ; i <= 7 ; i++ ){
        newTile = document.createElement( "div" );
        newTile.classList.add( "odd-color" );
        newTile.classList.add( "calendar-tile" );
        newTile.classList.add( "text-center" );
        newTile.innerHTML = i - dayHash[ lastDay.getDay() ];
        calendarHeader.appendChild( newTile );
    }
    
    context.appendChild( calendarHeader );
}

function DisplayPopUp( year , month , day ){
    ov = document.getElementById( "overlay" );
    console.log( year );
    console.log( month );
    console.log( day );
    ov.style.display = "block";
}

window.onclick = function( event ){
    if( event.target == ov ){
        ov.style.display = "none";
    }
}
