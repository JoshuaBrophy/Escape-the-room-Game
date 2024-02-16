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
import Player from './player.js';
import Enemy from './enemy.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askMultipleChoice(question, choices, callback) {
  console.log(question);
  for (let i = 0; i < choices.length; i++) {
    console.log(`${i + 1}. ${choices[i]}`);
  }

  rl.question('Enter the number of your choice: ', (userInput) => {
    const choice = parseInt(userInput);
    if (choice >= 1 && choice <= choices.length) {
      callback(choice - 1);
    } else {
      console.log('Invalid choice. Defaulting to the first option.');
      
      callback(0);
    }
  });
}

function startBattle(player, enemy) {
  console.log(`${enemy.name} approaches! Get ready for battle.`);

  const playerAttack = player.generateRandomDamage(3, 5);
  console.log(`${player.name} attacks ${enemy.name} for ${playerAttack} damage!`);

  const enemyAttack = enemy.generateRandomDamage(1, 5);
  if (Math.random() * 100 < player.luck) {
    console.log(`${enemy.name} missed the attack!`);
  } else {
    player.health -= enemyAttack;
    console.log(`${enemy.name} counterattacks ${player.name} for ${enemyAttack} damage!`);
    console.log(`${player.name}'s health: ${player.health}`);
  }
}

function startGame() {
  console.log("You awaken in a dimly lit room, disoriented and groggy. As your eyes adjust to the low light, you notice the cold, stone walls that confine you.");

  
  rl.question("Enter your name: ", (playerName) => {
    
    const difficultyOptions = ["easy", "medium", "hard"];
    askMultipleChoice("Choose difficulty (easy, medium, hard):", difficultyOptions, (difficultyIndex) => {
      const difficulty = difficultyOptions[difficultyIndex];

      console.log(`Welcome, ${playerName}! Your chosen difficulty is ${difficulty}.`);

      
      const player = new Player(playerName, difficulty);
      console.log(`Your initial attack damage is ${player.attackDamage}, luck is ${player.luck}.`);

      
      const enemy1 = new Enemy("Enemy1", difficulty, 50, 1, 5, 8, 15);
      const enemy2 = new Enemy("Enemy2", difficulty, 70, 1, 5, 10, 10);

      
      const choices = ["You approach the mysterious door...", "You look around the room."];
      askMultipleChoice("What would you like to do?", choices, (choiceIndex) => {
        switch (choiceIndex) {
          case 0:
            console.log("You approach the mysterious door...");
            console.log("you try to open the door any way you can think of but to no avail");
            console.log("all you can hear is a dog barking though the door");
            break;
          case 1:
            console.log("You look around the room");
            console.log("but only see a boarded-up window that has been also barred on the other side too");
            console.log("and also a small hole in the wall");
            break;
          default:
            console.log("Invalid choice. Continuing with the default scenario.");
            break;
        }

        
        
        rl.close();
      });
    });
  });
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
