//Model
const html = document.getElementById(`app`);
const car = `<img class="car-img" src="img/red_car.png"/>`;
let encounters;

const enemies = [
    { name: 'Bestemor', img: "img/granny2.png" },
    { name: 'Trump', img: "img/trump.png" },
    { name: 'Ekornet', img: "img/scrat.png" }
];
const encounterBestemor = [
    'kommer som bøssebærer for Røde Kors, hva gjør du?',
    'truer med å fortelle mammaen din, hva gjør du?',
    'kommer på et hyggelig besøk, hva gjør du?',
    'minner deg på et NAV-møtet du glemte, hva gjør du?',
    'begynte å danse Cha-Cha foran bilen din, hva gjør du?',
    'kjefter på deg at du ikke besøker ofte nok, hva gjør du?',
    'synes du er SÅ kul at de skal starte en onlyfans for deg, hva gjør du?',
];
const encounterPer = [
    'vil selge bilen din på Finn og ta alle pengene etter salget, hva gjør du?',
    'løper midt i veien for ingen grunn, hva gjør du?',
    'ønsker å gi deg en "gratis" bilvask, hva gjør du?',
    'liker bilen din, hva gjør du?',
    'synes bilen din er stygg, hva gjør du?',
    'spør om en femmer til "bensin", hva gjør du?',
];

const encounterEkornet = [
    'nøtt nøtt, nøttinøtt, nøtti?',
    'har rabies og prøver å bryte seg igjennom frontruta di! Hva gjør du?!',
    'har skarpe knokkler som punkterer dekk når du kjører på den! Hva gjør du?!',
    'synes bilen din ser ut som en stor nøtt, og begynner å gnage på fordekket! Hva gjør du?!',
    'klemmer på kinnene som er fulle av nøtter, og spytter nøtter på bilen som et maskingevær! Hva gjør du?!',
    'hopper foran bilen din! Hva gjør du?',
    'går sakte foran bilen din med hele ekornfamilien, hva gjør du?',
    'kommer inn et vindu, og kryper opp buksebeinet ditt! Hva gjør du?!',
];

const buddies = [
    { name: 'Eskil', img: "img/eskil2.png" },
    { name: 'Geir', img: "img/geir2.png" },
    { name: 'Terje', img: "img/terje2.png" }
];
const buddyLine = [
    'For et vrak du kjører da!', //hvis lavt coolmeter OG/ELLER valg av feil
    'Fet kjærre!' //hvis høyt/fullt coolmeter OG velger riktig 
];
//karakteren sine valg, hvor èn av valgene er riktige, som da trigger hvilne buddyLine som skal spilles. 
const myLine = [
    'Hva synes du om bilen min?',
    'God dag! Ingen Chorei i dag altså?',
    'For en tilfeldighet å treffe deg her ute ved veien!'
]

const choicesEnemies = [
    'Kjøre på',
    'Kjøre forbi',
];

const choicesBuddies = [
    'Stopp på trass',
    'Kjøre forbi'
]
let currentBuddy = undefined
let currentEncounter = undefined

//TODO fikse css med plassering av tingene (ONGOING)

//max coolness stats = 12.5 per bildel

//TODO upgrades til array og samle arraysa i ett samle array
//eksempel const spoiler = [{name: 'Wings of Fury', coolness: 9001}]
// samleArr[random1][samleArr[random2(random1(samleArr[random1].length))]]

const spoiler = [{ name: 'ingen spoiler', coolness: 0 }, { name: 'limp dick', coolness: 6 }, { name: 'wings of fury', coolness: 13 },]
const splitter = [{ name: 'ingen splitter', coolness: 0 }, { name: 'finèr plate', coolness: 6 }, { name: 'karbonfiber', coolness: 12 },]
const skjort = [{ name: 'ingen skjørt', coolness: 0 }, { name: 'loooooow ride', coolness: 6 }, { name: 'maurdreper', coolness: 13 },]
const defuser = [{ name: 'ingen defuser', coolness: 0 }, { name: 'tail tale', coolness: 6 }, { name: 'tail gate', coolness: 12 },]
const panser = [{ name: 'vanlig panser', coolness: 0 }, { name: 'ventilert panser', coolness: 4 }, { name: 'scoop', coolness: 8 }, { name: 'scoop med kompressor', coolness: 13 },]
const felger = [{ name: 'rusten stålfelg', coolness: 0 }, { name: 'hjulkapsler', coolness: 4 }, { name: 'lavprofil', coolness: 8 }, { name: 'spinners med neon', coolness: 12 },]
const eksos = [{ name: 'Stock', coolness: 0 }, { name: 'Flow Master', coolness: 4 }, { name: 'Cherry bomb', coolness: 8 }, { name: 'Custom titan', coolness: 12 },]
const motor = [{ name: 'I4', coolness: 0 }, { name: 'I3', coolness: 4 }, { name: 'V8', coolness: 8 }, { name: 'W16', coolness: 13 }]

const SPOILER = 0
const SPLITTER = 1

const bil = [
    spoiler[0],
    splitter[0],
    skjort[0],
    defuser[0],
    panser[0],
    felger[0],
    eksos[0],
    motor[0],
];
const upgrades = [spoiler, splitter, skjort, defuser, panser, felger, eksos, motor]

const startMenu = document.getElementById("startMenu");
let deadGrandmas = 0;
let coolness = 0;
let life = 100;
let getPart1 = undefined;
//View

view()
function view() {
    html.innerHTML = /*HTML*/`
    <div class="sign">
        <h1>Broom broom spill</h1>
        <div class="inner-stats">
        <div class="left">
            <div class="stats">
                ${currentUpgrades()}
            </div>
        </div>
        <div class="right">
        </div>
        </div>
    </div>
    <div class="carImg">
        ${car}
        <table class="table">
            <tr>
                <td>Coolmeter</td>
                <td><progress value="${coolness}" min="0" max="100"></progress></td>
            </tr>
            <tr>
                <td>Life</td>
                <td><progress value="${life}" min="0" max="100"></progress></td>
            </tr>
        </table>
    </div>
    <div class="encounters">
        ${selectEncounterType()}
    </div>
    `;
    html.innerHTML += encounters;

}


function clickStart() {
    document.getElementById('startMenu').style.display = 'none';
}


//Controller
function randomizer(num) {
    let getRandom = Math.floor(Math.random() * num);
    return getRandom;
}

//TODO få en tilfeldig komponent, funksjonen skal returnere objektet som innholder komponenten
function selectRandomComponent() {
    getPart1 = randomizer(upgrades.length);
    let getpart2 = randomizer(upgrades[getPart1].length);
    if (getpart2 == 0) return selectRandomComponent;
    currentEncounter = upgrades[getPart1][getpart2]; //"output" skal være ett objekt
}

function equipComponent() {
    if (true) {

    }
}


//TODO velger finede
function selectRandomEnemy() {
    let enemy = enemies[randomizer(enemies.length)];
    currentEncounter = enemy;
}

//burde få buddies enda skjeldnere enn dette!
//TODO velger tilfeldig kompis
function selectRandomBuddy() {
    currentBuddy = buddies[randomizer(buddies.length)]
    console.log(currentBuddy)
}

//TODO møter man på en komponent eller en "finende" eller kompisen
function selectEncounterType() {
    encounters = '';
    let percent = randomizer(10) + 1;
    if (percent <= 2) {
        selectRandomComponent()
        encounters = /*HTML*/`
            <div>Du fant ${currentEncounter.name} med ${currentEncounter.coolness} coolness</div></br>
            <div>Du har ${bil[getPart1].name} med ${bil[getPart1].coolness} coolness</div>
            <div>Vil du bytte?</div>
            `
            console.log(bil[getPart1].name, bil[getPart1].coolness)
    } 
    else if (percent <= 7) {
        selectRandomBuddy()
        encounters = /*HTML*/`
            <button onclick="choiceBuddiesButton()">${choicesBuddies[0]}</button>
            <button onclick="drivePass()">${choicesBuddies[1]}</button>
            <p>${currentBuddy.name}</p>
            <img class="pedestrian" src='${currentBuddy.img}'>
        `;
    } else {
        selectRandomEnemy()
    }
}
//
function currentUpgrades() {
    let bilStatus = '';
    let currentCool = 0;
    for (i = 0; i < bil.length; i++) {
        currentCool += bil[i].coolness;
    };
    coolness = currentCool
    bilStatus = '<p> coolness er ' + currentCool + ' av 100 </p>';
    return bilStatus;
}

function choiceBuddiesButton() {
    encounters = /*HTML*/`
        <tr>
            <td>
            <button onclick="rightAnswer(0)">${myLine[0]}</button>
            <button onclick="rightAnswer(1)">${myLine[1]}</button>
            <button onclick="rightAnswer(2)">${myLine[2]}</button>
            </td>
        </tr>
        <div>${currentBuddy.name}<img src='${currentBuddy.img}'></div>
        `;
    return encounters;
}


function drivePass() {
    encounters = '';
    return selectEncounterType();
}

function rightAnswer(chosenLine){
    let randomNumber = randomizer(3);
    let winnerNumber = 2;
    if (randomNumber === winnerNumber && coolness > 90) {
        encounters = /*HTML*/`
        <tr>
        <td>${buddyLine[1]}</td>
        <td>Gratulerer! Du kan ikke bli noe kulere enn dette!</td>
        </tr>
        <div>${currentBuddy.name}<img src=${currentBuddy.img}></div>
        `;
    }else{
        encounters = /*HTML*/`
        <tr>
        <td>${buddyLine[0]}</td>
        <button onclick="drivePass()">Kjør videre</button>
        </tr>
        <div>${currentBuddy.name}<img src=${currentBuddy.img}></div>
        `;
        return encounters;
      }
}