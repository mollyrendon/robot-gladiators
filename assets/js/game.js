//Game States
//"WIN" - Player robot has defeated all enemy-robots
// *Fight all enemy-robtos
// *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  //repeat and execute as long as the enemy-robot is alive
  while(playerHealth > 0 && enemyHealth > 0) {
    //ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
      
      // If player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      //if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + " has chosen to skip the fight.  Goodbye!");
          //subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney);
          break;
        }

        //if no (false), ask question by running fight() again
        else {
          fight();
            window.alert("You need to choose a valid option.  Try again!");
        }        
    };
      
    //If player choses to fight, then fight
    if (promptFight === "fight"  || promptFight === "FIGHT") {
      //Remove enemy's health by subtracting the amount set in the player Attack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
      );
      // Check enemy's health 
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        //Award player money for winning
        playerMoney = playerMoney + 20;

        //Leave while() loop since enemy is dead
        break;
      } 
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      //Remove player's health by sunbtracting the amount set in enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
      );

      //Check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        //Leave while() loop if player is dead
        break;
      }
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }

      if (playerHealth > 0) {
        window.alert("Welcome to robot gladiators!" + (i + 1) );

        //Pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        //reset enemyHealth before starting new fight
        enemyHealth = 50;

        //use debugger to pause script from running and check what's going on at that moment in the code
        //debugger;

        //Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
      }

        else {
          window.alert("You have lost your robot in battle!  Game over!");
          break;
        }
  }
  }
};
for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}