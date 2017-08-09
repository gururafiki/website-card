/**
 * Created by broad on 26.07.2017.
 */
function createBlock(id) {
    $('#stores').css( "display", "none" );
    $('#parsers').css( "display", "none" );
    $('#modules').css( "display", "none" );
    $('#features').css( "display", "none" );
    $('#info').css( "display", "none" );
    $('#objectives').css( "display", "none" );
    $('#skill').css( "display", "none" );
    $('#stores-window').css( "display", "none" );
    $('#parsers-window').css( "display", "none" );
    $('#modules-window').css( "display", "none" );
    $('#features-window').css( "display", "none" );
    $('#objectives-window').css( "display", "none" );
    $('#info-window').css( "display", "none" );
    $('#skill-window').css( "display", "none" );

    $('#'+id+"-window").css( "display", "block" );
    $('#'+id).css( "display", "block" );
}