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
  var turn;
  var player = []; //array to hold player's cards hp
  var enemy = []; //array to hold enemies cards hp
  var tHP = 0; tHE = 0;


  //Setup game based on random seed--------------------------SETUP
  function setup() {
      console.log("--------Start--------");
        update();  //Initially update our board



        //SETUP FOR HEALTH //GENERATE THE CARDS HERE
        var aPHealth = [];
        var aEHealth =[];
        var tH = 0;
        for(var i = 0; i <= 5; i++)
        {
          //Player
          tH = randomNumGen(10,1);
          aPHealth.push(tH);
          tHP += tH;
          //Enemy
          tH = randomNumGen(10,1);
          aEHealth.push(tH);
          tHE += tH;
        }

        $('pTotalHP').text(tHP);
        $('eTotalHP').text(tHE);
        console.log("Player HP: ", aPHealth, "Total: ", tHP);
        console.log("--------");
        console.log("Enemy HP: ", aEHealth, "Total: ", tHE);
        console.log("--------");





        //GENERATE RANDOM START
        var rnd = randomNumGen(1,1000);
        if(rnd%2===0)
        {
          turn = false; //false is for the computers turn
          $('#tester').prop("disabled",true);//disable player's ability to attack
          attack(turn); //computer attacks or...

        } else { //...we wait for player to click 
          $('#tester').prop("disabled",false);
          turn = true;
        }
        console.log("Turn: ", turn);

        
   };


   //Actual attack
   function attack(turn){

      var damage = randomNumGen(10,1); //base attack damage

      //get badge info
      // var strength = randomNumGen(10,1);
      // var defense = randomNumGen(10,1);
      // var weakness = randomNumGen(10,1);
      if(turn){
          console.log('Player clicked attack', damage);
          tHE -= damage;
          console.log("Enemy total: ", tHE);
          $('#tester').prop("disabled",true);//disable player's ability to attack
          

      } else {
        console.log('Computer is attacking', damage);
        tHP -= damage;
        console.log("Player total: ", tHP);


      }



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
        $('#tester').prop("disabled",true);
        $('#turn').text('Computer');
      }

      return true;
   };


//------------CLICK FUNCTIONS---------------
$('#tester').on('click', function(){
    if(turn){ //double check turn
        attack(turn);
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