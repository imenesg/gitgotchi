const { createApp } = Vue;

createApp({
  data() {
    return {
      buttonStatus: false,
      love: 50,
      satiety: 50,
      health: 100,
      energy: 100,
      awake: true,
      poop: false,
    };
  },
  methods: {
    returnBg(data) {
      let bg;
      if (data) {
        bg = "white";
      } else {
        bg = "dark";
      }
      return bg;
    },
    showPoop() {
      if (this.satiety > 50 && this.poop == false) {
        let poopInterval = setInterval(() => {
          if (Math.floor(Math.random() * 10) > 5 ) {
            this.poop = true;
            clearInterval(poopInterval);
          }
        }, 5000);
      }
    },
    returnClass(data) {
      var colorClass;
      if (data >= 66.6) {
        colorClass = "text-success";
      } else if (data <= 33.3) {
        colorClass = "text-danger";
      } else {
        colorClass = "text-warning";
      }
      return colorClass;
    },
    setMaxMinAttributes() {
      this.love > 100 ? (this.love = 100) : (this.love = this.love);
      this.satiety > 100 ? (this.satiety = 100) : (this.satiety = this.satiety);
      this.health > 100 ? (this.health = 100) : (this.health = this.health);
      this.energy > 100 ? (this.energy = 100) : (this.health = this.energy);

      this.love < 0 ? (this.love = 0) : (this.love = this.love);
      this.satiety < 0 ? (this.satiety = 0) : (this.satiety = this.satiety);
      this.health < 0 ? (this.health = 0) : (this.health = this.health);
      this.energy < 0 ? (this.energy = 100) : (this.health = this.energy);

      console.table(
        "love=",
        this.love,
        " satiety=",
        this.satiety,
        " health=",
        this.health,
        " energy=",
        this.energy
      );
    },
    feed() {
      this.satiety = this.satiety + 10;
      this.love = this.love + 5;
      this.health = this.health - 3;
      this.setMaxMinAttributes();

      this.showPoop();
    },
    playWith() {
      this.satiety = this.satiety - 5;
      this.energy = this.energy - 5;
      this.love = this.love + 10;
      this.health = this.health + 3;
      this.setMaxMinAttributes();
    },
    care() {
      this.satiety = this.satiety - 7;
      this.love = this.love - 10;
      this.health = this.health + 10;
      this.setMaxMinAttributes();
    },
    bath() {
      this.love = this.love - 5;
      this.health = this.health + 3;
      this.poop = false;
      this.setMaxMinAttributes();
    },
    bed() {
      this.awake = !this.awake;
      
      this.buttonStatus = !this.buttonStatus
      if (this.awake == false) {
        let sleepInterval = setInterval(() => {
          if (this.awake == true) {
            clearInterval(sleepInterval);
          }
          (this.satiety = this.satiety - 3), (this.energy = this.energy + 10);
          this.setMaxMinAttributes();
        }, 5000);
      }
    },
    life() {
      let lifeInterval = setInterval(() => {
        let drawnNumber = Math.floor(Math.random() * 10);
        if (drawnNumber > 1 && drawnNumber <= 3) {
          this.health = this.health - 5;
          this.satiety = this.satiety - 3;
        } else if (drawnNumber > 3 && drawnNumber <= 6) {
          this.love = this.love - 5;
          this.satiety = this.satiety - 3;
        } else if (drawnNumber >= 6) {
          this.energy = this.energy - 5;
          this.satiety = this.satiety - 3;
        }
        this.setMaxMinAttributes();
      }, 120000);
    },
  },
  async mounted() {
    this.life();
  },
}).mount("#app");
