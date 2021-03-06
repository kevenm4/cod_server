const { Schema, model } = require("mongoose");

const classSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  types: {
    assault_rifle: {
      imageUrl: String,
      name: String,
      accuracy: Number,
      range: Number,
      damage: Number,
      attachment: {
        muzzel: String,
        underbarrel: String,
        magazine: String,
        barrel: String,
        ammo_type: String,
        optic: String,
        stock: String,
        proficiency: String,
        kit: String,
        rear_grip: String,
      },
    },

    sniper: {
      imageUrl: String,
      name: String,
      accuracy: Number,
      range: Number,
      damage: Number,
      attachment: {
        muzzel: String,
        underbarrel: String,
        magazine: String,
        barrel: String,
        ammo_type: String,
        optic: String,
        stock: String,
        proficiency: String,
        kit: String,
        rear_grip: String,
      },
    },
    smgs: {
      imageUrl: String,
      name: String,
      accuracy: Number,
      range: Number,
      damage: Number,
      attachment: {
        muzzel: String,
        underbarrel: String,
        magazine: String,
        barrel: String,
        ammo_type: String,
        optic: String,
        stock: String,
        proficiency: String,
        kit: String,
        rear_grip: String,
      },
    },
    lmgs: {
      imageUrl: String,
      name: String,
      accuracy: Number,
      range: Number,
      damage: Number,
      attachment: {
        muzzel: String,
        underbarrel: String,
        magazine: String,
        barrel: String,
        ammo_type: String,
        optic: String,
        stock: String,
        proficiency: String,
        kit: String,
        rear_grip: String,
      },
    },
    shotguns: {
      imageUrl: String,
      name: String,
      accuracy: Number,
      range: Number,
      damage: Number,
      attachment: {
        muzzel: String,
        underbarrel: String,
        magazine: String,
        barrel: String,
        ammo_type: String,
        optic: String,
        stock: String,
        proficiency: String,
        kit: String,
        rear_grip: String,
      },
    },
    pistols: {
      imageUrl: String,
      name: String,
      accuracy: Number,
      range: Number,
      damage: Number,
      attachment: {
        muzzel: String,
        underbarrel: String,
        magazine: String,
        barrel: String,
        ammo_type: String,
        optic: String,
        stock: String,
        proficiency: String,
        kit: String,
        rear_grip: String,
      },
    },
    knifes: {
      imageUrl: String,
      name: String,
      accuracy: Number,
      range: Number,
      damage: Number,
    },
    launchers: {
      imageUrl: String,
      name: String,
      accuracy: Number,
      range: Number,
      damage: Number,
      attachment: {
        muzzel: String,
        underbarrel: String,
        magazine: String,
        barrel: String,
        ammo_type: String,
        optic: String,
        stock: String,
        proficiency: String,
        kit: String,
        rear_grip: String,
      },
    },
  },

  perk1: {
    imageUrl: String,
    name: String,
    description: String,
  },

  perk2: {
    imageUrl: String,
    name: String,
    description: String,
  },
});
const Class = model("Class", classSchema);
module.exports = Class;
