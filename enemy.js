export default class Enemy {
    constructor(name, difficulty, health, minAttackDamage, maxAttackDamage, speed, luck) {
      this.name = name;
      this.difficulty = difficulty;
      this.health = 60;
      this.minAttackDamage = 3;
      this.maxAttackDamage = 7;
      this.speed = speed;
      this.luck = Math.min(luck, 20);
    }
  
    attack(player) {
      
      const hitChance = Math.random() * 100;
      if (hitChance < player.luck) {
        console.log(`${this.name} missed the attack!`);
      } else {
        const damage = this.generateRandomDamage(this.minAttackDamage, this.maxAttackDamage);
        player.health -= damage;
        console.log(`${this.name} attacked ${player.name} for ${damage} damage!`);
        console.log(`${player.name}'s health: ${player.health}`);
      }
  
     
    }
  
    generateRandomDamage(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }