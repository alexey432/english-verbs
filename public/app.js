const verb = document.getElementById('verb');
const tense = document.getElementById('tense');
const a_aff_1 = document.querySelector('.a_aff_1');
const a_neg_1 = document.querySelector('.a_neg_1');
const a_int_1 = document.querySelector('.a_int_1');
const a_aff_2 = document.querySelector('.a_aff_2');
const a_neg_2 = document.querySelector('.a_neg_2');
const a_int_2 = document.querySelector('.a_int_2');
const a_aff_3 = document.querySelector('.a_aff_3');
const a_neg_3 = document.querySelector('.a_neg_3');
const a_int_3 = document.querySelector('.a_int_3');

const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');
const result5 = document.getElementById('result5');
const result6 = document.getElementById('result6');
const result7 = document.getElementById('result7');
const result8 = document.getElementById('result8');
const result9 = document.getElementById('result9');


const tenses = ['PresentSimple', 'PastSimple', 'FutureSimple'];
const progress = document.querySelector('.progress-bar');

let nnn = 0;

let writingArr = ['', '', '', '', '', '', '', '', '']
const inputtik1 = document.querySelector('.inputtik1');
const inputtik2 = document.querySelector('.inputtik2');
const inputtik3 = document.querySelector('.inputtik3');
const inputtik4 = document.querySelector('.inputtik4');
const inputtik5 = document.querySelector('.inputtik5');
const inputtik6 = document.querySelector('.inputtik6');
const inputtik7 = document.querySelector('.inputtik7');
const inputtik8 = document.querySelector('.inputtik8');
const inputtik9 = document.querySelector('.inputtik9');

inputtik1.addEventListener('change', () => piska(inputtik1, 0));
inputtik2.addEventListener('change', () => piska(inputtik2, 1));
inputtik3.addEventListener('change', () => piska(inputtik3, 2));
inputtik4.addEventListener('change', () => piska(inputtik4, 3));
inputtik5.addEventListener('change', () => piska(inputtik5, 4));
inputtik6.addEventListener('change', () => piska(inputtik6, 5));
inputtik7.addEventListener('change', () => piska(inputtik7, 6));
inputtik8.addEventListener('change', () => piska(inputtik8, 7));
inputtik9.addEventListener('change', () => piska(inputtik9, 8));


function piska(inputtik, numWritingArr) {
    if(inputtik.value != '' && writingArr[numWritingArr] == '') {
        writingArr[numWritingArr] = inputtik.value;
        nnn += Math.floor(1/9*100);
    } else if (inputtik.value == '') {
        nnn -= Math.floor(1/9*100);
        writingArr[numWritingArr] = '';
    }
    progress.style = `width: ${nnn}%;`;
};




    




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
    result4.textContent = a_aff_2.value.trimEnd() === chosenVerb.a_aff_2 ? 'good' : 'bad';
    result5.textContent = a_neg_2.value.trimEnd() === chosenVerb.a_neg_2 ? 'good' : 'bad';
    result6.textContent = a_int_2.value.trimEnd().replace(regex, '') === chosenVerb.a_int_2 ? 'good' : 'bad';
    result7.textContent = a_aff_3.value.trimEnd() === chosenVerb.a_aff_3 ? 'good' : 'bad';
    result8.textContent = a_neg_3.value.trimEnd() === chosenVerb.a_neg_3 ? 'good' : 'bad';
    result9.textContent = a_int_3.value.trimEnd().replace(regex, '') === chosenVerb.a_int_3 ? 'good' : 'bad';
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