class Player {
  constructor(name, difficulty) {
    this.name = name;
    this.difficulty = difficulty;
    this.health = 100;
    this.attackDamageRange = [3, 5];
    this.luck = 10;
  }

  generateRandomDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  attack(enemy) {
    const damage = this.generateRandomDamage(this.attackDamageRange[0], this.attackDamageRange[1]);
    console.log(`${this.name} attacks ${enemy.name} for ${damage} damage!`);
    enemy.health -= damage;
  }
}

export default Player;