//Model
let html = document.getElementById(`app`);
const car = `<img src="img/bil2.png"/>`;
const enemies = [
    { name: 'bestemor', img: "img/granny.png" },
    { name: 'Per', img: "img/man_with_gun.png" },
    { name: 'ekorn', img: "img/squirrel.png" },

];

const bil = {
    spoiler: '',
    splitter: '',
    skjørt: '',
    defuser: '',
    panser: '',
    felger: '',
    eksos: '',
    motor: '',
};

const upgrades = {
    spoiler: [
        { name: 'Wings of Fury', coolness: 9001 },
        { name: 'limp dick', coolness: -30 }
    ],
    splitter: [
        { name: 'kae', coolness: 35 },
        { name: 'test1', coolness: 0 },
    ],
    skjørt: [
        { name: 'loooooow ride', coolness: 50 },
        { name: 'test2', coolness: 0 },
    ],
    defuser: [
        { name: 'tail tale', coolness: 15 },
        { name: 'teast3', coolness: 0 },
    ],
    panser: [
        { name: 'teast4', coolness: 0 },
        { name: 'teast5', coolness: 0 },
    ],
    felger: [
        { name: 'teast6', coolness: 0 },
        { name: 'teast7', coolness: 0 },

    ],
    eksos: [
        { name: 'teast8', coolness: 0 },
        { name: 'teast9', coolness: 0 },
        { name: 'teast10', coolness: 0 },

    ],
    motor: [
        { name: 'teast11', coolness: 0 },
        { name: 'teast12', coolness: 0 },
        { name: 'teast13', coolness: 0 },

    ],
}

//View

view()
function view() {
    html.innerHTML = /*HTML*/`
    <h1>Broom broom spill</h1>
    <div>${car}</div>
    <div>Coolmeter
        <progress value="0" min="0" max="100"></progress>
    </div>
    <div>Life
        <progress value="0" min="0" max="100"></progress>
    </div>
    `;
}


//Controller
function randomizer(num) {
    let getRandom = Math.floor(Math.random() * num);
    return getRandom;
}

function encounter() {
    //velg finde eller upgrade
    // hvis upgrade

    //finne kategori
    let randomCategory = randomizer(Object.keys(upgrades).length)

    let lateI = 0
    for (const [key, value] of Object.entries(upgrades)) {
        lateI++ 
        
        console.log("key er",key, "value er",value[lateI]);
    }

}
encounter()
const test = {
    lol: "asdf"
}
function testFunksjon() {
    for (const [key, value] of Object.entries(upgrades)) {
        console.log(value[0]);
        test.key = value
    }
    console.log("asdf",test)
}

//testFunksjon()