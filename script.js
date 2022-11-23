//Model
let html = document.getElementById(`app`);
const car = `<img src="img/bil2.png"/>`;

const enemies = [
    { name: 'Bestemor', img: "img/granny.png" },
    { name: 'Trump', img: "img/man_with_gun.png" },
    { name: 'Ekornet', img: "img/squirrel.png" }
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
    { name: 'Eskil', img: "img/man.png" },
    { name: 'Geir', img: "img/man.png" },
    { name: 'Terje', img: "img/man.png" }
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

const bil = {
    spoiler: undefined,
    splitter: undefined,
    skjort: undefined,
    defuser: undefined,
    panser: { name: 'hull for luft', coolness: 30},
    felger: { name: 'rusten stålfelg', coolness: 1 },
    eksos: { name: 'Stock', coolness: 0 },
    motor: { name: 'I4', coolness: 0 },
};
//max coolness stats = 12.5 per bildel

//TODO upgrades til array og samle arraysa i ett samle array
//eksempel const spoiler = [{name: 'Wings of Fury', coolness: 9001}]
// samleArr[random1][samleArr[random2(random1(samleArr[random1].length))]]

const spoiler = [{ name: 'limp dick', coolness: -30 }, { name: 'wings of fury', coolness: 9001 }, ]
const splitter = [{ name: 'finer plate', coolness: 35 }, { name: 'test1', coolness: 0 },]
const skjort = [{ name: 'loooooow ride', coolness: 50 }, { name: 'fartshumpskraper', coolness: 42 },]
const defuser = [{ name: 'tail tale', coolness: 15 }, { name: 'tail gate', coolness: 66 },]
const panser = [{ name: 'hull for luft', coolness: 30 }, { name: 'heftig luftinntak', coolness: 666 }, { name: 'halvmeter høy dings som du ser ventiler beveger seg', coolness: 6000 },]
const felger = [{ name: 'rusten stålfelg', coolness: 1 }, { name: 'hjulkapsler', coolness: 10 }, { name: 'lavprofil', coolness: 1000 }, { name: 'spinners med neon', coolness: 9001 },]
const eksos = [{ name: 'Stock', coolness: 0 }, { name: 'Flow Master', coolness: 0 }, { name: 'Cherry bomb', coolness: 0 }, { name: 'Custom titan', coolness: 0 },]
const motor = [{ name: 'I4', coolness: 0 }, { name: 'I3', coolness: 3 }, { name: 'V8', coolness: 5700 }, { name: 'W16', coolness: 9001 }]

const upgrades = [spoiler, splitter, skjort, defuser, panser, felger, eksos, motor]

const startMenu = document.getElementById("startMenu");
let deadGrandmas = 0;
let coolness = 0;
let life = 100;
//View

view()
function view() {
    html.innerHTML = /*HTML*/`
    <div class="sign">
        <h1>Broom broom spill</h1>
        <div class="inner-stats">
        <div class="left">
            <div class="stats">
                <p>Spoiler: ${bil.spoiler}</p>
                <p>Splitter: GJØR NOE</p>
                <p>Skjørt: GJØR NOE</p>
            </div>
        </div>
        <div class="right">
                <table>
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
        </div>
    </div>
    <div class="carImg">${car}</div>
    `;
}

function clickStart() {
    document.getElementById('startMenu').style.display='none';
}


//Controller
function randomizer(num) {
    let getRandom = Math.floor(Math.random() * num);
    return getRandom;
}

//TODO få en tilfeldig komponent, funksjonen skal returnere objektet som innholder komponenten
function selectRandomComponent() {
    let getPart1 = randomizer(upgrades.length);
    let getpart2 = randomizer(upgrades[getPart1].length);
    currentEncounter = upgrades[getPart1][getpart2]; //"output" skal være ett objekt
    console.log('test upgrades', currentEncounter);
}

//TODO velger finede
function selectRandomEnemy() {
    let enemy = enemies[randomizer(enemies.length)];
    currentEncounter = enemy;
}

//TODO velger tilfeldig kompis
function selectRandomBuddy() {
    currentBuddy = buddies[randomizer(buddies.length)]
}

//TODO møter man på en komponent eller en "finende" eller kompisen
function selectEncounterType() {
    let percent = randomizer(10) + 1;
    if (percent <= 2) {
        selectRandomComponent()
    } else if (percent <= 7) {
        selectRandomBuddy()
    } else {
        selectRandomEnemy()
    }
}
//TODO hente currentUpgrades


//testFunksjon()
