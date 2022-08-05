const { Schema, model } = require("mongoose");

const classSchema = new Schema({
  name: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  assault_rifle: {
    type: String,
    enum: [
      "STG44",
      "Itra Burst",
      "BAR",
      "NZ-41",
      "Volkssturmgewehr",
      "AS44",
      "Automaton",
      "Cooper Carbine",
    ],
  },
  smgs: {
    type: String,
    enum: ["M1912", "STEN", "MP-40", "PPSh-41", "Owen Gun", "Type 100"],
  },
  shotguns: {
    type: String,
    enum: [
      "Einhorn Revolving",
      "Gacey Auto",
      "Combat Shotgun",
      "Double Barrel",
    ],
  },
  lmgs: { type: String, enum: ["MG42", "DP27", "Bren", "Type 11"] },
  marksman_rifles: { type: String, enum: ["M1 Garand", "SVT-40", "G-43"] },
  sniper: {
    type: String,
    enum: ["3-Line Rifle", "Kar98k", "Type 99", "Gorenko Anti-Tank Rifle"],
  },
  handguns: {
    type: String,
    enum: ["Machine Pistol", "RATT", "1911", "Top Break", "Klauser"],
  },
  melee: { type: String, enum: ["FS Fighting Knife", "Sawtooth", "Katana"] },
  launchers: {
    type: String,
    enum: ["M1 Bazooka", "Panzerschreck", "Panzerfaust", "Mk11 Launcher"],
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
