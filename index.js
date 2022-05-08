function generateLoadout() {
  getAkOptic();
  getAkMuzzle();
  getAkBarrel();
  getAkUnderBarrel();
  let weaponsArray = ["XM4", "AK47", "KRIG6", "FARA83", "STG44"];

  let randomWeapon =
    weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
  console.log(randomWeapon);

  const img2 = document.getElementById("primaryWeapon");
  img2.innerHTML = "Primary Weapon: " + randomWeapon;

  switch (randomWeapon) {
    case "AK47":
      imageSrc = "./images/ak47.png";
      break;
    case "FARA83":
      imageSrc = "./images/fara83.png";
      break;
    case "KRIG6":
      imageSrc = "./images/krig6.png";
      break;
    case "STG44":
      imageSrc = "./images/stg44.png";
      break;
    case "XM4":
      imageSrc = "./images/xm4.png";
      break;
  }

  const img = document.getElementById("gun");
  img.src = imageSrc;
}

let ak47Optics = [
  "Millstop Reflex",
  "Visiontech 2x",
  "Kobra Red Dot",
  "Quickdot LED",
  "Axial Arms 3X",
  "Sillix Holoscout",
  "Microflex LED",
  "Hawksmoor",
  "Royal & Kross 4x",
  "SUSAT Multizoom",
  "Diamondback Reflex",
  "Noch Sova Thermal",
];
let ak47Muzzles = [
  "Muzzle Brake 7.62",
  "Flashguard 7.62",
  "Suppressor",
  "Spetsnaz Compensator",
  "KBG Eliminator",
  "GRU suppressor",
];
let ak47Barrels = [
  "15.5 Ultralight",
  "16.5 Cavalry Lancer",
  "18.2 VDV Reinforced",
  "20 Spetsnaz RPK Barrel",
];
let ak47Underbarrels = [
  "Foregrip",
  "Infiltrator Grip",
  "Patrol Grip",
  "Bruiser Grip",
  "Spetsnaz Grip",
  "Spetsnaz Speedgrip",
];
let ak47Body = [
  "Steady Aim Laser",
  "Mounted Flashlight",
  "KGB Target Designator",
  "GRU 5mw Laser Sight",
  "Tiger Team Spotlight",
  "Ember sighting Point",
];
let ak47Stock = [
  "Tactical Stock",
  "Wire Stock",
  "Duster Stock",
  "No Stock",
  "Spetsnaz PKM Stock",
  "KGB Skeletal Stock",
];
let ak47Magazines = [
  "40 Rnd",
  "Taped Mags",
  "40 Rnd Speed Mag",
  "Bakelite 50 Rnd",
  "GRU Mag Clamp",
  "VDV 50 Rnd Fast Mag",
];
let ak47Handles = [
  "Speed Tape",
  "Dropshot Wrap",
  "Field Tape",
  "Spetsnaz Field Grip",
  "Serpent Wrap",
  "GRU Elastic Wrap",
];

function getAkOptic() {
  let randomAk47Optic =
    ak47Optics[Math.floor(Math.random() * ak47Optics.length)];
  console.log(randomAk47Optic);
  const optic = document.getElementById("optic");
  optic.innerHTML = randomAk47Optic;
}

function getAkMuzzle() {
  let randomAk47Muzzle =
    ak47Muzzles[Math.floor(Math.random() * ak47Muzzles.length)];
  const muzzle = document.getElementById("muzzle");
  muzzle.innerHTML = randomAk47Muzzle;
}

function getAkBarrel() {
  let randomAk47Barrel =
    ak47Barrels[Math.floor(Math.random() * ak47Barrels.length)];
  const barrel = document.getElementById("barrel");
  barrel.innerHTML = randomAk47Barrel;
}

function getAkUnderBarrel() {
  let randomAk47UnderBarrel =
    ak47Underbarrels[Math.floor(Math.random() * ak47Underbarrels.length)];
  const underBarrel = document.getElementById("underBarrel");
  underBarrel.innerHTML = randomAk47UnderBarrel;
}

// -----------------------------------------------xm4---------------------------------------------
let xm4Optics = [
  "Millstop Reflex",
  "Visiontech 2x",
  "Kobra Red Dot",
  "Quickdot LED",
  "Axial Arms 3X",
  "Sillix Holoscout",
  "Microflex LED",
  "Hawksmoor",
  "Royal & Kross 4x",
  "SUSAT Multizoom",
  "Diamondback Reflex",
  "AN/PVS-4 Thermal",
];
let xm4Muzzles = [
  "Muzzle Brake 5.56",
  "Flashguard 5.56",
  "Suppressor",
  "Infantry Compensator",
  "SOCOM Eliminator",
  "Agency Suppressor",
];
let xm4Barrels = [
  "11.8 Ranger",
  "12.5 Cavalry Lancer",
  "13.5 Reinforced Heavy",
  "13.7 Extended",
  "13.7 Takedown",
  "13.5 Task Force",
];
let xm4Underbarrels = [
  "Foregrip",
  "Infiltraor Grip",
  "Patrol Grip",
  "Bruiser Grip",
  "Field Agent Grip",
  "SFOD Speedgrip",
];
let xm4Body = [
  "Steady Aim Laser",
  "Mounted Flashlight",
  "SOF Target Designator",
  "SWAT 5mw Laser Sight",
  "Tiger Team Spotlight",
  "Ember Sighting Point",
];
let xm4Stock = [
  "Tactical Stock",
  "Wire Stock",
  "Duster Stock",
  "Buffer Tube",
  "SAS Combat Stock",
  "Raider Pad",
];
let xm4Magazine = [
  "40 Rnd",
  "Jungle-Style Mag",
  "40 Rnd Speed Mag",
  "STAGNAG 50 Rnd",
  "SAS Mag Clamp",
  "Salvo 50 Rnd Fast Mag",
];
let xm4Handle = [
  "Speed Tape",
  "Dropshot Wrap",
  "Field Tape",
  "SASR Jungle Grip",
  "Serpent Wrap",
  "Airborne Elastic Wrap",
];
