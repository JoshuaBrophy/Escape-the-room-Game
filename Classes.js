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

    increaseScore(points) {
      this.score += points;
    }

    generateRandomDamage(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    generateRandomLuck() {
      return Math.min(Math.floor(Math.random() * 21), 20);
    }
  }
    
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