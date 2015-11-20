window.onload = function(){ //program contianer function

jQeffects ={

    /* function : arguments */
      //'fade' : [''];

}




$( '.button' ).click(function() {
  console.log("in function");
  var selectedEffect = $('#effectTypes').val();
  console.log("EFFECT: ", selectedEffect);
  $( '.effect' ).effect( selectedEffect, callback );

});

function callback() {
      setTimeout(function() {
        $( ".effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };


function newfunc( {
  sub = a*b

  return
}


}(); /* END OF MAIN FUNCTION */

















/*END OF FILE*/