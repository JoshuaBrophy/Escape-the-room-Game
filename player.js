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
export default Player;
    
  