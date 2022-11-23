//Model
let html = document.getElementById(`app`);
const car = `<img src="img/bil2.png"/>`;
const enemies = [
    { name: 'bestemor', img: "img/granny.png" },
    { name: 'Per', img: "img/man_with_gun.png" },
    { name: 'ekorn', img: "img/squirrel.png" },
];
//TODO skrive array med random encounter text. 
//TODO fikse css med plassering av tingene
//TODO 

const bil = {
    spoiler: undefined,
    splitter: undefined,
    skjort: undefined,
    defuser: undefined,
    panser: undefined,
    felger: undefined,
    eksos: undefined,
    motor: undefined,
};

//TODO upgrades til array og samle arraysa i ett samle array
//eksempel const spiler = [{name: 'Wings of Fury', coolness: 9001}]
// samleArr[random1][samleArr[random2(random1(samleArr[random1].length))]]

const spoiler = [{ name: 'Wings of Fury', coolness: 9001 }, { name: 'limp dick', coolness: -30 },]
const splitter = [{ name: 'kae', coolness: 35 }, { name: 'test1', coolness: 0 },]
const skjort = [{ name: 'loooooow ride', coolness: 50 }, { name: 'test2', coolness: 0 },]
const defuser = [{ name: 'tail tale', coolness: 15 }, { name: 'teast3', coolness: 0 },]
const panser = [{ name: 'teast4', coolness: 0 }, { name: 'teast5', coolness: 0 },]
const felger = [{ name: 'teast6', coolness: 0 }, { name: 'teast7', coolness: 0 },]
const eksos = [{ name: 'teast8', coolness: 0 }, { name: 'teast9', coolness: 0 }, { name: 'teast10', coolness: 0 },]
const motor = [{ name: 'I4', coolness: 0 }, { name: 'I3', coolness: 3 }, { name: 'V8', coolness: 5700 },]

const upgrades = [spoiler, splitter, skjort, defuser, panser, felger, eksos, motor]


    //View

    view()
function view() {
    html.innerHTML = /*HTML*/`
    <h1>Broom broom spill</h1>
    <div class="carImg">${car}</div>
    <table>
        <tr>
            <td>Coolmeter</td>
            <td><progress value="0" min="0" max="100"></progress></td>
        </tr>
        <tr>
            <td>Life</td>
            <td><progress value="0" min="0" max="100"></progress></td>
        </tr>
    </table>
    `;
}


//Controller
function randomizer(num) {
    let getRandom = Math.floor(Math.random() * num);
    return getRandom;
}

//TODO få en tilfeldig komponent, funksjonen skal returnere objektet som innholder komponenten
function getRandomComponent() {

    
    return //objektet
}

//TODO møter man på en komponent eller en "finende"
functionget

//testFunksjon()