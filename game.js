/*np
 ▄▀▀█▄▄▄▄  ▄▀▀▀▀▄  ▄▀▄▄▄▄   ▄▀▀█▄   ▄▀▀▄▀▀▀▄  ▄▀▀█▄▄▄▄     
▐  ▄▀   ▐ █ █   ▐ █ █    ▌ ▐ ▄▀ ▀▄ █   █   █ ▐  ▄▀   ▐     
  █▄▄▄▄▄     ▀▄   ▐ █        █▄▄▄█ ▐  █▀▀▀▀    █▄▄▄▄▄      
  █    ▌  ▀▄   █    █       ▄▀   █    █        █    ▌      
 ▄▀▄▄▄▄    █▀▀▀    ▄▀▄▄▄▄▀ █   ▄▀   ▄▀        ▄▀▄▄▄▄       
 █    ▐    ▐      █     ▐  ▐   ▐   █          █    ▐       
 ▐                ▐                ▐          ▐            
             ▄▀▀▀█▀▀▄  ▄▀▀▄ ▄▄   ▄▀▀█▄▄▄▄                  
            █    █  ▐ █  █   ▄▀ ▐  ▄▀   ▐                  
            ▐   █     ▐  █▄▄▄█    █▄▄▄▄▄                   
               █         █   █    █    ▌                   
             ▄▀         ▄▀  ▄▀   ▄▀▄▄▄▄                    
            █          █   █     █    ▐                    
            ▐          ▐   ▐     ▐                         
         ▄▀▀▄▀▀▀▄  ▄▀▀▀▀▄   ▄▀▀▀▀▄   ▄▀▀▄ ▄▀▄              
        █   █   █ █      █ █      █ █  █ ▀  █              
        ▐  █▀▀█▀  █      █ █      █ ▐  █    █              
         ▄▀    █  ▀▄    ▄▀ ▀▄    ▄▀   █    █               
        █     █     ▀▀▀▀     ▀▀▀▀   ▄▀   ▄▀                
        ▐     ▐                     █    █                 
                                    ▐    ▐                 
___________                                    ___________.__             __________                       
\_   _____/ ______ ____ _____  ______   ____   \__    ___/|  |__   ____   \______   \ ____   ____   _____  
 |    __)_ /  ___// ___\\__  \ \____ \_/ __ \    |    |   |  |  \_/ __ \   |       _//  _ \ /  _ \ /     \ 
 |        \\___ \\  \___ / __ \|  |_> >  ___/    |    |   |   Y  \  ___/   |    |   (  <_> |  <_> )  Y Y  \
/_______  /____  >\___  >____  /   __/ \___  >   |____|   |___|  /\___  >  |____|_  /\____/ \____/|__|_|  /
        \/     \/     \/     \/|__|        \/                  \/     \/          \/                    \/</_>

*/
import inquirer from 'inquirer'
import Player from './player.js'
import Enemy from './enemy.js'

function askMultipleChoice(question, choices) {//multi choice
  console.log(question);
  for (let i = 0; i < choices.length; i++) {
    console.log(`${i + 1}. ${choices[i]}`);
  }

  const userInput = parseInt(window.prompt("Enter the number of your choice:"));

  if (userInput >= 1 && userInput <= choices.length) {
    return userInput - 1;
  } else {
    console.log("Invalid choice. Defaulting to the first option.");
    return 0;
  }
}
function startBattle(player, enemy) {
  console.log(`${enemy.name} approaches! Get ready for battle.`);

  
  const playerAttack = player.generateRandomDamage(3, 5);//player's attack
  console.log(`${player.name} attacks ${enemy.name} for ${playerAttack} damage!`);

  
  const enemyAttack = enemy.generateRandomDamage(1, 5);// enemy's attack
  if (Math.random() * 100 < player.luck) {
    console.log(`${enemy.name} missed the attack!`);
  } else {
    player.health -= enemyAttack;
    console.log(`${enemy.name} counterattacks ${player.name} for ${enemyAttack} damage!`);
    console.log(`${player.name}'s health: ${player.health}`);
  }
}
function startBattle(player, enemy) {
  console.log(`${enemy.name} approaches! Get ready for battle.`);

  // Simulate player's attack
  const playerAttack = player.generateRandomDamage(3, 5);
  console.log(`${player.name} attacks ${enemy.name} for ${playerAttack} damage!`);

  // Simulate enemy's attack
  const enemyAttack = enemy.generateRandomDamage(1, 5);
  if (Math.random() * 100 < player.luck) {
    console.log(`${enemy.name} missed the attack!`);
  } else {
    player.health -= enemyAttack;
    console.log(`${enemy.name} counterattacks ${player.name} for ${enemyAttack} damage!`);
    console.log(`${player.name}'s health: ${player.health}`);
  }
}
  //Bootup
  function startGame() {
      console.log("You awaken in a dimly lit room, disoriented and groggy. The air is heavy, and an eerie silence surrounds you. As your eyes adjust to the low light, you notice the cold, stone walls that confine you.");
  
  //Players inputed name
  const playerName = prompt("Enter your name:");
  
  //players inputed difficulty
  const difficultyOptions = ["easy", "medium", "hard"];
  let difficulty = prompt("Choose difficulty (easy, medium, hard):");
  
  if (!difficultyOptions.includes(difficulty)) {
    console.log("Invalid difficulty. Defaulting to medium.");
    difficulty = "medium";
  }
  
  //Createing the player
  const player = new Player(playerName, difficulty);

  console.log(`Welcome, ${player.name}! Your chosen difficulty is ${player.difficulty}.`);
  console.log(`Your initial attack damage is ${player.attackDamage}, luck is ${player.luck}.`);
  
  //enemys instances bassed on difficulty
  const enemy1 = new Enemy("Enemy1", difficulty, 50, 1, 5, 8, 15);
  const enemy2 = new Enemy("Enemy2", difficulty, 70, 1, 5, 10, 10);
    
  const choices = ["You approach the mysterious door...", "You look around the room."];
  const choiceIndex = askMultipleChoice("What would you like to do?", choices);

  switch (choiceIndex) {
    case 0:
      console.log("You approach the mysterious door...");
      console.log("you try to open the door any way you can think of but to no avail")
      console.log("all you can hear is a dog barking though the door")
      break;
    case 1:
      console.log("You look around the room")
      console.log("but only see a boarded up window that has been also barred on the other side too");
      console.log("and also a small hole in the wall")              
      break;
    default:
      console.log("Invalid choice. Continuing with the default scenario.");
      break;
  }

  const choices2 = ["check the window just incase its loose", "attempt to break the door", "take your time and rest", "Shout for help"];
  const choiceIndex2 = askMultipleChoice("What would you like to do?", choices2);

  switch (choiceIndex2) {
    case 0:
      console.log("check the window just incase its loose");
      console.log("you try to open the winow but its locked tight")
      console.log("you can still hear a dog barking though")
      break;
    case 1:
      console.log("attempt to break the door")
      console.log("with all the strength you can muster you hurl yourself at the door!");
      console.log("but it dose nothing but chip a chunk of wood off the door frame")
      break;
    case 2:
      console.log("take your time and rest")
      console.log("you try to remember what lead to you being locked in this room")
      console.log("you notice a large bump on your head this explanes the concust feeling ive got")
      break;
    case 3:
      console.log("Shout for help")
      console.log("You start Shouting at the top of your lung HELP!!!")
      console.log("you hear a loud commotion comming from that small hole")               
      break;
    default:
      console.log("Invalid choice. Continuing with the default scenario.");
      break;
  }
  console.log("Suddenly, a strange noise echoes through the chamber, sending a shiver down your spine.")
  console.log("A mysterious creatures emerge from the shadows, their eyes glowing with an otherworldly intensity.")
  console.log("it looks like a twisted amalgamation of a Centipede and a Rat.")
  console.log("Your heart races as the creature advance, and you realize that your only way out is to confront it.")
  console.log("The room offers minimal cover, and you brace yourself for the impending battle.")
  
  const battleChoices = ["you attack the creature", "You look around the room.", "try to escape"];
  const battleChoiceIndex = askMultipleChoice("What would you like to do?", battleChoices);

  switch (battelChoiceIndex) {
    case 0:
      console.log("you attack the creature");
      console.log("the creature recoils as if being touched by you makes it heave in discust")
      break;
    case 1:
      console.log("you brace for an attack")
      console.log("you prepare to be hit ");
    case 2:
      console.log("try to escape")
      console.log("there is noware to escape too")                    
      break;
    default:
      console.log("Invalid choice. Continuing with the default scenario.");
      break;
  }
  enemy1.attack(player);
  console.log("The creatures snarl and hiss, closing in on you with malicious intent.")
  console.log("The battle is over. Take a moment to recover.");
  }
  startGame();
/*
 ▄▀▀▀▀▄    ▄▀▀█▄   ▄▀▀▄ ▄▀▄  ▄▀▀█▄▄▄▄     
█         ▐ ▄▀ ▀▄ █  █ ▀  █ ▐  ▄▀   ▐     
█    ▀▄▄    █▄▄▄█ ▐  █    █   █▄▄▄▄▄      
█     █ █  ▄▀   █   █    █    █    ▌      
▐▀▄▄▄▄▀ ▐ █   ▄▀  ▄▀   ▄▀    ▄▀▄▄▄▄       
▐         ▐   ▐   █    █     █    ▐       
                  ▐    ▐     ▐            
 ▄▀▀▀▀▄   ▄▀▀▄ ▄▀▀▄  ▄▀▀█▄▄▄▄  ▄▀▀▄▀▀▀▄   
█      █ █   █    █ ▐  ▄▀   ▐ █   █   █   
█      █ ▐  █    █    █▄▄▄▄▄  ▐  █▀▀█▀    
▀▄    ▄▀    █   ▄▀    █    ▌   ▄▀    █    
  ▀▀▀▀       ▀▄▀     ▄▀▄▄▄▄   █     █     
                     █    ▐   ▐     ▐     
                     ▐                  


*/
