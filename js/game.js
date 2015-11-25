window.onload = function(){ //program contianer function




// $( '.button' ).click(function() {
//   var selectedEffect = $('#effectTypes').val();

//   $( '.effect' ).effect( selectedEffect, callback );

// });

// function callback() {
//       setTimeout(function() {
//         $( ".effect" ).removeAttr( "style" ).hide().fadeIn();
//       }, 1000 );
//     };


  //------------------------------------------
  //-----------DEFINE VARIABLES---------------
  //------------------------------------------
  var turn;
  var player = {
      'health' : []
  }; //array to hold player's cards hp
  var enemy = {
      'health' : []
  }; //array to hold enemies cards hp
  var tHP = 0; tHE = 0;
  var timer = 2000;

  

  //------------------------------------------
  //---------GAME FUNCTIONALITY---------------
  //------------------------------------------

  //Setup game based on random seed--------------------------SETUP
      function setup() {
          console.log("--------Setup--------");


            //GENERATE STATS AND CARDS HERE
            genCard();


            var tH = 0;
            for(var i = 0; i <= 5; i++)
            {
              //Player
              tH = randomNumGen(20,1);
              player['health'].push(tH);
              tHP += tH;

              //Enemy
              tH = randomNumGen(20,1);
              enemy['health'].push(tH);
              tHE += tH;
            }

            update(); //update our board for inital stats after generating them

            //GENERATE RANDOM START --------------------------INITIAL START---
            var rnd = randomNumGen(1,1000);

            if(rnd%2===0)
            {
              turn = false; //false is for the computers turn
              $('#pAttack').prop("disabled",true);//disable player's ability to attack
               enemyInterval(timer);//Set our time until enemy attacks;

            } else { //...we wait for player to click
              $('#pAttack').prop("disabled",false);
              turn = true;
            }
            console.log("--End of Setup-- Turn: ", turn);        
       };




       //ATTACK---------------------------------------------------------ATTACK
       function attack(){

          var damage = randomNumGen(10,1); //base attack damage
          

          if(turn){//PLAYER ATTACKS


            //TODO:
            //Determine which card is hit
            //Determine which helper card it has and what it's effects are

              effectAdd('.eEffect1', 'basic-slash', 'slideToggle',damage);
          
              tHE -= damage;
              if(tHE <= 0){
                  finishGame();
              }
          

              $('#pAttack').prop("disabled",true);//disable player's ability to attack
              
              turn = false; //finally switch turns
              console.log("called enemyInterval -- Turn: ", turn);
              enemyInterval(timer);//Set our time until enemy attacks;



          } else { //COMPUTER ATTACKS

           
            console.log('Computer is attacking', damage);
              
                effectAdd('.pEffect1', 'basic-slash', 'slideToggle');

            tHP -= damage;
            if(tHP <= 0){
                finishGame();
            }

            console.log("Player total: ", tHP);
           

            $('#pAttack').prop("disabled",false);//disable player's ability to attack
            
            turn = true;//switch turns
            console.log("turn to true ", turn);
            
          }

          update(); //Update our board stats
       };


//UPDATE ALL---------------------------------------------
       function update(){
      
          //Health
           $('#pTotalHP').text(tHP);
            $('#eTotalHP').text(tHE);


          return true;
       };


       function finishGame(){
          if(turn){
            console.log("Player Wins");
          } else {
            console.log("Computer Wins");
          }
       };


//------------------------------------------
//------------CLICK FUNCTIONS---------------
//------------------------------------------
    $('#pAttack').on('click', function(){
        console.log("User clicked");
        if(turn){ //double check turn
            attack(turn);
        }
    });



//------------------------------------------
//-----------HELPER FUNCTIONS---------------
//------------------------------------------

    //Random Number Generator--------------------------------------
    function randomNumGen(min,max){
        return Math.floor(Math.random() * (max - min) + min);
    };


    //-----COMPUTER ATTACK TIMER------------------------------------
    var eAttackTimer;
    function enemyInterval(timer) {
          console.log("Called Attack");
          eAttackTimer = window.setInterval(function(){  //callback time interval through a function
            stopEAttack(); //our function then stops the attack
            attack(); //then calls attack and lets the computer attack 
          }, timer ); //timer is our variable to control length between attacks
    };
    function stopEAttack() {
          clearInterval(eAttackTimer);
    };


    //ADD OUR EFFECTS FOR ATTACKS-----------------------------------------ADD EFFECT*/
    function effectAdd(target, effectClass, effect) {
        if(effectClass != undefined){
            $(target).addClass(effectClass);
        }
        $( target ).effect( effect );
        clearEffect(target, effectClass);
    };
    //Callback to clear Effect after adding it.
    function clearEffect(target, effectClass) {
      setTimeout(function() {
          $( target ).removeClass( effectClass );
      }, 500 );
    };





  //LOAD AND REMOVE IMAGES ON THE FLY--------------------------------
    //-----Load Image helper function------- for gif effects
    function imgAdd(path, target, addClass) {
      $('<img src="'+ path +'">').load(function() {
          if(addClass != undefined){
              $(this).addClass(addClass);
          }
          $(this).appendTo(target);
      });
    };
     function imgRemove(target){
        console.log("Remove called on: ", target);
      $(target + 'img:last-child').remove();
    };


    //GENERATE CARDS-------------------------------------------------------GEN CARD-----`````````
    function genCard() {
       //ajax call
          $.ajax({
              method: "GET",
              url: 'js/karta.json',
              success: function(info) { //SUCCESS

                //BUILD PLAYER CARDS
                var pickCard = randomNumGen(3,1);
                console.log(info['cards'][pickCard]);


                var card = document.createElement('div'); //make main div which is our card
                  //Set Card properties
                  card.className = 'card';
                  card.set


              },
              error: function(err){ //FAILED
                console.log("FAIL")
                console.log(err)
              }
          });
    };


/*

<div class="slotMainLeft" ondrop="drop(event)" ondragover="allowDrop(event)">
              
              <div class="p7" draggable="true" ondragstart="drag(event)" >
                <div class="pEffect1"></div>
                <h4>Order of the Wolf</h4>
                <div class="cardImg"></div>
                <div class="buttonHolder">
                  <button class="cardAction"></button>
                  <button class="cardAction"></button>
                  <button class="cardAction"></button>
                
                  <span class="badge  healthB">10</span>
                  <span class="badge  manaB">2</span>
                  <span class="badge  strengthB">9</span>
                  <span class="badge  defB">7</span>
                </div>

              </div>
            </div>


*/

//--------------------START--------------------------
function controller(){

  if(turn === undefined){ //test to see if we've started game and if turn is undefined we start
    setup(); 
  } 

};
controller();








}(); /* END OF MAIN FUNCTION */

















/*END OF FILE*/