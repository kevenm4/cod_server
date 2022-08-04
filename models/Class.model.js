const { Schema, model } = require("mongoose");

const classSchema = new Schema({
  name: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  types: {
    assault_rifle: {},

    sniper: {},
  },
  smgs: {
    lmgs: {},
    shotguns: {},
    pistols: {},
    knifes: {},
    launchers: {},
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
});
const Class = model("Class", classSchema);
module.exports = Class;
