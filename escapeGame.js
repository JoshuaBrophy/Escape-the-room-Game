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
class Player {
    constructor(name, difficulty) {
      this.name = name;
      this.difficulty = difficulty;
      this.score = 0;
      this.health = 100;
      this.attackDamage = this.generateRandomDamage(3, 5);
      this.speed = 10;
      this.luck = this.generateRandomLuck();
    }
    }
  
  /*
    increaseScore(points) {
      this.score += points;
    }

    generateRandomDamage(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    generateRandomLuck() {
      return Math.min(Math.floor(Math.random() * 21), 20); // Cap luck at 20
    }
  */
    
  
  
class Enemy {
  constructor(name, difficulty, health, minAttackDamage, maxAttackDamage, speed, luck) {
    this.name = name;
    this.difficulty = difficulty;
    this.health = health;
    this.minAttackDamage = minAttackDamage;
    this.maxAttackDamage = maxAttackDamage;
    this.speed = speed;
    this.luck = Math.min(luck, 20);
  }
}
generateRandomDamage(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame() {
  console.log("Welcome to");
  console.log(" ▄▀▀█▄▄▄▄  ▄▀▀▀▀▄  ▄▀▄▄▄▄   ▄▀▀█▄   ▄▀▀▄▀▀▀▄  ▄▀▀█▄▄▄▄     
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
                                      ▐    ▐");
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
