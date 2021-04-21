const verb = document.getElementById('verb');
const tense = document.getElementById('tense');
const a_aff_1 = document.getElementById('a_aff_1');
const a_neg_1 = document.getElementById('a_neg_1');
const a_int_1 = document.getElementById('a_int_1');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');


const tenses = ['PresentSimple', 'PastSimple', 'FutureSimple'];


async function update() {
    const csv = await fetch('./verbs/verbs.csv');
    const csvVerbs = await csv.text();
    const verbRandom = csvVerbs.split(",").slice(1);

    let numVerbs = Math.floor(Math.random() * verbRandom.length);
    verb.textContent = verbRandom[numVerbs];

    let numTenses = Math.floor(Math.random() * tenses.length);
    tense.textContent = tenses[numTenses];
    
};



async function check() {
    const file = await fetch(`./verbs/${tense.textContent}.json`);
    const fileJson = await file.json();

    console.log(verb.textContent)
    console.log(fileJson[`${verb.textContent}`])

    const chosenVerb = fileJson[`${verb.textContent}`];

    const regex = /[?]/g;

    result1.textContent = a_aff_1.value.trimEnd() === chosenVerb.a_aff_1 ? 'good' : 'bad';
    result2.textContent = a_neg_1.value.trimEnd() === chosenVerb.a_neg_1 ? 'good' : 'bad';
    result3.textContent = a_int_1.value.trimEnd().replace(regex, '') === chosenVerb.a_int_1 ? 'good' : 'bad';
}


// Affirmative
// function makeTask() {
//     const form = document.querySelector('.inputs');
//     const div1 = document.createElement('div');
//     const div2 = document.createElement('div');
//     const input = document.createElement('input');
//     const p = document.createElement('p');
    
//     div2.appendChild(p);
//     div2.appendChild(input);
//     div1.appendChild(div2)
    
//     form.appendChild(div1);
// }


// makeTask();