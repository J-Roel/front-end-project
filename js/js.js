window.onload = function(){ //program contianer function




// jQeffects ={

    /* function : arguments */
      //'fade' : [''];

// }


// $( '.button' ).click(function() {
//   console.log("in function");
//   var selectedEffect = $('#effectTypes').val();
//   console.log("EFFECT: ", selectedEffect);
//   $( '.effect' ).effect( selectedEffect, callback );

// });

// function callback() {
//       setTimeout(function() {
//         $( ".effect" ).removeAttr( "style" ).hide().fadeIn();
//       }, 1000 );
//     };


// function newfunc( {
//   sub = a*b

//   return
// }


//BATTLE SYSTEM
/*Needed
    -Random seed generator
    -State system
    -Basic turns
    -"Player" object container for tracking changes and game play
    -"AI" object container for tracking changes and game play
    -Card generator
    -Deck container for play - for both players


    *BATTLE VARS
    - MANA, HEAL, EFFECT, ATTACK, WEAKNESS, STRENGTH

    *ATTACK
      - Fire
      - Earth
      - Water
      - Solar
      - Nature
*/

//SETUP Enemies


  //DEFINE VARIABLES
  var turn = true;
  var player = {
      'hp' : 21
  };
  var enemy ={
      'hp' : 21
  };
  var turn;


  //Setup game based on random seed
  function setup() {

        update();

        var rnd = randomNumGen(1,1000);//generate starter
        if(rnd%2===0)
        {
          turn = false;
          attack();
        } //else we wait for player to click
        
   };


   //Game Go
   function initGame(){
      //Fill out stuff
      update();
      

      //User clicks or computer goes
      if(turn){ //true is player, false is computer
          console.log('Player attacks');
          //player.hp -= damage;

      }else{
          console.log('Enemy attacks');
          attack();
      }
   };


   //Actual attack
   function attack(){
      var damage = randomNumGen(3,1);

      //Add weaknesses and strengths here


      return damage;
   };


   //UPDATE ALL
   function update(){
  
      //Health
      $('#playerHP').text(player.hp);
      $('#enemyHP').text(enemy.hp);

      //Stats


      //Program
      if(turn){
        //Turn is true
        $('#turn').text('Player');
      }else{
        //Turn is false
        $('#turn').text('Computer');
      }

   };


//------------CLICK FUNCTIONS---------------
$('#attack').on('click', function(){
    console.log('Player clicked attack');
    var player;
    var effects;
    if(turn){
        attack(player);

    }


});



//-----------HELPER FUNCTIONS---------------

//Random Number Generator
  function randomNumGen(min,max){
      return Math.floor(Math.random() * (max - min) + min);
  };





setup();















}(); /* END OF MAIN FUNCTION */

















/*END OF FILE*/