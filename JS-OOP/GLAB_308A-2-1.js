
/******************************** Part One *********************************/
console.log("********************************* Part One ***********************************")
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion : {
            name: "Frank",
            type: "Flea",
            belongings: ["Hat", "Sunglasses"] 
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

adventurer.inventory.forEach(inv => {
    console.log(inv)
})

adventurer.roll(10)

/************************************** Part Two ****************************************/
console.log("************************************** Part Two **************************************")

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
    static MAX_HEALTH(maxHealth = 100){
        console.log(maxHealth)
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];


robin.roll(10)

/************************************** Part Three ****************************************/
console.log("************************************** Part Three **************************************")

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"]
    constructor (name, role, inventory) {
      super(name);
      // Adventurers have specialized roles.
      //this.role = role;
      this.role = this.ROLES.includes(role)?role:null;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins")
      this.inventory.push.apply(this.inventory, inventory);
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

class Companion extends Character {
    constructor (name, type) {
      super(name);
      // Companion have specialized types.
      this.type = type;
    }
    // Adventurers have the ability to scout ahead of them.
    addBelongings (arrBelong) {
      arrBelong.forEach(belong => {
        this.inventory.push(belong)
      });
    }
  }


const alex = new Adventurer("Alex","roleX",["sword", "potion", "artifact"])
const companion1 = new Companion("Leo", "Cat")
const companion2 = new Companion("Frank", "Flea")
companion2.addBelongings(["small hat", "sunglasses"])
alex.companion = companion1
companion1.companion = companion2
console.log(alex.inventory)

console.log(companion1.name)
companion1.roll()