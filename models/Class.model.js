const { Schema, model } = require("mongoose");

const classSchema = new Schema({
  name: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  assault_rifle: {
    img: {
      type: String,
      default:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-warzone/1/18/2021-12-21_19_01_06-C%E2%80%8Ba%E2%80%8Bl%E2%80%8Bl%E2%80%8B_%E2%80%8Bo%E2%80%8Bf%E2%80%8B_%E2%80%8BD%E2%80%8Bu%E2%80%8Bt%E2%80%8By%E2%80%8B%C2%AE%E2%80%8B_%E2%80%8B_%E2%80%8BM%E2%80%8Bo%E2%80%8Bd%E2%80%8Be%E2%80%8Br%E2%80%8Bn%E2%80%8B_%E2%80%8BW%E2%80%8Ba%E2%80%8Br%E2%80%8Bf%E2%80%8Ba%E2%80%8Br%E2%80%8Be%E2%80%8B%C2%AE%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B.jpg?width=1920",
    },
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
    img: {
      type: String,
      default:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-warzone/e/e9/2021-12-21_19_14_46-C%E2%80%8Ba%E2%80%8Bl%E2%80%8Bl%E2%80%8B_%E2%80%8Bo%E2%80%8Bf%E2%80%8B_%E2%80%8BD%E2%80%8Bu%E2%80%8Bt%E2%80%8By%E2%80%8B%C2%AE%E2%80%8B_%E2%80%8B_%E2%80%8BM%E2%80%8Bo%E2%80%8Bd%E2%80%8Be%E2%80%8Br%E2%80%8Bn%E2%80%8B_%E2%80%8BW%E2%80%8Ba%E2%80%8Br%E2%80%8Bf%E2%80%8Ba%E2%80%8Br%E2%80%8Be%E2%80%8B%C2%AE%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B.jpg?width=1920",
    },
    type: String,
    enum: ["M1912", "STEN", "MP-40", "PPSh-41", "Owen Gun", "Type 100"],
  },
  shotguns: {
    img: {
      type: String,
      default:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-warzone/8/80/2021-12-21_20_59_24-%E2%80%8BC%E2%80%8Ba%E2%80%8Bl%E2%80%8Bl%E2%80%8B_%E2%80%8Bo%E2%80%8Bf%E2%80%8B_%E2%80%8BD%E2%80%8Bu%E2%80%8Bt%E2%80%8By%E2%80%8B%C2%AE%E2%80%8B_%E2%80%8B_%E2%80%8BM%E2%80%8Bo%E2%80%8Bd%E2%80%8Be%E2%80%8Br%E2%80%8Bn%E2%80%8B_%E2%80%8BW%E2%80%8Ba%E2%80%8Br%E2%80%8Bf%E2%80%8Ba%E2%80%8Br%E2%80%8Be%E2%80%8B%C2%AE%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B.jpg?width=1920",
    },
    type: String,
    enum: [
      "Einhorn Revolving",
      "Gacey Auto",
      "Combat Shotgun",
      "Double Barrel",
    ],
  },
  lmgs: {
    img: {
      type: String,
      default:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-warzone/5/52/2021-12-21_21_04_23-%E2%80%8BC%E2%80%8Ba%E2%80%8Bl%E2%80%8Bl%E2%80%8B_%E2%80%8Bo%E2%80%8Bf%E2%80%8B_%E2%80%8BD%E2%80%8Bu%E2%80%8Bt%E2%80%8By%E2%80%8B%C2%AE%E2%80%8B_%E2%80%8B_%E2%80%8BM%E2%80%8Bo%E2%80%8Bd%E2%80%8Be%E2%80%8Br%E2%80%8Bn%E2%80%8B_%E2%80%8BW%E2%80%8Ba%E2%80%8Br%E2%80%8Bf%E2%80%8Ba%E2%80%8Br%E2%80%8Be%E2%80%8B%C2%AE%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B.jpg?width=1920",
    },
    type: String,
    enum: ["MG42", "DP27", "Bren", "Type 11"],
  },
  marksman_rifles: {
    img: {
      type: String,
      default:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-warzone/7/74/2021-12-21_21_08_47-%E2%80%8BC%E2%80%8Ba%E2%80%8Bl%E2%80%8Bl%E2%80%8B_%E2%80%8Bo%E2%80%8Bf%E2%80%8B_%E2%80%8BD%E2%80%8Bu%E2%80%8Bt%E2%80%8By%E2%80%8B%C2%AE%E2%80%8B_%E2%80%8B_%E2%80%8BM%E2%80%8Bo%E2%80%8Bd%E2%80%8Be%E2%80%8Br%E2%80%8Bn%E2%80%8B_%E2%80%8BW%E2%80%8Ba%E2%80%8Br%E2%80%8Bf%E2%80%8Ba%E2%80%8Br%E2%80%8Be%E2%80%8B%C2%AE%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B.jpg?width=1920",
    },
    type: String,
    enum: ["M1 Garand", "SVT-40", "G-43"],
  },
  sniper: {
    img: {
      type: String,
      default:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-warzone/d/db/2021-12-21_21_11_29-%E2%80%8BC%E2%80%8Ba%E2%80%8Bl%E2%80%8Bl%E2%80%8B_%E2%80%8Bo%E2%80%8Bf%E2%80%8B_%E2%80%8BD%E2%80%8Bu%E2%80%8Bt%E2%80%8By%E2%80%8B%C2%AE%E2%80%8B_%E2%80%8B_%E2%80%8BM%E2%80%8Bo%E2%80%8Bd%E2%80%8Be%E2%80%8Br%E2%80%8Bn%E2%80%8B_%E2%80%8BW%E2%80%8Ba%E2%80%8Br%E2%80%8Bf%E2%80%8Ba%E2%80%8Br%E2%80%8Be%E2%80%8B%C2%AE%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B.jpg?width=1920",
    },
    type: String,
    enum: ["3-Line Rifle", "Kar98k", "Type 99", "Gorenko Anti-Tank Rifle"],
  },
  handguns: {
    img: {
      type: String,
      default:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-warzone/3/38/2021-12-21_21_19_54-%E2%80%8BC%E2%80%8Ba%E2%80%8Bl%E2%80%8Bl%E2%80%8B_%E2%80%8Bo%E2%80%8Bf%E2%80%8B_%E2%80%8BD%E2%80%8Bu%E2%80%8Bt%E2%80%8By%E2%80%8B%C2%AE%E2%80%8B_%E2%80%8B_%E2%80%8BM%E2%80%8Bo%E2%80%8Bd%E2%80%8Be%E2%80%8Br%E2%80%8Bn%E2%80%8B_%E2%80%8BW%E2%80%8Ba%E2%80%8Br%E2%80%8Bf%E2%80%8Ba%E2%80%8Br%E2%80%8Be%E2%80%8B%C2%AE%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B.jpg?width=1920",
    },
    type: String,
    enum: ["Machine Pistol", "RATT", "1911", "Top Break", "Klauser"],
  },
  melee: {
    img: {
      type: String,
      default:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-warzone/6/61/2021-12-21_21_30_07-%E2%80%8BC%E2%80%8Ba%E2%80%8Bl%E2%80%8Bl%E2%80%8B_%E2%80%8Bo%E2%80%8Bf%E2%80%8B_%E2%80%8BD%E2%80%8Bu%E2%80%8Bt%E2%80%8By%E2%80%8B%C2%AE%E2%80%8B_%E2%80%8B_%E2%80%8BM%E2%80%8Bo%E2%80%8Bd%E2%80%8Be%E2%80%8Br%E2%80%8Bn%E2%80%8B_%E2%80%8BW%E2%80%8Ba%E2%80%8Br%E2%80%8Bf%E2%80%8Ba%E2%80%8Br%E2%80%8Be%E2%80%8B%C2%AE%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B.jpg?width=1920",
    },
    type: String,
    enum: ["FS Fighting Knife", "Sawtooth", "Katana"],
  },
  launchers: {
    img: {
      type: String,
      default:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-warzone/e/ea/2021-12-21_21_26_01-%E2%80%8BC%E2%80%8Ba%E2%80%8Bl%E2%80%8Bl%E2%80%8B_%E2%80%8Bo%E2%80%8Bf%E2%80%8B_%E2%80%8BD%E2%80%8Bu%E2%80%8Bt%E2%80%8By%E2%80%8B%C2%AE%E2%80%8B_%E2%80%8B_%E2%80%8BM%E2%80%8Bo%E2%80%8Bd%E2%80%8Be%E2%80%8Br%E2%80%8Bn%E2%80%8B_%E2%80%8BW%E2%80%8Ba%E2%80%8Br%E2%80%8Bf%E2%80%8Ba%E2%80%8Br%E2%80%8Be%E2%80%8B%C2%AE%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B.jpg?width=1920",
    },
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
