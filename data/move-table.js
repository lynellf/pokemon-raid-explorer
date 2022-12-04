const moveTable = {
  Bite: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Bite",
    movePower: "60",
    movePowerPoints: "25",
    moveType: " Dark"
  },
  Counter: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Counter",
    movePower: "??",
    movePowerPoints: "20",
    moveType: " Fighting"
  },
  "Belly Drum": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Belly Drum",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Iron Tail": {
    moveAccuracy: "75",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Iron Tail",
    movePower: "100",
    movePowerPoints: "15",
    moveType: " Steel"
  },
  "Metal Claw": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Metal Claw",
    movePower: "50",
    movePowerPoints: "35",
    moveType: " Steel"
  },
  "Ancient Power": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Ancient Power",
    movePower: "60",
    movePowerPoints: "5",
    moveType: " Rock"
  },
  "Dragon Rush": {
    moveAccuracy: "75",
    moveCategory: " Physical Move",
    moveEffectPct: "20",
    moveName: "Dragon Rush",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Dragon"
  },
  "Dragon Tail": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Dragon Tail",
    movePower: "60",
    movePowerPoints: "10",
    moveType: " Dragon"
  },
  Scratch: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Scratch",
    movePower: "40",
    movePowerPoints: "35",
    moveType: " Normal"
  },
  Growl: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Growl",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Normal"
  },
  Ember: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Ember",
    movePower: "40",
    movePowerPoints: "25",
    moveType: " Fire"
  },
  Smokescreen: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Smokescreen",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Dragon Breath": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Dragon Breath",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Dragon"
  },
  "Fire Fang": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Fire Fang",
    movePower: "65",
    movePowerPoints: "15",
    moveType: " Fire"
  },
  Slash: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Slash",
    movePower: "70",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  Flamethrower: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Flamethrower",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Fire"
  },
  "Scary Face": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Scary Face",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Fire Spin": {
    moveAccuracy: "85",
    moveCategory: " Special Move",
    moveEffectPct: "100",
    moveName: "Fire Spin",
    movePower: "35",
    movePowerPoints: "15",
    moveType: " Fire"
  },
  Inferno: {
    moveAccuracy: "50",
    moveCategory: " Special Move",
    moveEffectPct: "100",
    moveName: "Inferno",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Fire"
  },
  "Flare Blitz": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Flare Blitz",
    movePower: "120",
    movePowerPoints: "15",
    moveType: " Fire"
  },
  "Take Down": {
    moveAccuracy: "85",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Take Down",
    movePower: "90",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  Protect: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Protect",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Facade: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Facade",
    movePower: "70",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  Swift: {
    moveAccuracy: "101",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Swift",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Rock Tomb": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Rock Tomb",
    movePower: "60",
    movePowerPoints: "15",
    moveType: " Rock"
  },
  "Flame Charge": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Flame Charge",
    movePower: "50",
    movePowerPoints: "20",
    moveType: " Fire"
  },
  Fling: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Fling",
    movePower: "??",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  Endure: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Endure",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Sunny Day": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Sunny Day",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Fire"
  },
  Dig: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Dig",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Ground"
  },
  "False Swipe": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "False Swipe",
    movePower: "40",
    movePowerPoints: "40",
    moveType: " Normal"
  },
  "Brick Break": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Brick Break",
    movePower: "75",
    movePowerPoints: "15",
    moveType: " Fighting"
  },
  "Shadow Claw": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Shadow Claw",
    movePower: "70",
    movePowerPoints: "15",
    moveType: " Ghost"
  },
  "Body Slam": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Body Slam",
    movePower: "85",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  "Fire Punch": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Fire Punch",
    movePower: "75",
    movePowerPoints: "15",
    moveType: " Fire"
  },
  "Thunder Punch": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Thunder Punch",
    movePower: "75",
    movePowerPoints: "15",
    moveType: " Electric"
  },
  "Sleep Talk": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Sleep Talk",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Dragon Claw": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Dragon Claw",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Dragon"
  },
  Rest: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Rest",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Psychic"
  },
  "Rock Slide": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Rock Slide",
    movePower: "75",
    movePowerPoints: "10",
    moveType: " Rock"
  },
  "Swords Dance": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Swords Dance",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Dragon Dance": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Dragon Dance",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Dragon"
  },
  Substitute: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Substitute",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Will-O-Wisp": {
    moveAccuracy: "85",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Will-O-Wisp",
    movePower: "--",
    movePowerPoints: "15",
    moveType: "O"
  },
  Crunch: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Crunch",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Dark"
  },
  "Dragon Pulse": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Dragon Pulse",
    movePower: "85",
    movePowerPoints: "10",
    moveType: " Dragon"
  },
  "Heat Wave": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Heat Wave",
    movePower: "95",
    movePowerPoints: "10",
    moveType: " Fire"
  },
  "Helping Hand": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Helping Hand",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Fire Blast": {
    moveAccuracy: "85",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Fire Blast",
    movePower: "110",
    movePowerPoints: "5",
    moveType: " Fire"
  },
  "Fire Pledge": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Fire Pledge",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Fire"
  },
  Outrage: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Outrage",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Dragon"
  },
  Overheat: {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Overheat",
    movePower: "130",
    movePowerPoints: "5",
    moveType: " Fire"
  },
  "Focus Blast": {
    moveAccuracy: "70",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Focus Blast",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Fighting"
  },
  "Tera Blast": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Tera Blast",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Air Slash": {
    moveAccuracy: "95",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Air Slash",
    movePower: "75",
    movePowerPoints: "15",
    moveType: " Flying"
  },
  Acrobatics: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Acrobatics",
    movePower: "55",
    movePowerPoints: "15",
    moveType: " Flying"
  },
  "Aerial Ace": {
    moveAccuracy: "101",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Aerial Ace",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Flying"
  },
  Bulldoze: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Bulldoze",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Ground"
  },
  "Air Cutter": {
    moveAccuracy: "95",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Air Cutter",
    movePower: "60",
    movePowerPoints: "25",
    moveType: " Flying"
  },
  Sandstorm: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Sandstorm",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Rock"
  },
  Fly: {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Fly",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Flying"
  },
  Earthquake: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Earthquake",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Ground"
  },
  "Giga Impact": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Giga Impact",
    movePower: "150",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "Blast Burn": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Blast Burn",
    movePower: "150",
    movePowerPoints: "5",
    moveType: " Fire"
  },
  Hurricane: {
    moveAccuracy: "70",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Hurricane",
    movePower: "110",
    movePowerPoints: "10",
    moveType: " Flying"
  },
  "Hyper Beam": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Hyper Beam",
    movePower: "150",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "Solar Beam": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Solar Beam",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  Flail: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Flail",
    movePower: "??",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  Present: {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Present",
    movePower: "??",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  "Fake Out": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "100",
    moveName: "Fake Out",
    movePower: "40",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Charge: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Charge",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Electric"
  },
  Wish: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Wish",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Tickle: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Tickle",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Disarming Voice": {
    moveAccuracy: "101",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Disarming Voice",
    movePower: "40",
    movePowerPoints: "15",
    moveType: " Fairy"
  },
  "Volt Tackle": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Volt Tackle",
    movePower: "120",
    movePowerPoints: "15",
    moveType: " Electric"
  },
  Nuzzle: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "100",
    moveName: "Nuzzle",
    movePower: "20",
    movePowerPoints: "20",
    moveType: " Electric"
  },
  "Nasty Plot": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Nasty Plot",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Dark"
  },
  Charm: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Charm",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Fairy"
  },
  "Sweet Kiss": {
    moveAccuracy: "75",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Sweet Kiss",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Fairy"
  },
  "Play Nice": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Play Nice",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Quick Attack": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Quick Attack",
    movePower: "40",
    movePowerPoints: "30",
    moveType: " Normal"
  },
  "Tail Whip": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Tail Whip",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Normal"
  },
  "Thunder Shock": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Thunder Shock",
    movePower: "40",
    movePowerPoints: "30",
    moveType: " Electric"
  },
  "Thunder Wave": {
    moveAccuracy: "90",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Thunder Wave",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Electric"
  },
  "Double Team": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Double Team",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  "Electro Ball": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Electro Ball",
    movePower: "??",
    movePowerPoints: "10",
    moveType: " Electric"
  },
  Feint: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Feint",
    movePower: "30",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Spark: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Spark",
    movePower: "65",
    movePowerPoints: "20",
    moveType: " Electric"
  },
  Agility: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Agility",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Psychic"
  },
  Discharge: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Discharge",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Electric"
  },
  Thunderbolt: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Thunderbolt",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Electric"
  },
  "Light Screen": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Light Screen",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Psychic"
  },
  Thunder: {
    moveAccuracy: "70",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Thunder",
    movePower: "110",
    movePowerPoints: "10",
    moveType: " Electric"
  },
  "Fake Tears": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Fake Tears",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Dark"
  },
  Thief: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Thief",
    movePower: "60",
    movePowerPoints: "25",
    moveType: " Dark"
  },
  Trailblaze: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Trailblaze",
    movePower: "50",
    movePowerPoints: "20",
    moveType: " Grass"
  },
  "Charge Beam": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Charge Beam",
    movePower: "50",
    movePowerPoints: "10",
    moveType: " Electric"
  },
  "Draining Kiss": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Draining Kiss",
    movePower: "50",
    movePowerPoints: "10",
    moveType: " Fairy"
  },
  "Volt Switch": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Volt Switch",
    movePower: "70",
    movePowerPoints: "20",
    moveType: " Electric"
  },
  "Rain Dance": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Rain Dance",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Water"
  },
  Reflect: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Reflect",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  "Grass Knot": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Grass Knot",
    movePower: "??",
    movePowerPoints: "20",
    moveType: " Grass"
  },
  "Eerie Impulse": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Eerie Impulse",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Electric"
  },
  Encore: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Encore",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  Surf: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Surf",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Water"
  },
  "Play Rough": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Play Rough",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Fairy"
  },
  Reversal: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Reversal",
    movePower: "??",
    movePowerPoints: "15",
    moveType: " Fighting"
  },
  "Electric Terrain": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Electric Terrain",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Electric"
  },
  "Wild Charge": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Wild Charge",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Electric"
  },
  Psychic: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Psychic",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Stored Power": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Stored Power",
    movePower: "20",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  Psyshock: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Psyshock",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Skill Swap": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Skill Swap",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Calm Mind": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Calm Mind",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  "Psychic Terrain": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Psychic Terrain",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Perish Song": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Perish Song",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  Rollout: {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Rollout",
    movePower: "30",
    movePowerPoints: "20",
    moveType: " Rock"
  },
  Covet: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Covet",
    movePower: "60",
    movePowerPoints: "25",
    moveType: " Normal"
  },
  Gravity: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Gravity",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Psychic"
  },
  "Last Resort": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Last Resort",
    movePower: "140",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "Heal Pulse": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Heal Pulse",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  Copycat: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Copycat",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Defense Curl": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Defense Curl",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Normal"
  },
  Sing: {
    moveAccuracy: "55",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Sing",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  Disable: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Disable",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  Pound: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Pound",
    movePower: "40",
    movePowerPoints: "35",
    moveType: " Normal"
  },
  "Echoed Voice": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Echoed Voice",
    movePower: "40",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  Stockpile: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Stockpile",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Spit Up": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Spit Up",
    movePower: "??",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Swallow: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Swallow",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Round: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Round",
    movePower: "60",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  Mimic: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Mimic",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Gyro Ball": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Gyro Ball",
    movePower: "??",
    movePowerPoints: "5",
    moveType: " Steel"
  },
  "Hyper Voice": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Hyper Voice",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Double-Edge": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Double-Edge",
    movePower: "120",
    movePowerPoints: "15",
    moveType: "Edge "
  },
  "Water Pulse": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "20",
    moveName: "Water Pulse",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Water"
  },
  "Chilling Water": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Chilling Water",
    movePower: "50",
    movePowerPoints: "20",
    moveType: " Water"
  },
  "Magical Leaf": {
    moveAccuracy: "101",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Magical Leaf",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Grass"
  },
  "Icy Wind": {
    moveAccuracy: "95",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Icy Wind",
    movePower: "55",
    movePowerPoints: "15",
    moveType: " Ice"
  },
  "Zen Headbutt": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "20",
    moveName: "Zen Headbutt",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Psychic"
  },
  "Ice Punch": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Ice Punch",
    movePower: "75",
    movePowerPoints: "15",
    moveType: " Ice"
  },
  "Drain Punch": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Drain Punch",
    movePower: "75",
    movePowerPoints: "10",
    moveType: " Fighting"
  },
  "Dazzling Gleam": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Dazzling Gleam",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Fairy"
  },
  Metronome: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Metronome",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Taunt: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Taunt",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Dark"
  },
  "Body Press": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Body Press",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Fighting"
  },
  "Dark Pulse": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "20",
    moveName: "Dark Pulse",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Dark"
  },
  "Shadow Ball": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Shadow Ball",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Ghost"
  },
  "Stealth Rock": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Stealth Rock",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Rock"
  },
  "Energy Ball": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Energy Ball",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Ice Spinner": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Ice Spinner",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Ice"
  },
  Amnesia: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Amnesia",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  "Baton Pass": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Baton Pass",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Normal"
  },
  "Ice Beam": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Ice Beam",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Ice"
  },
  "Misty Terrain": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Misty Terrain",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Fairy"
  },
  Blizzard: {
    moveAccuracy: "70",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Blizzard",
    movePower: "110",
    movePowerPoints: "5",
    moveType: " Ice"
  },
  Screech: {
    moveAccuracy: "85",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Screech",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Normal"
  },
  "Morning Sun": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Morning Sun",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "Toxic Spikes": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Toxic Spikes",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Poison"
  },
  "Bug Bite": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Bug Bite",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Bug"
  },
  Venoshock: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Venoshock",
    movePower: "65",
    movePowerPoints: "10",
    moveType: " Poison"
  },
  "Rage Powder": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Rage Powder",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Bug"
  },
  Tackle: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Tackle",
    movePower: "40",
    movePowerPoints: "35",
    moveType: " Normal"
  },
  Supersonic: {
    moveAccuracy: "55",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Supersonic",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  Confusion: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Confusion",
    movePower: "50",
    movePowerPoints: "25",
    moveType: " Psychic"
  },
  "Poison Powder": {
    moveAccuracy: "75",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Poison Powder",
    movePower: "--",
    movePowerPoints: "35",
    moveType: " Poison"
  },
  Psybeam: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Psybeam",
    movePower: "65",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  "Stun Spore": {
    moveAccuracy: "75",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Stun Spore",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Grass"
  },
  "Bug Buzz": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Bug Buzz",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Bug"
  },
  "Sleep Powder": {
    moveAccuracy: "75",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Sleep Powder",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Grass"
  },
  "Leech Life": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Leech Life",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Bug"
  },
  "Poison Fang": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "50",
    moveName: "Poison Fang",
    movePower: "50",
    movePowerPoints: "15",
    moveType: " Poison"
  },
  "Acid Spray": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Acid Spray",
    movePower: "40",
    movePowerPoints: "20",
    moveType: " Poison"
  },
  "Struggle Bug": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Struggle Bug",
    movePower: "50",
    movePowerPoints: "20",
    moveType: " Bug"
  },
  "Confuse Ray": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Confuse Ray",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Ghost"
  },
  Pounce: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Pounce",
    movePower: "50",
    movePowerPoints: "20",
    moveType: " Bug"
  },
  "Night Shade": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Night Shade",
    movePower: "??",
    movePowerPoints: "15",
    moveType: " Ghost"
  },
  "Giga Drain": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Giga Drain",
    movePower: "75",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Sludge Bomb": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Sludge Bomb",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Poison"
  },
  "Quiver Dance": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Quiver Dance",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Bug"
  },
  "U-turn": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "U-turn",
    movePower: "70",
    movePowerPoints: "20",
    moveType: "turn "
  },
  "Sand Attack": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Sand Attack",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Ground"
  },
  Astonish: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Astonish",
    movePower: "30",
    movePowerPoints: "15",
    moveType: " Ghost"
  },
  "Mud-Slap": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Mud-Slap",
    movePower: "20",
    movePowerPoints: "10",
    moveType: "Slap "
  },
  "Sucker Punch": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Sucker Punch",
    movePower: "70",
    movePowerPoints: "5",
    moveType: " Dark"
  },
  "Iron Head": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Iron Head",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Steel"
  },
  "Earth Power": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Earth Power",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Ground"
  },
  Fissure: {
    moveAccuracy: "30",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Fissure",
    movePower: "??",
    movePowerPoints: "5",
    moveType: " Ground"
  },
  Headbutt: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Headbutt",
    movePower: "70",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  Memento: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Memento",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  "Hone Claws": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Hone Claws",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Dark"
  },
  "Final Gambit": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Final Gambit",
    movePower: "??",
    movePowerPoints: "5",
    moveType: " Fighting"
  },
  Thrash: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Thrash",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Metal Sound": {
    moveAccuracy: "85",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Metal Sound",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Steel"
  },
  "Mud Shot": {
    moveAccuracy: "95",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Mud Shot",
    movePower: "55",
    movePowerPoints: "15",
    moveType: " Ground"
  },
  "Foul Play": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Foul Play",
    movePower: "95",
    movePowerPoints: "15",
    moveType: " Dark"
  },
  "Rock Blast": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Rock Blast",
    movePower: "25",
    movePowerPoints: "10",
    moveType: " Rock"
  },
  "Stomping Tantrum": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Stomping Tantrum",
    movePower: "75",
    movePowerPoints: "10",
    moveType: " Ground"
  },
  "Flash Cannon": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Flash Cannon",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Steel"
  },
  "Iron Defense": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Iron Defense",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Steel"
  },
  "Stone Edge": {
    moveAccuracy: "80",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Stone Edge",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Rock"
  },
  "Steel Beam": {
    moveAccuracy: "95",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Steel Beam",
    movePower: "140",
    movePowerPoints: "5",
    moveType: " Steel"
  },
  "Sand Tomb": {
    moveAccuracy: "85",
    moveCategory: " Physical Move",
    moveEffectPct: "100",
    moveName: "Sand Tomb",
    movePower: "35",
    movePowerPoints: "15",
    moveType: " Ground"
  },
  "Tri Attack": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Tri Attack",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Night Slash": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Night Slash",
    movePower: "70",
    movePowerPoints: "15",
    moveType: " Dark"
  },
  "Pay Day": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Pay Day",
    movePower: "40",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  Assurance: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Assurance",
    movePower: "60",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  "Fury Swipes": {
    moveAccuracy: "80",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Fury Swipes",
    movePower: "18",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  Hypnosis: {
    moveAccuracy: "60",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Hypnosis",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  Spite: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Spite",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Ghost"
  },
  Flatter: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Flatter",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Dark"
  },
  "Parting Shot": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Parting Shot",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Dark"
  },
  Curse: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Curse",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Ghost"
  },
  Swagger: {
    moveAccuracy: "85",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Swagger",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  Snarl: {
    moveAccuracy: "95",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Snarl",
    movePower: "55",
    movePowerPoints: "15",
    moveType: " Dark"
  },
  "Seed Bomb": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Seed Bomb",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Grass"
  },
  "Power Gem": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Power Gem",
    movePower: "80",
    movePowerPoints: "20",
    moveType: " Rock"
  },
  "Gunk Shot": {
    moveAccuracy: "80",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Gunk Shot",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Poison"
  },
  "X-Scissor": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "X-Scissor",
    movePower: "80",
    movePowerPoints: "15",
    moveType: "Scissor "
  },
  Switcheroo: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Switcheroo",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  Quash: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Quash",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Dark"
  },
  "Cross Chop": {
    moveAccuracy: "80",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Cross Chop",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Fighting"
  },
  Yawn: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Yawn",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Simple Beam": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Simple Beam",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  "Clear Smog": {
    moveAccuracy: "101",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Clear Smog",
    movePower: "50",
    movePowerPoints: "15",
    moveType: " Poison"
  },
  "Water Gun": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Water Gun",
    movePower: "40",
    movePowerPoints: "25",
    moveType: " Water"
  },
  "Aqua Tail": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Aqua Tail",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Water"
  },
  Soak: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Soak",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Water"
  },
  "Psych Up": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Psych Up",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Wonder Room": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Wonder Room",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Low Kick": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Low Kick",
    movePower: "??",
    movePowerPoints: "20",
    moveType: " Fighting"
  },
  "Low Sweep": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Low Sweep",
    movePower: "65",
    movePowerPoints: "20",
    moveType: " Fighting"
  },
  Waterfall: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "20",
    moveName: "Waterfall",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Water"
  },
  Liquidation: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Liquidation",
    movePower: "85",
    movePowerPoints: "10",
    moveType: " Water"
  },
  "Hydro Pump": {
    moveAccuracy: "80",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Hydro Pump",
    movePower: "110",
    movePowerPoints: "5",
    moveType: " Water"
  },
  "Aqua Jet": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Aqua Jet",
    movePower: "40",
    movePowerPoints: "20",
    moveType: " Water"
  },
  "Beat Up": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Beat Up",
    movePower: "??",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  Leer: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Leer",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Normal"
  },
  "Focus Energy": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Focus Energy",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Normal"
  },
  "Seismic Toss": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Seismic Toss",
    movePower: "??",
    movePowerPoints: "20",
    moveType: " Fighting"
  },
  "Close Combat": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Close Combat",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Fighting"
  },
  "Bulk Up": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Bulk Up",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Fighting"
  },
  "Poison Jab": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Poison Jab",
    movePower: "80",
    movePowerPoints: "20",
    moveType: " Poison"
  },
  "Rage Fist": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Rage Fist",
    movePower: "50",
    movePowerPoints: "10",
    moveType: " Ghost"
  },
  "Double Kick": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Double Kick",
    movePower: "30",
    movePowerPoints: "30",
    moveType: " Fighting"
  },
  "Raging Fury": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Raging Fury",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Fire"
  },
  "Head Smash": {
    moveAccuracy: "80",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Head Smash",
    movePower: "150",
    movePowerPoints: "5",
    moveType: " Rock"
  },
  Howl: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Howl",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Normal"
  },
  "Flame Wheel": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Flame Wheel",
    movePower: "60",
    movePowerPoints: "25",
    moveType: " Fire"
  },
  Retaliate: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Retaliate",
    movePower: "70",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  Roar: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Roar",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Thunder Fang": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Thunder Fang",
    movePower: "65",
    movePowerPoints: "15",
    moveType: " Electric"
  },
  "Smart Strike": {
    moveAccuracy: "101",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Smart Strike",
    movePower: "70",
    movePowerPoints: "10",
    moveType: " Steel"
  },
  "Psychic Fangs": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Psychic Fangs",
    movePower: "85",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Extreme Speed": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Extreme Speed",
    movePower: "80",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  Stomp: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Stomp",
    movePower: "65",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  Block: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Block",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  Belch: {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Belch",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Poison"
  },
  Acid: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Acid",
    movePower: "40",
    movePowerPoints: "30",
    moveType: " Poison"
  },
  "Slack Off": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Slack Off",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  Avalanche: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Avalanche",
    movePower: "60",
    movePowerPoints: "10",
    moveType: " Ice"
  },
  Snowscape: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Snowscape",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Ice"
  },
  Imprison: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Imprison",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  Trick: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Trick",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Trick Room": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Trick Room",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Psychic"
  },
  "Shell Side Arm": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "20",
    moveName: "Shell Side Arm",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Poison"
  },
  Withdraw: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Withdraw",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Water"
  },
  "Ice Fang": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Ice Fang",
    movePower: "65",
    movePowerPoints: "15",
    moveType: " Ice"
  },
  Explosion: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Explosion",
    movePower: "250",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  Electroweb: {
    moveAccuracy: "95",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Electroweb",
    movePower: "55",
    movePowerPoints: "15",
    moveType: " Electric"
  },
  "Magnet Rise": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Magnet Rise",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Electric"
  },
  "Lock-On": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Lock-On",
    movePower: "--",
    movePowerPoints: "5",
    moveType: "On "
  },
  "Zap Cannon": {
    moveAccuracy: "50",
    moveCategory: " Special Move",
    moveEffectPct: "100",
    moveName: "Zap Cannon",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Electric"
  },
  "Heavy Slam": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Heavy Slam",
    movePower: "??",
    movePowerPoints: "10",
    moveType: " Steel"
  },
  "Poison Gas": {
    moveAccuracy: "90",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Poison Gas",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Poison"
  },
  Harden: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Harden",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Normal"
  },
  Minimize: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Minimize",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Toxic: {
    moveAccuracy: "90",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Toxic",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Poison"
  },
  "Knock Off": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Knock Off",
    movePower: "65",
    movePowerPoints: "20",
    moveType: " Dark"
  },
  "Acid Armor": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Acid Armor",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Poison"
  },
  Haze: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Haze",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Ice"
  },
  "Mean Look": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Mean Look",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "Shadow Punch": {
    moveAccuracy: "101",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Shadow Punch",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Ghost"
  },
  "Shadow Sneak": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Shadow Sneak",
    movePower: "40",
    movePowerPoints: "30",
    moveType: " Ghost"
  },
  Sludge: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Sludge",
    movePower: "65",
    movePowerPoints: "20",
    moveType: " Poison"
  },
  "Sludge Wave": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Sludge Wave",
    movePower: "95",
    movePowerPoints: "10",
    moveType: " Poison"
  },
  Hex: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Hex",
    movePower: "65",
    movePowerPoints: "10",
    moveType: " Ghost"
  },
  "Bubble Beam": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Bubble Beam",
    movePower: "65",
    movePowerPoints: "20",
    moveType: " Water"
  },
  "Aqua Ring": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Aqua Ring",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Water"
  },
  "Life Dew": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Life Dew",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Water"
  },
  "Ice Shard": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Ice Shard",
    movePower: "40",
    movePowerPoints: "30",
    moveType: " Ice"
  },
  Whirlpool: {
    moveAccuracy: "85",
    moveCategory: " Special Move",
    moveEffectPct: "100",
    moveName: "Whirlpool",
    movePower: "35",
    movePowerPoints: "15",
    moveType: " Water"
  },
  "Aurora Beam": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Aurora Beam",
    movePower: "65",
    movePowerPoints: "20",
    moveType: " Ice"
  },
  "Razor Shell": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Razor Shell",
    movePower: "75",
    movePowerPoints: "10",
    moveType: " Water"
  },
  "Shell Smash": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Shell Smash",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  Spikes: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Spikes",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Ground"
  },
  "Icicle Spear": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Icicle Spear",
    movePower: "25",
    movePowerPoints: "30",
    moveType: " Ice"
  },
  "Icicle Crash": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Icicle Crash",
    movePower: "85",
    movePowerPoints: "10",
    moveType: " Ice"
  },
  "Drill Run": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Drill Run",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Ground"
  },
  Smog: {
    moveAccuracy: "70",
    moveCategory: " Special Move",
    moveEffectPct: "40",
    moveName: "Smog",
    movePower: "30",
    movePowerPoints: "20",
    moveType: " Poison"
  },
  "Reflect Type": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Reflect Type",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  Lick: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Lick",
    movePower: "30",
    movePowerPoints: "30",
    moveType: " Ghost"
  },
  Payback: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Payback",
    movePower: "50",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  "Destiny Bond": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Destiny Bond",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Ghost"
  },
  "Dream Eater": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Dream Eater",
    movePower: "100",
    movePowerPoints: "15",
    moveType: " Psychic"
  },
  "Phantom Force": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Phantom Force",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Ghost"
  },
  "Role Play": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Role Play",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Guard Swap": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Guard Swap",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Psycho Cut": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Psycho Cut",
    movePower: "70",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  "Power Split": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Power Split",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Future Sight": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Future Sight",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  Recycle: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Recycle",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Leech Seed": {
    moveAccuracy: "90",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Leech Seed",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Worry Seed": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Worry Seed",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Self-Destruct": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Self-Destruct",
    movePower: "200",
    movePowerPoints: "5",
    moveType: "Destruct "
  },
  "Mirror Coat": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Mirror Coat",
    movePower: "??",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  "Bullet Seed": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Bullet Seed",
    movePower: "25",
    movePowerPoints: "30",
    moveType: " Grass"
  },
  "Grassy Terrain": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Grassy Terrain",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Leaf Storm": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Leaf Storm",
    movePower: "130",
    movePowerPoints: "5",
    moveType: " Grass"
  },
  "Magnetic Flux": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Magnetic Flux",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Electric"
  },
  "Heal Bell": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Heal Bell",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "Soft-Boiled": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Soft-Boiled",
    movePower: "--",
    movePowerPoints: "5",
    moveType: "Boiled "
  },
  "Healing Wish": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Healing Wish",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  Defog: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Defog",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Flying"
  },
  "Quick Guard": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Quick Guard",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Fighting"
  },
  "Fury Cutter": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Fury Cutter",
    movePower: "40",
    movePowerPoints: "20",
    moveType: " Bug"
  },
  "Wing Attack": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Wing Attack",
    movePower: "60",
    movePowerPoints: "35",
    moveType: " Flying"
  },
  "Double Hit": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Double Hit",
    movePower: "35",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Tailwind: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Tailwind",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Flying"
  },
  Endeavor: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Endeavor",
    movePower: "??",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "Work Up": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Work Up",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Normal"
  },
  "Horn Attack": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Horn Attack",
    movePower: "65",
    movePowerPoints: "25",
    moveType: " Normal"
  },
  "Raging Bull": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Raging Bull",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Splash: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Splash",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Normal"
  },
  Twister: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "20",
    moveName: "Twister",
    movePower: "40",
    movePowerPoints: "20",
    moveType: " Dragon"
  },
  Brine: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Brine",
    movePower: "65",
    movePowerPoints: "10",
    moveType: " Water"
  },
  Transform: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Transform",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Detect: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Detect",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Fighting"
  },
  "Baby-Doll Eyes": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Baby-Doll Eyes",
    movePower: "--",
    movePowerPoints: "30",
    moveType: "Doll Eyes "
  },
  "Muddy Water": {
    moveAccuracy: "85",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Muddy Water",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Water"
  },
  "Pin Missile": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Pin Missile",
    movePower: "25",
    movePowerPoints: "20",
    moveType: " Bug"
  },
  "Lava Plume": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Lava Plume",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Fire"
  },
  Gust: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Gust",
    movePower: "40",
    movePowerPoints: "35",
    moveType: " Flying"
  },
  Recover: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Recover",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "Freezing Glare": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Freezing Glare",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  Mist: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Mist",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Ice"
  },
  "Powder Snow": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Powder Snow",
    movePower: "40",
    movePowerPoints: "25",
    moveType: " Ice"
  },
  "Freeze-Dry": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Freeze-Dry",
    movePower: "70",
    movePowerPoints: "20",
    moveType: "Dry "
  },
  Roost: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Roost",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Flying"
  },
  "Sheer Cold": {
    moveAccuracy: "30",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Sheer Cold",
    movePower: "??",
    movePowerPoints: "5",
    moveType: " Ice"
  },
  "Brave Bird": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Brave Bird",
    movePower: "120",
    movePowerPoints: "15",
    moveType: " Flying"
  },
  Peck: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Peck",
    movePower: "35",
    movePowerPoints: "35",
    moveType: " Flying"
  },
  "Rock Smash": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Rock Smash",
    movePower: "40",
    movePowerPoints: "15",
    moveType: " Fighting"
  },
  Pluck: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Pluck",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Flying"
  },
  "Drill Peck": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Drill Peck",
    movePower: "80",
    movePowerPoints: "20",
    moveType: " Flying"
  },
  "Thunderous Kick": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Thunderous Kick",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Fighting"
  },
  Safeguard: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Safeguard",
    movePower: "--",
    movePowerPoints: "25",
    moveType: " Normal"
  },
  "After You": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "After You",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  "Fiery Wrath": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "20",
    moveName: "Fiery Wrath",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  "Sky Attack": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Sky Attack",
    movePower: "140",
    movePowerPoints: "5",
    moveType: " Flying"
  },
  Incinerate: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Incinerate",
    movePower: "60",
    movePowerPoints: "15",
    moveType: " Fire"
  },
  Wrap: {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "100",
    moveName: "Wrap",
    movePower: "15",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  Slam: {
    moveAccuracy: "75",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Slam",
    movePower: "80",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Draco Meteor": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Draco Meteor",
    movePower: "130",
    movePowerPoints: "5",
    moveType: " Dragon"
  },
  "Aura Sphere": {
    moveAccuracy: "101",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Aura Sphere",
    movePower: "80",
    movePowerPoints: "20",
    moveType: " Fighting"
  },
  "Power Swap": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Power Swap",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  Psystrike: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Psystrike",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Poison Tail": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Poison Tail",
    movePower: "50",
    movePowerPoints: "25",
    moveType: " Poison"
  },
  "Pollen Puff": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Pollen Puff",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Bug"
  },
  "Water Pledge": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Water Pledge",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Water"
  },
  "Grass Pledge": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Grass Pledge",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Hydro Cannon": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Hydro Cannon",
    movePower: "150",
    movePowerPoints: "5",
    moveType: " Water"
  },
  "Frenzy Plant": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Frenzy Plant",
    movePower: "150",
    movePowerPoints: "5",
    moveType: " Grass"
  },
  Extrasensory: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Extrasensory",
    movePower: "80",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  Eruption: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Eruption",
    movePower: "150",
    movePowerPoints: "5",
    moveType: " Fire"
  },
  "Cotton Spore": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Cotton Spore",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Grass"
  },
  "Cotton Guard": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Cotton Guard",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  Bounce: {
    moveAccuracy: "85",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Bounce",
    movePower: "85",
    movePowerPoints: "5",
    moveType: " Flying"
  },
  Superpower: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Superpower",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Fighting"
  },
  "Rock Polish": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Rock Polish",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Rock"
  },
  "Wood Hammer": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Wood Hammer",
    movePower: "120",
    movePowerPoints: "15",
    moveType: " Grass"
  },
  "Hammer Arm": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Hammer Arm",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Fighting"
  },
  "Rock Throw": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Rock Throw",
    movePower: "50",
    movePowerPoints: "15",
    moveType: " Rock"
  },
  "Tearful Look": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Tearful Look",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Strength Sap": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Strength Sap",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  Absorb: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Absorb",
    movePower: "20",
    movePowerPoints: "25",
    moveType: " Grass"
  },
  "Fairy Wind": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Fairy Wind",
    movePower: "40",
    movePowerPoints: "30",
    moveType: " Fairy"
  },
  Synthesis: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Synthesis",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Grass"
  },
  "Mega Drain": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Mega Drain",
    movePower: "40",
    movePowerPoints: "15",
    moveType: " Grass"
  },
  Ingrain: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Ingrain",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Grass"
  },
  Growth: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Growth",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Razor Leaf": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Razor Leaf",
    movePower: "55",
    movePowerPoints: "25",
    moveType: " Grass"
  },
  "Petal Dance": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Petal Dance",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Petal Blizzard": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Petal Blizzard",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Grass"
  },
  Moonlight: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Moonlight",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Fairy"
  },
  Whirlwind: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Whirlwind",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Feather Dance": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Feather Dance",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Flying"
  },
  Torment: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Torment",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Dark"
  },
  "Eerie Spell": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Eerie Spell",
    movePower: "80",
    movePowerPoints: "5",
    moveType: " Psychic"
  },
  "Pain Split": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Pain Split",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  Uproar: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Uproar",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Ally Switch": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Ally Switch",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Psychic"
  },
  "Twin Beam": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Twin Beam",
    movePower: "40",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Power Trick": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Power Trick",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Rapid Spin": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Rapid Spin",
    movePower: "50",
    movePowerPoints: "40",
    moveType: " Normal"
  },
  Glare: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Glare",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Normal"
  },
  "Hyper Drill": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Hyper Drill",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  Coil: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Coil",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Poison"
  },
  "Barb Barrage": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "50",
    moveName: "Barb Barrage",
    movePower: "60",
    movePowerPoints: "10",
    moveType: " Poison"
  },
  "Poison Sting": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Poison Sting",
    movePower: "15",
    movePowerPoints: "35",
    moveType: " Poison"
  },
  "Fell Stinger": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Fell Stinger",
    movePower: "50",
    movePowerPoints: "25",
    moveType: " Bug"
  },
  Acupressure: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Acupressure",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Normal"
  },
  "Bullet Punch": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Bullet Punch",
    movePower: "40",
    movePowerPoints: "30",
    moveType: " Steel"
  },
  "Arm Thrust": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Arm Thrust",
    movePower: "15",
    movePowerPoints: "20",
    moveType: " Fighting"
  },
  "Fury Attack": {
    moveAccuracy: "85",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Fury Attack",
    movePower: "15",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Throat Chop": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "100",
    moveName: "Throat Chop",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Dark"
  },
  Megahorn: {
    moveAccuracy: "85",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Megahorn",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Bug"
  },
  "Sweet Scent": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Sweet Scent",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  Snore: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Snore",
    movePower: "50",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  "High Horsepower": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "High Horsepower",
    movePower: "95",
    movePowerPoints: "10",
    moveType: " Ground"
  },
  "Aurora Veil": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Aurora Veil",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Ice"
  },
  Comeuppance: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Comeuppance",
    movePower: "??",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  "Psyshield Bash": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Psyshield Bash",
    movePower: "70",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Smack Down": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Smack Down",
    movePower: "50",
    movePowerPoints: "15",
    moveType: " Rock"
  },
  "Wide Guard": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Wide Guard",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Rock"
  },
  "Mystical Fire": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Mystical Fire",
    movePower: "75",
    movePowerPoints: "10",
    moveType: " Fire"
  },
  Teleport: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Teleport",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  Moonblast: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Moonblast",
    movePower: "95",
    movePowerPoints: "15",
    moveType: " Fairy"
  },
  Lunge: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Lunge",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Bug"
  },
  "Sticky Web": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Sticky Web",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Bug"
  },
  Spore: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Spore",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Grass"
  },
  "Mach Punch": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Mach Punch",
    movePower: "40",
    movePowerPoints: "30",
    moveType: " Fighting"
  },
  "Force Palm": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Force Palm",
    movePower: "60",
    movePowerPoints: "10",
    moveType: " Fighting"
  },
  "Dynamic Punch": {
    moveAccuracy: "50",
    moveCategory: " Physical Move",
    moveEffectPct: "100",
    moveName: "Dynamic Punch",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Fighting"
  },
  "Focus Punch": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Focus Punch",
    movePower: "150",
    movePowerPoints: "20",
    moveType: " Fighting"
  },
  "Crush Claw": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Crush Claw",
    movePower: "75",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Mega Kick": {
    moveAccuracy: "75",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Mega Kick",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "Headlong Rush": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Headlong Rush",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Ground"
  },
  "Metal Burst": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Metal Burst",
    movePower: "??",
    movePowerPoints: "10",
    moveType: " Steel"
  },
  "High Jump Kick": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "High Jump Kick",
    movePower: "130",
    movePowerPoints: "10",
    moveType: " Fighting"
  },
  "Axe Kick": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Axe Kick",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Fighting"
  },
  "Stuff Cheeks": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Stuff Cheeks",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Gastro Acid": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Gastro Acid",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Poison"
  },
  "Teeter Dance": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Teeter Dance",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Power Trip": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Power Trip",
    movePower: "20",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  "Spiky Shield": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Spiky Shield",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Leaf Blade": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Leaf Blade",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Grass"
  },
  "Frost Breath": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "100",
    moveName: "Frost Breath",
    movePower: "60",
    movePowerPoints: "10",
    moveType: " Ice"
  },
  "Weather Ball": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Weather Ball",
    movePower: "50",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Attract: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Attract",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  "Dual Wingbeat": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Dual Wingbeat",
    movePower: "40",
    movePowerPoints: "10",
    moveType: " Flying"
  },
  "Origin Pulse": {
    moveAccuracy: "85",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Origin Pulse",
    movePower: "110",
    movePowerPoints: "10",
    moveType: " Water"
  },
  "Water Spout": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Water Spout",
    movePower: "150",
    movePowerPoints: "5",
    moveType: " Water"
  },
  "Precipice Blades": {
    moveAccuracy: "85",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Precipice Blades",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Ground"
  },
  "Dragon Ascent": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Dragon Ascent",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Flying"
  },
  "Shock Wave": {
    moveAccuracy: "101",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Shock Wave",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Electric"
  },
  "Aromatic Mist": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Aromatic Mist",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Fairy"
  },
  "Attack Order": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Attack Order",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Bug"
  },
  "Defend Order": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Defend Order",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Bug"
  },
  "Follow Me": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Follow Me",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "Super Fang": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Super Fang",
    movePower: "??",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Wave Crash": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Wave Crash",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Water"
  },
  "Circle Throw": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Circle Throw",
    movePower: "60",
    movePowerPoints: "10",
    moveType: " Fighting"
  },
  "Vacuum Wave": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Vacuum Wave",
    movePower: "40",
    movePowerPoints: "30",
    moveType: " Fighting"
  },
  "Bone Rush": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Bone Rush",
    movePower: "25",
    movePowerPoints: "10",
    moveType: " Ground"
  },
  "Meteor Mash": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Meteor Mash",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Steel"
  },
  Leafage: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Leafage",
    movePower: "40",
    movePowerPoints: "40",
    moveType: " Grass"
  },
  "Sacred Sword": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Sacred Sword",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Fighting"
  },
  "Aqua Cutter": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Aqua Cutter",
    movePower: "70",
    movePowerPoints: "20",
    moveType: " Water"
  },
  "Mystical Power": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Mystical Power",
    movePower: "70",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Roar of Time": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Roar of Time",
    movePower: "150",
    movePowerPoints: "5",
    moveType: " Dragon"
  },
  "Spacial Rend": {
    moveAccuracy: "95",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Spacial Rend",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Dragon"
  },
  "Magma Storm": {
    moveAccuracy: "75",
    moveCategory: " Special Move",
    moveEffectPct: "100",
    moveName: "Magma Storm",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Fire"
  },
  "Shadow Force": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Shadow Force",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Ghost"
  },
  "Lunar Dance": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Lunar Dance",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Lunar Blessing": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Lunar Blessing",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Psychic"
  },
  "Cosmic Power": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Cosmic Power",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  Judgment: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Judgment",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  Entrainment: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Entrainment",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  "Night Daze": {
    moveAccuracy: "95",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Night Daze",
    movePower: "85",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  "Magic Room": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Magic Room",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Horn Leech": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Horn Leech",
    movePower: "75",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  Bind: {
    moveAccuracy: "85",
    moveCategory: " Physical Move",
    moveEffectPct: "100",
    moveName: "Bind",
    movePower: "15",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "First Impression": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "First Impression",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Bug"
  },
  "Breaking Swipe": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Breaking Swipe",
    movePower: "60",
    movePowerPoints: "15",
    moveType: " Dragon"
  },
  Guillotine: {
    moveAccuracy: "30",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Guillotine",
    movePower: "??",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "String Shot": {
    moveAccuracy: "95",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "String Shot",
    movePower: "--",
    movePowerPoints: "40",
    moveType: " Bug"
  },
  "Fiery Dance": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Fiery Dance",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Fire"
  },
  "Bleakwind Storm": {
    moveAccuracy: "80",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Bleakwind Storm",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Flying"
  },
  "Wildbolt Storm": {
    moveAccuracy: "80",
    moveCategory: " Special Move",
    moveEffectPct: "20",
    moveName: "Wildbolt Storm",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Electric"
  },
  "Sandsear Storm": {
    moveAccuracy: "80",
    moveCategory: " Special Move",
    moveEffectPct: "20",
    moveName: "Sandsear Storm",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Ground"
  },
  "Relic Song": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "10",
    moveName: "Relic Song",
    movePower: "75",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Vine Whip": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Vine Whip",
    movePower: "45",
    movePowerPoints: "25",
    moveType: " Grass"
  },
  "Water Shuriken": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Water Shuriken",
    movePower: "15",
    movePowerPoints: "20",
    moveType: " Water"
  },
  "Steel Wing": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Steel Wing",
    movePower: "70",
    movePowerPoints: "25",
    moveType: " Steel"
  },
  "Noble Roar": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Noble Roar",
    movePower: "--",
    movePowerPoints: "30",
    moveType: " Normal"
  },
  "Milk Drink": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Milk Drink",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Normal"
  },
  "Vise Grip": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Vise Grip",
    movePower: "55",
    movePowerPoints: "30",
    moveType: " Normal"
  },
  Crabhammer: {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Crabhammer",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Water"
  },
  "Flying Press": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Flying Press",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Fighting"
  },
  "Parabolic Charge": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Parabolic Charge",
    movePower: "65",
    movePowerPoints: "20",
    moveType: " Electric"
  },
  "Guard Split": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Guard Split",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Power Whip": {
    moveAccuracy: "85",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Power Whip",
    movePower: "120",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Fairy Lock": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Fairy Lock",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Fairy"
  },
  Boomburst: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Boomburst",
    movePower: "140",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Diamond Storm": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Diamond Storm",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Rock"
  },
  "Hyperspace Hole": {
    moveAccuracy: "101",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Hyperspace Hole",
    movePower: "80",
    movePowerPoints: "5",
    moveType: " Psychic"
  },
  "Steam Eruption": {
    moveAccuracy: "95",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Steam Eruption",
    movePower: "110",
    movePowerPoints: "5",
    moveType: " Water"
  },
  Scald: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "30",
    moveName: "Scald",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Water"
  },
  "Spirit Shackle": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Spirit Shackle",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Ghost"
  },
  "Ice Hammer": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Ice Hammer",
    movePower: "100",
    movePowerPoints: "10",
    moveType: " Ice"
  },
  "Revelation Dance": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Revelation Dance",
    movePower: "90",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  Accelerock: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Accelerock",
    movePower: "40",
    movePowerPoints: "20",
    moveType: " Rock"
  },
  Infestation: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "100",
    moveName: "Infestation",
    movePower: "20",
    movePowerPoints: "20",
    moveType: " Bug"
  },
  "Baneful Bunker": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Baneful Bunker",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Poison"
  },
  Strength: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Strength",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Normal"
  },
  "Solar Blade": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Solar Blade",
    movePower: "125",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Fire Lash": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Fire Lash",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Fire"
  },
  "Trop Kick": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Trop Kick",
    movePower: "70",
    movePowerPoints: "15",
    moveType: " Grass"
  },
  Instruct: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Instruct",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Psychic"
  },
  "Shore Up": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Shore Up",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Ground"
  },
  "Shift Gear": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Shift Gear",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Steel"
  },
  "Fleur Cannon": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Fleur Cannon",
    movePower: "130",
    movePowerPoints: "5",
    moveType: " Fairy"
  },
  "Branch Poke": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Branch Poke",
    movePower: "40",
    movePowerPoints: "40",
    moveType: " Grass"
  },
  "Drum Beating": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Drum Beating",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Pyro Ball": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Pyro Ball",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Fire"
  },
  "Court Change": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Court Change",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Snipe Shot": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Snipe Shot",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Water"
  },
  "Jaw Lock": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Jaw Lock",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  "Heat Crash": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Heat Crash",
    movePower: "??",
    movePowerPoints: "10",
    moveType: " Fire"
  },
  "Tar Shot": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "100",
    moveName: "Tar Shot",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Rock"
  },
  "Grav Apple": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Grav Apple",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Apple Acid": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Apple Acid",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Brutal Swing": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Brutal Swing",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Dark"
  },
  Dive: {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Dive",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Water"
  },
  Overdrive: {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Overdrive",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Electric"
  },
  Teatime: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Teatime",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Magic Powder": {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Magic Powder",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Psychic"
  },
  Confide: {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Confide",
    movePower: "--",
    movePowerPoints: "20",
    moveType: " Normal"
  },
  "False Surrender": {
    moveAccuracy: "101",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "False Surrender",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  "Spirit Break": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Spirit Break",
    movePower: "75",
    movePowerPoints: "15",
    moveType: " Fairy"
  },
  "No Retreat": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "No Retreat",
    movePower: "--",
    movePowerPoints: "5",
    moveType: " Fighting"
  },
  "Zing Zap": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "30",
    moveName: "Zing Zap",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Electric"
  },
  "Dragon Darts": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Dragon Darts",
    movePower: "50",
    movePowerPoints: "10",
    moveType: " Dragon"
  },
  "Cross Poison": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "10",
    moveName: "Cross Poison",
    movePower: "70",
    movePowerPoints: "20",
    moveType: " Poison"
  },
  "Dynamax Cannon": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Dynamax Cannon",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Dragon"
  },
  "Wicked Blow": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Wicked Blow",
    movePower: "75",
    movePowerPoints: "5",
    moveType: " Dark"
  },
  "Jungle Healing": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Jungle Healing",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Thunder Cage": {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "100",
    moveName: "Thunder Cage",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Electric"
  },
  "Dragon Energy": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Dragon Energy",
    movePower: "150",
    movePowerPoints: "5",
    moveType: " Dragon"
  },
  "Stone Axe": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Stone Axe",
    movePower: "65",
    movePowerPoints: "15",
    moveType: " Rock"
  },
  "Last Respects": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Last Respects",
    movePower: "50",
    movePowerPoints: "10",
    moveType: " Ghost"
  },
  "Dire Claw": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "50",
    moveName: "Dire Claw",
    movePower: "80",
    movePowerPoints: "15",
    moveType: " Poison"
  },
  "Springtide Storm": {
    moveAccuracy: "80",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Springtide Storm",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Fairy"
  },
  "Flower Trick": {
    moveAccuracy: "101",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Flower Trick",
    movePower: "70",
    movePowerPoints: "10",
    moveType: " Grass"
  },
  "Torch Song": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Torch Song",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Fire"
  },
  "Aqua Step": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Aqua Step",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Water"
  },
  "Skitter Smack": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Skitter Smack",
    movePower: "70",
    movePowerPoints: "10",
    moveType: " Bug"
  },
  "Silk Trap": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Silk Trap",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Bug"
  },
  "Revival Blessing": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Revival Blessing",
    movePower: "--",
    movePowerPoints: "1",
    moveType: " Normal"
  },
  "Speed Swap": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Speed Swap",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Lumina Crash": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Lumina Crash",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Triple Dive": {
    moveAccuracy: "95",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Triple Dive",
    movePower: "30",
    movePowerPoints: "10",
    moveType: " Water"
  },
  "Order Up": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Order Up",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Dragon"
  },
  "Fillet Away": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Fillet Away",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Flip Turn": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Flip Turn",
    movePower: "60",
    movePowerPoints: "20",
    moveType: " Water"
  },
  "Jet Punch": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Jet Punch",
    movePower: "60",
    movePowerPoints: "15",
    moveType: " Water"
  },
  "Terrain Pulse": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Terrain Pulse",
    movePower: "50",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Spicy Extract": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Spicy Extract",
    movePower: "--",
    movePowerPoints: "15",
    moveType: " Grass"
  },
  "Spin Out": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Spin Out",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Steel"
  },
  "Shed Tail": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Shed Tail",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Population Bomb": {
    moveAccuracy: "90",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Population Bomb",
    movePower: "20",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Tidy Up": {
    moveAccuracy: "101",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Tidy Up",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Glaive Rush": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Glaive Rush",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Dragon"
  },
  "Double Shock": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Double Shock",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Electric"
  },
  "Salt Cure": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "100",
    moveName: "Salt Cure",
    movePower: "40",
    movePowerPoints: "15",
    moveType: " Rock"
  },
  "Mortal Spin": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "100",
    moveName: "Mortal Spin",
    movePower: "30",
    movePowerPoints: "15",
    moveType: " Poison"
  },
  Doodle: {
    moveAccuracy: "100",
    moveCategory: " Other Move",
    moveEffectPct: "--",
    moveName: "Doodle",
    movePower: "--",
    movePowerPoints: "10",
    moveType: " Normal"
  },
  "Make It Rain": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Make It Rain",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Steel"
  },
  "Steel Roller": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Steel Roller",
    movePower: "130",
    movePowerPoints: "5",
    moveType: " Steel"
  },
  Ruination: {
    moveAccuracy: "90",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Ruination",
    movePower: "??",
    movePowerPoints: "10",
    moveType: " Dark"
  },
  "Collision Course": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Collision Course",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Fighting"
  },
  "Electro Drift": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Electro Drift",
    movePower: "100",
    movePowerPoints: "5",
    moveType: " Electric"
  },
  "Gigaton Hammer": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Gigaton Hammer",
    movePower: "160",
    movePowerPoints: "5",
    moveType: " Steel"
  },
  "Expanding Force": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Expanding Force",
    movePower: "80",
    movePowerPoints: "10",
    moveType: " Psychic"
  },
  "Armor Cannon": {
    moveAccuracy: "100",
    moveCategory: " Special Move",
    moveEffectPct: "--",
    moveName: "Armor Cannon",
    movePower: "120",
    movePowerPoints: "5",
    moveType: " Fire"
  },
  "Bitter Blade": {
    moveAccuracy: "100",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Bitter Blade",
    movePower: "90",
    movePowerPoints: "10",
    moveType: " Fire"
  },
  "Kowtow Cleave": {
    moveAccuracy: "101",
    moveCategory: " Physical Move",
    moveEffectPct: "--",
    moveName: "Kowtow Cleave",
    movePower: "85",
    movePowerPoints: "10",
    moveType: " Dark"
  }
};

export default moveTable;
