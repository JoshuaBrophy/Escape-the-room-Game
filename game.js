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

    rl.question('Do you want to make another choice? (yes/no): ', (answer) => {
      if (answer.toLowerCase() === 'yes') {
        askMultipleChoice(question, choices, callback);
      } else {
        rl.close();
      }
    });
  });
}

function battleRound(player, enemy, callback) {
  const battleChoices = ["Attack the creature", "flail in dissary.", "Try to escape"];
  askMultipleChoice("What would you like to do?", battleChoices, (choiceIndex) => {
    switch (choiceIndex) {
      case 0:
        console.log("You attack the creature");
        player.attack(enemy);
        console.log("The creature recoils as if being touched by you makes it heave in disgust");
        enemy.attack(player);
        break;
      case 1:
        console.log("flail in dissary");
        console,log("the creature imatates you. maybee its mocking you")
        break;
      case 2:
        console.log("Try to escape");
        console.log("There is nowhere to escape to");
        break;
      default:
        console.log("Invalid choice. Continuing with the default scenario.");
        break;
    }

    if (player.health <= 0) {
      console.log(`
 ▄▀▀▀▀▄   ▄▀▀█▄   ▄▀▀▄ ▄▀▄  ▄▀▀█▄▄▄▄     
█      █ ▐ ▄▀ ▀▄ █  █ ▀  █ ▐  ▄▀   ▐     
█      █   █▄▄▄█ ▐  █    █   █▄▄▄▄▄      
█     █ █  ▄▀   █   █    █    █    ▌      
▐▀▄▄▄▄▀ ▐ █   ▄▀  ▄▀   ▄▀    ▄▀▄▄▄▄       
 ▐         ▐   ▐   █    █     █    ▐       
                   ▐    ▐     ▐            
 ▄▀▀▀▀▄   ▄▀▀▄ ▄▀▀▄  ▄▀▀█▄▄▄▄  ▄▀▀▄▀▀▀▄   
█      █ █   █    █ ▐  ▄▀   ▐ █   █   █   
█      █ ▐  █    █    █▄▄▄▄▄  ▐  █▀▀█▀    
▀▄    ▄▀   █   ▄▀    █    ▌   ▄▀    █    
  ▀▀▀▀      ▀▄▀     ▄▀▄▄▄▄   █     █     
                     █    ▐   ▐     ▐     
                     ▐                  
`);

      rl.close();
    } else if (enemy.health <= 0) {
      console.log("You defeated the creature!");
      callback();
    } else {
      battleRound(player, enemy, callback);
    }
  });
}

function acquireKey(player) {
  console.log("Congratulations! You've defeated the enemie look for loot.");
  console.log("You carefully examine the room and find a hidden key.");
  console.log("as you unlock the door and go to step outside your hit on the head and knocked out")
  console.log("DID YOU ESCAPE? FIND OUT NEXT WEEK ON")
  console.log(`
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
  `);

  rl.close();
}

function startGame() {
  console.log("You awaken in a dimly lit room, disoriented and groggy. As your eyes adjust to the low light, you notice the cold, stone walls that confine you.");
  console.log(`
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
  `);

  rl.question("Enter your name: ", (playerName) => {
    const difficultyOptions = ["easy", "medium", "hard"];
    askMultipleChoice("Choose difficulty (easy, medium, hard):", difficultyOptions, (difficultyIndex) => {
      const difficulty = difficultyOptions[difficultyIndex];

      console.log(`Welcome, ${playerName}! Your chosen difficulty is ${difficulty}.`);

      const player = new Player(playerName, difficulty);
      console.log(`Your initial attack damage is ${player.attackDamage}, luck is ${player.luck}.`);

      const enemy1 = new Enemy("Enemy1", difficulty, 50, 1, 5, 8, 15);
      const enemy2 = new Enemy("Enemy2", difficulty, 70, 1, 5, 10, 10);

      const choices1 = ["You approach the mysterious door...", "You look around the room."];
      askMultipleChoice("What would you like to do?", choices1, (choiceIndex1) => {
        switch (choiceIndex1) {
          case 0:
            console.log("You approach the mysterious door...");
            console.log("you try to open the door any way you can think of but to no avail");
            console.log("all you can hear is a dog barking though the door");
            break;
          case 1:
            console.log("You look around the room");
            const choices2 = ["check the window just in case it's loose", "attempt to break the door", "take your time and rest", "Shout for help"];
            askMultipleChoice("What would you like to do?", choices2, (choiceIndex2) => {
              switch (choiceIndex2) {
                case 0:
                  console.log("check the window just in case it's loose");
                  console.log("you try to open the window but it's locked tight");
                  console.log("you can still hear a dog barking though");
                  break;
                case 1:
                  console.log("attempt to break the door");
                  console.log("with all the strength you can muster you hurl yourself at the door!");
                  console.log("but it does nothing but chip a chunk of wood off the door frame");
                  break;
                case 2:
                  console.log("take your time and rest");
                  console.log("you try to remember what led to you being locked in this room");
                  console.log("you notice a large bump on your head this explains the concussed feeling you've got");
                  break;
                case 3:
                  console.log("Shout for help");
                  console.log("You start shouting at the top of your lungs, HELP!!!");
                  console.log("you hear a loud commotion coming from that small hole");
                  break;
                default:
                  console.log("Invalid choice. Continuing with the default scenario.");
                  break;
              }

              console.log("Suddenly, a strange noise echoes through the chamber, sending a shiver down your spine.")
              console.log("A mysterious creature emerges from the shadows, its eyes glowing with an otherworldly intensity.")
              console.log("It looks like a twisted amalgamation of a Centipede and a Rat.")
              console.log("Your heart races as the creature advances, and you realize that your only way out is to confront it.")
              console.log("The room offers minimal cover, and you brace yourself for the impending battle.");

              // Call the battleRound function to start the battle
              battleRound(player, enemy1, () => {
                console.log("The battle is over. Take a moment to recover.");
                acquireKey(player);
              });
            });
            break;
          default:
            console.log("Invalid choice. Continuing with the default scenario.");
            break;
        }
      });
    });
  });
}

startGame();
