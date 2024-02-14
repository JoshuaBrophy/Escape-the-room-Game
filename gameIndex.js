/*
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
  //Bootup
  function startGame() {
      console.log("Welcome to the Escape the Room!");
  
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
  
  
  //naration
  console.log("You find yourself in a challenging situation. Get ready for battle!");
  
  enemy1.attack(player);
  
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
