function generateLoadout() {
  let weaponsArray = [
    "XM4",
    "AK47",
    "KRIG6",
    "FARA83",
    "STG44",
    "QBZ-83",
    "FFAR",
  ];

  let randomWeapon =
    weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
  console.log(randomWeapon);

  const img2 = document.getElementById("primaryWeapon");
  img2.innerHTML = "Primary Weapon: " + randomWeapon;

  const optic = document.getElementById("optic");

  const muzzle = document.getElementById("muzzle");

  const barrel = document.getElementById("barrel");

  const underBarrel = document.getElementById("under_barrel");

  const body = document.getElementById("body");

  const stock = document.getElementById("stock");

  const magazine = document.getElementById("magazine");

  const handle = document.getElementById("handle");

  const kits = document.getElementById("kits");

  const proficiencys = document.getElementById("proficiencys");

  const rearGrips = document.getElementById("rear_grips");

  const ammoType = document.getElementById("ammo_type");

  switch (randomWeapon) {
    case "AK47":
      imageSrc = "./images/ak47.png";
      clearAttatchments();
      getAkAttatchments();
      break;
    case "FARA83":
      imageSrc = "./images/fara83.png";
      clearAttatchments();
      getFaraAttatchments();
      break;
    case "KRIG6":
      imageSrc = "./images/krig6.png";
      clearAttatchments();
      getKrigAttatchments();
      break;
    case "STG44":
      imageSrc = "./images/stg44.jpg";
      clearAttatchments();
      getStgAttatchments();
      break;
    case "XM4":
      imageSrc = "./images/xm4.png";
      clearAttatchments();
      getXm4Attatchments();
      break;
    case "QBZ-83":
      imageSrc = "./images/qbz.webp";
      clearAttatchments();
      getQbzAttatchments();
      break;
    case "FFAR":
      imageSrc = "./images/ffar.jpg";
      clearAttatchments();
      getFfarAttatchments();
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
  const underBarrel = document.getElementById("under_barrel");
  underBarrel.innerHTML = randomAk47UnderBarrel;
}

function getAkBody() {
  let randomAk47Body = ak47Body[Math.floor(Math.random() * ak47Body.length)];
  const body = document.getElementById("body");
  body.innerHTML = randomAk47Body;
}

function getAkStock() {
  let randomAk47Stock = ak47Stock[Math.floor(Math.random() * ak47Stock.length)];
  const stock = document.getElementById("stock");
  stock.innerHTML = randomAk47Stock;
}

function getAkMagazine() {
  let randomAk47Magazine =
    ak47Magazines[Math.floor(Math.random() * ak47Magazines.length)];
  const magazine = document.getElementById("magazine");
  magazine.innerHTML = randomAk47Magazine;
}

function getAkHandle() {
  let randomAk47Handle =
    ak47Handles[Math.floor(Math.random() * ak47Handles.length)];
  const handle = document.getElementById("handle");
  handle.innerHTML = randomAk47Handle;
}

// TODO have one function call all the functions in my chosenAttatchments array
let chosenAttachments = [];
function getAkAttatchments() {
  chosenAttachments = [];
  let akAttachments = [
    getAkOptic,
    getAkMuzzle,
    getAkBarrel,
    getAkUnderBarrel,
    getAkBody,
    getAkStock,
    getAkMagazine,
    getAkHandle,
  ];
  for (i = 0; chosenAttachments.length < 5; i++) {
    let randomAkAttatchments =
      akAttachments[Math.floor(Math.random() * akAttachments.length)];
    if (!chosenAttachments.includes(randomAkAttatchments)) {
      chosenAttachments.push(randomAkAttatchments);
    }
  }
  //switch case invokes the actual function in the chosenAttachments array
  for (i = 0; i < chosenAttachments.length; i++) {
    switch (chosenAttachments[i]) {
      case getAkOptic:
        getAkOptic();
        break;
      case getAkMuzzle:
        getAkMuzzle();
        break;
      case getAkBarrel:
        getAkBarrel();
        break;
      case getAkUnderBarrel:
        getAkUnderBarrel();
        break;
      case getAkBody:
        getAkBody();
        break;
      case getAkStock:
        getAkStock();
        break;
      case getAkMagazine:
        getAkMagazine();
        break;
      case getAkHandle:
        getAkHandle();
        break;
    }
  }
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

function getXm4Optic() {
  let randomXm4Optic = xm4Optics[Math.floor(Math.random() * xm4Optics.length)];

  const optic = document.getElementById("optic");
  optic.innerHTML = randomXm4Optic;
}

function getXm4Muzzle() {
  let randomXm4Muzzle =
    xm4Muzzles[Math.floor(Math.random() * xm4Muzzles.length)];
  const muzzle = document.getElementById("muzzle");
  muzzle.innerHTML = randomXm4Muzzle;
}

function getXm4Barrel() {
  let randomXm4Barrel =
    xm4Barrels[Math.floor(Math.random() * xm4Barrels.length)];
  const barrel = document.getElementById("barrel");
  barrel.innerHTML = randomXm4Barrel;
}

function getXm4UnderBarrel() {
  let randomXm4UnderBarrel =
    xm4Underbarrels[Math.floor(Math.random() * xm4Underbarrels.length)];
  const underBarrel = document.getElementById("under_barrel");
  underBarrel.innerHTML = randomXm4UnderBarrel;
}

function getXm4Body() {
  let randomXm4Body = xm4Body[Math.floor(Math.random() * xm4Body.length)];
  const body = document.getElementById("body");
  body.innerHTML = randomXm4Body;
}

function getXm4Stock() {
  let randomXm4Stock = xm4Stock[Math.floor(Math.random() * xm4Stock.length)];
  const stock = document.getElementById("stock");
  stock.innerHTML = randomXm4Stock;
}

function getXm4Magazine() {
  let randomXm4Magazine =
    xm4Magazine[Math.floor(Math.random() * xm4Magazine.length)];
  const magazine = document.getElementById("magazine");
  magazine.innerHTML = randomXm4Magazine;
}

function getXm4Handle() {
  let randomXm4Handle = xm4Handle[Math.floor(Math.random() * xm4Handle.length)];
  const handle = document.getElementById("handle");
  handle.innerHTML = randomXm4Handle;
}

function getXm4Attatchments() {
  chosenAttachments = [];
  let xm4Attatchments = [
    getXm4Optic,
    getXm4Barrel,
    getXm4Muzzle,
    getXm4UnderBarrel,
    getXm4Stock,
    getXm4Body,
    getXm4Magazine,
    getXm4Handle,
  ];
  for (i = 0; chosenAttachments.length < 5; i++) {
    let randomXm4Attatchments =
      xm4Attatchments[Math.floor(Math.random() * xm4Attatchments.length)];
    if (!chosenAttachments.includes(randomXm4Attatchments)) {
      chosenAttachments.push(randomXm4Attatchments);
    }
  }
  //switch case invokes the actual function in the chosenAttachments array
  for (i = 0; i < chosenAttachments.length; i++) {
    switch (chosenAttachments[i]) {
      case getXm4Optic:
        getXm4Optic();
        break;
      case getXm4Muzzle:
        getXm4Muzzle();
        break;
      case getXm4Barrel:
        getXm4Barrel();
        break;
      case getXm4UnderBarrel:
        getXm4UnderBarrel();
        break;
      case getXm4Body:
        getXm4Body();
        break;
      case getXm4Stock:
        getXm4Stock();
        break;
      case getXm4Magazine:
        getXm4Magazine();
        break;
      case getXm4Handle:
        getXm4Handle();
        break;
    }
  }
}

// ---------------------------------------------------krig6---------------------------------------------
let krigOptics = [
  "Millstop Reflex",
  "Visiontech 2x",
  "Kobra Red Dot",
  "Quickdot LED",
  "Axial Arms 3X",
  "Sillix Holoscout",
  "Microflex LED",
  "Hawksmoor",
  "Royal & Kross 4X",
  "SUSAT Multizoom",
  "Diamondback Reflex",
  "AN/PVS-4 Thermal",
];
let krigMuzzles = [
  "Muzzle Brake 5.56",
  "Flashguard 5.56",
  "Suppressor",
  "Infantry Compensator",
  "SOCOM Elmininator",
  "Agency Suppressor",
];
let krigBarrels = [
  "16.5 Ultralight",
  "17.7 Cavalry Lancer",
  "15.5 Contour",
  "19.7 Ranger",
  "19.7 Takedown",
  "15 CMV Mil-Spec",
];
let krigUnderbarrels = [
  "Foregrip",
  "Infiltrator Grip",
  "Patrol Grip",
  "Bruiser Grip",
  "Field Agent Grip",
  "SFOD Speedgrip",
];
let krigBody = [
  "Steady Aim Laser",
  "Mounted Flashlight",
  "SOF Target Designator",
  "SWAT 5mw Laser Sight",
  "Tiger Team Spotlight",
  "Ember Sighting Point",
];
let krigStocks = [
  "Tactical Stock",
  "Wire Stock",
  "Duster Stock",
  "No Stock",
  "SAS Combat Stock",
  "Raider Stock",
];
let krigMagazines = [
  "40 Rnd",
  "Jungle-Style Mag",
  "40 Rnd Speed Mag",
  "STAGNAG 50 Rnd",
  "SAS Mag Clamp",
  "Salvo 50 Rnd Fast Mag",
];
let krigHandles = [
  "Speed Tape",
  "Dropshot Wrap",
  "Field Tape",
  "SASR Jungle Grip",
  "Serpent Wrap",
  "Airborne Elastic Wrap",
];

function getKrigOptic() {
  let randomKrigOptic =
    krigOptics[Math.floor(Math.random() * krigOptics.length)];

  const optic = document.getElementById("optic");
  optic.innerHTML = randomKrigOptic;
}

function getKrigMuzzle() {
  let randomKrigMuzzle =
    krigMuzzles[Math.floor(Math.random() * krigMuzzles.length)];
  const muzzle = document.getElementById("muzzle");
  muzzle.innerHTML = randomKrigMuzzle;
}

function getKrigBarrel() {
  let randomKrigBarrel =
    krigBarrels[Math.floor(Math.random() * krigBarrels.length)];
  const barrel = document.getElementById("barrel");
  barrel.innerHTML = randomKrigBarrel;
}

function getKrigUnderBarrel() {
  let randomKrigUnderBarrel =
    krigUnderbarrels[Math.floor(Math.random() * krigUnderbarrels.length)];
  const underBarrel = document.getElementById("under_barrel");
  underBarrel.innerHTML = randomKrigUnderBarrel;
}

function getKrigBody() {
  let randomKrigBody = krigBody[Math.floor(Math.random() * krigBody.length)];
  const body = document.getElementById("body");
  body.innerHTML = randomKrigBody;
}

function getKrigStock() {
  let randomKrigStock =
    krigStocks[Math.floor(Math.random() * krigStocks.length)];
  const stock = document.getElementById("stock");
  stock.innerHTML = randomKrigStock;
}

function getKrigMagazine() {
  let randomKrigMagazine =
    krigMagazines[Math.floor(Math.random() * krigMagazines.length)];
  const magazine = document.getElementById("magazine");
  magazine.innerHTML = randomKrigMagazine;
}

function getKrigHandle() {
  let randomKrigHandle =
    krigHandles[Math.floor(Math.random() * krigHandles.length)];
  const handle = document.getElementById("handle");
  handle.innerHTML = randomKrigHandle;
}

function getKrigAttatchments() {
  chosenAttachments = [];
  let krigAttatchments = [
    getKrigOptic,
    getKrigBarrel,
    getKrigMuzzle,
    getKrigUnderBarrel,
    getKrigStock,
    getKrigBody,
    getKrigMagazine,
    getKrigHandle,
  ];
  for (i = 0; chosenAttachments.length < 5; i++) {
    let randomKrigAttatchments =
      krigAttatchments[Math.floor(Math.random() * krigAttatchments.length)];
    if (!chosenAttachments.includes(randomKrigAttatchments)) {
      chosenAttachments.push(randomKrigAttatchments);
    }
  }
  //switch case invokes the actual function in the chosenAttachments array
  for (i = 0; i < chosenAttachments.length; i++) {
    switch (chosenAttachments[i]) {
      case getKrigOptic:
        getKrigOptic();
        break;
      case getKrigMuzzle:
        getKrigMuzzle();
        break;
      case getKrigBarrel:
        getKrigBarrel();
        break;
      case getKrigUnderBarrel:
        getKrigUnderBarrel();
        break;
      case getKrigBody:
        getKrigBody();
        break;
      case getKrigStock:
        getKrigStock();
        break;
      case getKrigMagazine:
        getKrigMagazine();
        break;
      case getKrigHandle:
        getKrigHandle();
        break;
    }
  }
}

// -----------------------------------------------------fara83-------------------------------------------------
let faraOptics = [
  "Millstop Reflex",
  "Visiontech 2x",
  "Kobra Red Dot",
  "Quickdot LED",
  "Axial Arms 3X",
  "Sillix Holoscout",
  "Microflex LED",
  "Hawksmoor",
  "Royal & Kross 4X",
  "SUSAT Multizoom",
  "Diamondback Reflex",
  "Noch Sova Thermal",
];
let faraMuzzles = [
  "Muzzle Brake 5.56",
  "Flashguard 5.56",
  "Suppressor",
  "Spetsnaz Compensator",
  "KGB Elmininator",
  "GRU Suppressor",
];
let faraBarrels = [
  "14.8 Ultralight",
  "15.9 Cavalry Lancer",
  "17.5 Contour",
  "19.5 Liberator",
  "18.1 Takedown",
  "18.7 Spetsnaz RPK Barrel",
];
let faraUnderbarrels = [
  "Foregrip",
  "Infiltrator Grip",
  "Patrol Grip",
  "Bruiser Grip",
  "Spetsnaz Grip",
  "Spetsnaz Speedgrip",
];
let faraBody = [
  "Steady Aim Laser",
  "Mounted Flashlight",
  "KGB Target Designator",
  "GRU 5mw Laser Sight",
  "Tiger Team Spotlight",
  "Ember Sighting Point",
];
let faraStocks = [
  "Tactical Stock",
  "Wire Stock",
  "Duster Stock",
  "No Stock",
  "KGB Skeletal Stock",
  "Raider Stock",
];
let faraMagazines = [
  "40 Rnd",
  "Taped Mags",
  "40 Rnd Speed Mag",
  "STAGNAG 50 Rnd",
  "GRU Mag Clamp",
  "VDV 50 Rnd Fast Mag",
];
let faraHandles = [
  "Speed Tape",
  "Dropshot Wrap",
  "Field Tape",
  "Spetsnaz Field Grip",
  "Serpent Wrap",
  "GRU Elastic Wrap",
];

function getFaraOptic() {
  let randomFaraOptic =
    faraOptics[Math.floor(Math.random() * faraOptics.length)];

  const optic = document.getElementById("optic");
  optic.innerHTML = randomFaraOptic;
}

function getFaraMuzzle() {
  let randomFaraMuzzle =
    faraMuzzles[Math.floor(Math.random() * faraMuzzles.length)];
  const muzzle = document.getElementById("muzzle");
  muzzle.innerHTML = randomFaraMuzzle;
}

function getFaraBarrel() {
  let randomFaraBarrel =
    faraBarrels[Math.floor(Math.random() * faraBarrels.length)];
  const barrel = document.getElementById("barrel");
  barrel.innerHTML = randomFaraBarrel;
}

function getFaraUnderBarrel() {
  let randomFaraUnderBarrel =
    faraUnderbarrels[Math.floor(Math.random() * faraUnderbarrels.length)];
  const underBarrel = document.getElementById("under_barrel");
  underBarrel.innerHTML = randomFaraUnderBarrel;
}

function getFaraBody() {
  let randomFaraBody = faraBody[Math.floor(Math.random() * faraBody.length)];
  const body = document.getElementById("body");
  body.innerHTML = randomFaraBody;
}

function getFaraStock() {
  let randomFaraStock =
    faraStocks[Math.floor(Math.random() * faraStocks.length)];
  const stock = document.getElementById("stock");
  stock.innerHTML = randomFaraStock;
}

function getFaraMagazine() {
  let randomFaraMagazine =
    faraMagazines[Math.floor(Math.random() * faraMagazines.length)];
  const magazine = document.getElementById("magazine");
  magazine.innerHTML = randomFaraMagazine;
}

function getFaraHandle() {
  let randomFaraHandle =
    faraHandles[Math.floor(Math.random() * faraHandles.length)];
  const handle = document.getElementById("handle");
  handle.innerHTML = randomFaraHandle;
}

function getFaraAttatchments() {
  chosenAttachments = [];
  let faraAttatchments = [
    getFaraOptic,
    getFaraBarrel,
    getFaraMuzzle,
    getFaraUnderBarrel,
    getFaraStock,
    getFaraBody,
    getFaraMagazine,
    getFaraHandle,
  ];
  for (i = 0; chosenAttachments.length < 5; i++) {
    let randomFaraAttatchments =
      faraAttatchments[Math.floor(Math.random() * faraAttatchments.length)];
    if (!chosenAttachments.includes(randomFaraAttatchments)) {
      chosenAttachments.push(randomFaraAttatchments);
    }
  }
  //switch case invokes the actual function in the chosenAttachments array
  for (i = 0; i < chosenAttachments.length; i++) {
    switch (chosenAttachments[i]) {
      case getFaraOptic:
        getFaraOptic();
        break;
      case getFaraMuzzle:
        getFaraMuzzle();
        break;
      case getFaraBarrel:
        getFaraBarrel();
        break;
      case getFaraUnderBarrel:
        getFaraUnderBarrel();
        break;
      case getFaraBody:
        getFaraBody();
        break;
      case getFaraStock:
        getFaraStock();
        break;
      case getFaraMagazine:
        getFaraMagazine();
        break;
      case getFaraHandle:
        getFaraHandle();
        break;
    }
  }
}
//-----------------------------------------------------qbz83-----------------------------------------------------
let qbzOptics = [
  "Millstop Reflex",
  "Visiontech 2x",
  "Kobra Red Dot",
  "Quickdot LED",
  "Axial Arms 3X",
  "Sillix Holoscout",
  "Microflex LED",
  "Hawksmoor",
  "Royal & Kross 4X",
  "SUSAT Multizoom",
  "Diamondback Reflex",
  "AN/PVS-4 Thermal",
];
let qbzMuzzles = [
  "Muzzle Brake 5.56",
  "Flashguard 5.56",
  "Suppressor",
  "Infantry Compensator",
  "SOCOM Elmininator",
  "Agency Suppressor",
];
let qbzBarrels = [
  "13.7 Ultralight",
  "13.7 Cavalry Lancer",
  "15.5 Reinforced Heavy",
  "16.5 Ranger",
  "15.5 Takedown",
  "15.5 Task Force",
];
let qbzUnderbarrels = [
  "Foregrip",
  "Infiltrator Grip",
  "Patrol Grip",
  "Bruiser Grip",
  "Field Agent Grip",
  "SFOD Speedgrip",
];
let qbzBody = [
  "Steady Aim Laser",
  "Mounted Flashlight",
  "SOF Target Designator",
  "SWAT 5mw Laser Sight",
  "Tiger Team Spotlight",
  "Ember Sighting Point",
];
let qbzStocks = [
  "Tactical Stock",
  "Marathon Stock",
  "Duster Pad",
  "CQB Pad",
  "SAS Combat Stock",
  "Raider Stock",
];
let qbzMagazines = [
  "40 Rnd Drum",
  "Jungle-Style Mag",
  "40 Rnd Speed Mag",
  "STAGNAG 50 Rnd Drum",
  "SAS Mag Clamp",
  "Salvo 50 Rnd Fast Mag",
];
let qbzHandles = [
  "Speed Tape",
  "Dropshot Wrap",
  "Field Tape",
  "SASR Jungle Grip",
  "Serpent Wrap",
  "Airborne Elastic Wrap",
];

function getQbzOptic() {
  let randomQbzOptic = qbzOptics[Math.floor(Math.random() * qbzOptics.length)];

  const optic = document.getElementById("optic");
  optic.innerHTML = randomQbzOptic;
}

function getQbzMuzzle() {
  let randomQbzMuzzle =
    qbzMuzzles[Math.floor(Math.random() * qbzMuzzles.length)];
  const muzzle = document.getElementById("muzzle");
  muzzle.innerHTML = randomQbzMuzzle;
}

function getQbzBarrel() {
  let randomQbzBarrel =
    qbzBarrels[Math.floor(Math.random() * qbzBarrels.length)];
  const barrel = document.getElementById("barrel");
  barrel.innerHTML = randomQbzBarrel;
}

function getQbzUnderBarrel() {
  let randomQbzUnderBarrel =
    qbzUnderbarrels[Math.floor(Math.random() * qbzUnderbarrels.length)];
  const underBarrel = document.getElementById("under_barrel");
  underBarrel.innerHTML = randomQbzUnderBarrel;
}

function getQbzBody() {
  let randomQbzBody = qbzBody[Math.floor(Math.random() * qbzBody.length)];
  const body = document.getElementById("body");
  body.innerHTML = randomQbzBody;
}

function getQbzStock() {
  let randomQbzStock = qbzStocks[Math.floor(Math.random() * qbzStocks.length)];
  const stock = document.getElementById("stock");
  stock.innerHTML = randomQbzStock;
}

function getQbzMagazine() {
  let randomQbzMagazine =
    qbzMagazines[Math.floor(Math.random() * qbzMagazines.length)];
  const magazine = document.getElementById("magazine");
  magazine.innerHTML = randomQbzMagazine;
}

function getQbzHandle() {
  let randomQbzHandle =
    qbzHandles[Math.floor(Math.random() * qbzHandles.length)];
  const handle = document.getElementById("handle");
  handle.innerHTML = randomQbzHandle;
}
function getQbzAttatchments() {
  chosenAttachments = [];
  let qbzAttatchments = [
    getQbzOptic,
    getQbzBarrel,
    getQbzMuzzle,
    getQbzUnderBarrel,
    getQbzStock,
    getQbzBody,
    getQbzMagazine,
    getQbzHandle,
  ];
  for (i = 0; chosenAttachments.length < 5; i++) {
    let randomQbzAttatchments =
      qbzAttatchments[Math.floor(Math.random() * qbzAttatchments.length)];
    if (!chosenAttachments.includes(randomQbzAttatchments)) {
      chosenAttachments.push(randomQbzAttatchments);
    }
  }
  //switch case invokes the actual function in the chosenAttachments array
  for (i = 0; i < chosenAttachments.length; i++) {
    switch (chosenAttachments[i]) {
      case getQbzOptic:
        getQbzOptic();
        break;
      case getQbzMuzzle:
        getQbzMuzzle();
        break;
      case getQbzBarrel:
        getQbzBarrel();
        break;
      case getQbzUnderBarrel:
        getQbzUnderBarrel();
        break;
      case getQbzBody:
        getQbzBody();
        break;
      case getQbzStock:
        getQbzStock();
        break;
      case getQbzMagazine:
        getQbzMagazine();
        break;
      case getQbzHandle:
        getQbzHandle();
        break;
    }
  }
}
// -------------------------------------------------------FFAR-------------------------------------------------------
let ffarOptics = [
  "Millstop Reflex",
  "Visiontech 2x",
  "Kobra Red Dot",
  "Quickdot LED",
  "Axial Arms 3X",
  "Sillix Holoscout",
  "Microflex LED",
  "Hawksmoor",
  "Royal & Kross 4X",
  "SUSAT Multizoom",
  "Diamondback Reflex",
  "AN/PVS-4 Thermal",
];
let ffarMuzzles = [
  "Muzzle Brake 5.56",
  "Flashguard 5.56",
  "Suppressor",
  "Infantry Compensator",
  "SOCOM Elmininator",
  "Agency Suppressor",
];
let ffarBarrels = [
  "17.9 Ultralight",
  "18.7 Cavalry Lancer",
  "19.5 Reinforced Heavy",
  "21.2 Ranger",
  "20.3 Takedown",
  "19.5 Task Force",
];
let ffarUnderbarrels = [
  "Foregrip",
  "Infiltrator Grip",
  "Patrol Grip",
  "Bruiser Grip",
  "Field Agent Grip",
  "SFOD Speedgrip",
];
let ffarBody = [
  "Steady Aim Laser",
  "Mounted Flashlight",
  "SOF Target Designator",
  "SWAT 5mw Laser Sight",
  "Tiger Team Spotlight",
  "Ember Sighting Point",
];
let ffarStocks = [
  "Tactical Stock",
  "Marathon Stock",
  "Duster Pad",
  "CQB Pad",
  "SAS Combat Stock",
  "Raider Stock",
];
let ffarMagazines = [
  "38 Rnd Drum",
  "Jungle-Style Mag",
  "38 Rnd Speed Mag",
  "STAGNAG 44 Rnd",
  "SAS Mag Clamp",
  "Salvo 44 Rnd Fast Mag",
];
let ffarHandles = [
  "Speed Tape",
  "Dropshot Wrap",
  "Field Tape",
  "SASR Jungle Grip",
  "Serpent Wrap",
  "Airborne Elastic Wrap",
];

function getFfarOptic() {
  let randomFfarOptic =
    ffarOptics[Math.floor(Math.random() * ffarOptics.length)];

  const optic = document.getElementById("optic");
  optic.innerHTML = randomFfarOptic;
}

function getFfarMuzzle() {
  let randomFfarMuzzle =
    ffarMuzzles[Math.floor(Math.random() * ffarMuzzles.length)];
  const muzzle = document.getElementById("muzzle");
  muzzle.innerHTML = randomFfarMuzzle;
}

function getFfarBarrel() {
  let randomFfarBarrel =
    ffarBarrels[Math.floor(Math.random() * ffarBarrels.length)];
  const barrel = document.getElementById("barrel");
  barrel.innerHTML = randomFfarBarrel;
}

function getFfarUnderBarrel() {
  let randomFfarUnderBarrel =
    ffarUnderbarrels[Math.floor(Math.random() * ffarUnderbarrels.length)];
  const underBarrel = document.getElementById("under_barrel");
  underBarrel.innerHTML = randomFfarUnderBarrel;
}

function getFfarBody() {
  let randomFfarBody = ffarBody[Math.floor(Math.random() * ffarBody.length)];
  const body = document.getElementById("body");
  body.innerHTML = randomFfarBody;
}

function getFfarStock() {
  let randomFfarStock =
    ffarStocks[Math.floor(Math.random() * ffarStocks.length)];
  const stock = document.getElementById("stock");
  stock.innerHTML = randomFfarStock;
}

function getFfarMagazine() {
  let randomFfarMagazine =
    ffarMagazines[Math.floor(Math.random() * ffarMagazines.length)];
  const magazine = document.getElementById("magazine");
  magazine.innerHTML = randomFfarMagazine;
}

function getFfarHandle() {
  let randomFfarHandle =
    ffarHandles[Math.floor(Math.random() * ffarHandles.length)];
  const handle = document.getElementById("handle");
  handle.innerHTML = randomFfarHandle;
}

function getFfarAttatchments() {
  chosenAttachments = [];
  let ffarAttatchments = [
    getFfarOptic,
    getFfarBarrel,
    getFfarMuzzle,
    getFfarUnderBarrel,
    getFfarStock,
    getFfarBody,
    getFfarMagazine,
    getFfarHandle,
  ];
  for (i = 0; chosenAttachments.length < 5; i++) {
    let randomFfarAttatchments =
      ffarAttatchments[Math.floor(Math.random() * ffarAttatchments.length)];
    if (!chosenAttachments.includes(randomFfarAttatchments)) {
      chosenAttachments.push(randomFfarAttatchments);
    }
  }
  //switch case invokes the actual function in the chosenAttachments array
  for (i = 0; i < chosenAttachments.length; i++) {
    switch (chosenAttachments[i]) {
      case getFfarOptic:
        getFfarOptic();
        break;
      case getFfarMuzzle:
        getFfarMuzzle();
        break;
      case getFfarBarrel:
        getFfarBarrel();
        break;
      case getFfarUnderBarrel:
        getFfarUnderBarrel();
        break;
      case getFfarBody:
        getFfarBody();
        break;
      case getFfarStock:
        getFfarStock();
        break;
      case getFfarMagazine:
        getFfarMagazine();
        break;
      case getFfarHandle:
        getFfarHandle();
        break;
    }
  }
}
// ----------------------------------------------------stg44------------------------------------------------------
let stgMuzzles = [
  "Scythe Compensator",
  "MX Silencer",
  "T1 Flash Hider",
  "Recoil Booster",
  "Mercury Silencer",
  "Chord Muzzle Brake",
  "F8 Stabilizer",
];
let stgBarrels = [
  "VDD 320mm 02B",
  "VDD 760mm 05B",
  "Krausnick 620mm Precision",
  "Krausnick 220mm Rapid",
];
let stgUnderbarrels = [
  "Carver Foregrip",
  "M1941 Hand Stop",
  "M3 Ready Grip",
  "Bipod",
  "GF-59 Flashlight",
  "SMLE Pistol Grip",
  "M1930 Strife Angled",
  "Bayonet",
  "Mark VI Skeletal",
];
let stgMagazines = [
  "7.62mm Gorenko 50 Round Mags",
  ".30 Russian Short 30 Round Mags",
  "8mm Kurz 60 Round Drums",
  ".30 Russian Short 45 Round Mags",
];
let stgOptics = [
  "Nydar Model 47",
  "G16 2.5x",
  "Slate Reflector",
  "Mk 3 Sunfilter",
  "ZC2 1.35x Lens",
  "M19 4.0x Flip",
  "K98 Scout 10.0x Telescopic",
  "Monocular Reflector",
  "1913 Variable 4-8x",
  "Saturn 1.35x Lens",
  "ZF4 3.5x Rifle Scope",
  "Type 99 Mod. 2 7x Telescopic",
  "M38/Slate 2.5x Custom",
  "Type 97 5x Telescopic",
  "Mk 3 Mod. 2 Sunfilter",
  "Mk. 12 Night Vision",
  "Mk. 3 Reflector",
  "1229/Slate 3.25x Custom",
  "SVT-40 PU Scope 3-6x",
  "Mk 18 Sunfilter",
  "Krausnick IS01M",
  "Krausnick IS02M",
];
let stgAmmoTypes = [
  "Subsonic",
  "FMJ Rounds",
  "Frangible",
  "Armor Piercing",
  "Incendiary",
  "Lengthened",
  "Hollow Point",
];
let stgRearGrips = [
  "Rubber Grip",
  "Taped Grip",
  "Leather Grip",
  "Fabric Grip",
  "Grooved Grip",
  "Hatched Grip",
  "Polymer Grip",
  "Pine Tar Grip",
  "Granular Grip",
  "Stippled Grip",
];
let stgStocks = [
  "Krausnick S11S Folding",
  "Konstanz Tactical",
  "Removed Stock",
  "VDD 27 Precision",
  "VDD 34S Weighted",
];
let stgKits = [
  "Fast Melee",
  "Reach",
  "Surplus",
  "Deep Breath",
  "Fully Loaded",
  "Defender",
  "Heavy Hitter",
  "On-Hand",
];
let stgProficiencys = [
  "Pressure",
  "Acrobatic",
  "Sleight of Hand",
  "Nerves of Steel",
  "Focus",
  "Vital",
];

function getStgOptic() {
  let randomStgOptic = stgOptics[Math.floor(Math.random() * stgOptics.length)];

  const optic = document.getElementById("optic");
  optic.innerHTML = randomStgOptic;
}

function getStgMuzzle() {
  let randomStgMuzzle =
    stgMuzzles[Math.floor(Math.random() * stgMuzzles.length)];
  const muzzle = document.getElementById("muzzle");
  muzzle.innerHTML = randomStgMuzzle;
}

function getStgBarrel() {
  let randomStgBarrel =
    stgBarrels[Math.floor(Math.random() * stgBarrels.length)];
  const barrel = document.getElementById("barrel");
  barrel.innerHTML = randomStgBarrel;
}

function getStgUnderBarrel() {
  let randomStgUnderBarrel =
    stgUnderbarrels[Math.floor(Math.random() * stgUnderbarrels.length)];
  const underBarrel = document.getElementById("under_barrel");
  underBarrel.innerHTML = randomStgUnderBarrel;
}

function getStgAmmoType() {
  let randomStgAmmoType =
    stgAmmoTypes[Math.floor(Math.random() * stgAmmoTypes.length)];
  const body = document.getElementById("ammo_type");
  body.innerHTML = randomStgAmmoType;
}

function getStgStock() {
  let randomStgStock = stgStocks[Math.floor(Math.random() * stgStocks.length)];
  const stock = document.getElementById("stock");
  stock.innerHTML = randomStgStock;
}

function getStgMagazine() {
  let randomStgMagazine =
    stgMagazines[Math.floor(Math.random() * stgMagazines.length)];
  const magazine = document.getElementById("magazine");
  magazine.innerHTML = randomStgMagazine;
}

function getStgKit() {
  let randomStgKit = stgKits[Math.floor(Math.random() * stgKits.length)];
  const kits = document.getElementById("kits");
  kits.innerHTML = randomStgKit;
}
function getStgProficiency() {
  let randomStgProficiency =
    stgProficiencys[Math.floor(Math.random() * stgProficiencys.length)];
  const proficiencys = document.getElementById("proficiencys");
  proficiencys.innerHTML = randomStgProficiency;
}
function getStgRearGrip() {
  let randomStgRearGrip =
    stgRearGrips[Math.floor(Math.random() * stgRearGrips.length)];
  const rearGrips = document.getElementById("rear_grips");
  rearGrips.innerHTML = randomStgRearGrip;
}

function getStgAttatchments() {
  getStgKit();
  getStgMuzzle();
  getStgBarrel();
  getStgMagazine();
  getStgAmmoType();
  getStgProficiency();
  getStgOptic();
  getStgRearGrip();
  getStgUnderBarrel();
  getStgStock();
}

// Clears previous chosenAttachments on innerHTML
function clearAttatchments() {
  allAttachments = [
    optic,
    muzzle,
    barrel,
    under_barrel,
    body,
    stock,
    magazine,
    handle,
    kits,
    proficiencys,
    rear_grips,
    ammo_type,
  ];
  allAttachments.forEach((element) => (element.innerHTML = ""));
}
