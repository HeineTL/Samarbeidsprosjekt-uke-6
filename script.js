//Model
let html = document.getElementById(`app`);
const car = `<img src="img/longcat.png"/>`;
const enemies = [
    {name: 'bestemor', img: `>`},
    {name: 'Per', img: "img/bil2.png"}, 
    {name: 'Per', img: "img/bil2.png"},
    
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
        {name: 'Wings of Fury', coolness: 9001},
        {name: 'limp dick', coolness: -30}
    ],
    splitter: [
        {name: 'kae', coolness: 35},
        {name: 'test1', coolness: 0},
    ],
    skjørt: [
        {name: 'loooooow ride', coolness: 50},
        {name: 'test2', coolness: 0},
    ],
    defuser: [
        {name: 'tail tale', coolness: 15},
        {name: 'teast3', coolness: 0},
    ],
    panser: [
        {name: 'teast4', coolness: 0},
        {name: 'teast5', coolness: 0},
    ],
    felger: [
        {name: 'teast6', coolness: 0},
        {name: 'teast7', coolness: 0},
        
    ],
    eksos: [
        {name: 'teast8', coolness: 0},
        {name: 'teast9', coolness: 0},
        {name: 'teast10', coolness: 0},
        
    ],
    motor: [
        {name: 'teast11', coolness: 0},
        {name: 'teast12', coolness: 0},
        {name: 'teast13', coolness: 0},
        
    ],
}

//View

view()
function view(){
    html.innerHTML = /*HTML*/`
    <h1>Broom broom spill</h1>
    <div>${car}</div>
    <progress value="0" min="0" max="100"></progress>
    `;
}


//Controller
function randomizer(num){
    let getRandom = Math.floor(Math.random() * num);
    return getRandom;
}

function encounter(){
    //velg finde eller upgrade
    // hvis upgrade
    
    //finne kategori
    let randomCategory = 0 //randomizer(Object.keys(upgrades).length)
    for (let i = 0; i < Object.keys(upgrades).length; i++) {
        let arrayIndex = Object.keys(upgrades);
        if (i == randomCategory) {
            console.log(arrayIndex[i])
            let randomPart = randomizer(Object.keys(upgrades).length)
            for (let j = 0; j < arrayIndex[i].length; j++){
                if (j == randomPart) {
                    console.log(arrayIndex[i][j])
                }
            }
        }
    }
        
}
encounter()