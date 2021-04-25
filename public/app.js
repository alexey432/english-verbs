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

const resultsArr = [result1, result2, result3, result4, result5, result6, result7, result8, result9];

const tenses = ['PresentSimple', 'PastSimple', 'FutureSimple'];
const progress = document.querySelector('.bar-difficult');
const progressEasy = document.querySelector('.bar-easy');

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
    progress.style = `width: ${nnn > 95 ? 100 : nnn}%;`;
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

    // console.log(verb.textContent)
    // console.log(fileJson[`${verb.textContent}`])

    const chosenVerb = fileJson[`${verb.textContent}`];

    // const regexArr = [a_aff_1, a_neg_1, a_int_1, a_aff_2, a_neg_2, a_int_2, a_aff_3, a_neg_3, a_int_3];
    const regexNegArr = [a_neg_1, a_neg_2, a_neg_3];
    const pronouns = ['I ','i ', 'you ', 'he ', 'she ', 'it ', 'they ', 'we '];


    const regex = /[?]/g;
    const regexNeg = /n+'+t/gm;
    const regexFuture = /won't/g;
    const regexAm = /'m not/g;
    const regexPronouns = new RegExp(pronouns.join('|'), 'g');

    let neg_1,
        neg_2,
        neg_3;

    // Negative
    if(tense.textContent == tenses[0] || tense.textContent == tenses[1]){
        neg_1 = a_neg_1.value.replace(regexNeg, ' not');
        neg_2 = a_neg_2.value.replace(regexNeg, ' not');
        neg_3 = a_neg_3.value.replace(regexNeg, ' not');
    } else if(tense.textContent == tenses[2]){
        neg_1 = a_neg_1.value.replace(regexFuture, 'will not');
        neg_2 = a_neg_2.value.replace(regexFuture, 'will not');
        neg_3 = a_neg_3.value.replace(regexFuture, 'will not');
    }

    // console.log(a_aff_1.value.toLowerCase().replace(regexPronouns, ''))

    result1.textContent = a_aff_1.value.trim().toLowerCase().replace(regexPronouns, '').trim() === chosenVerb.a_aff_1.toLowerCase() ? 'good' : chosenVerb.a_aff_1;
    result2.textContent = neg_1.trim().toLowerCase().replace(regexPronouns, '').trim() === chosenVerb.a_neg_1.toLowerCase() ? 'good' : chosenVerb.a_neg_1;
    result3.textContent = a_int_1.value.trim().replace(regex, '').toLowerCase().trim() === chosenVerb.a_int_1.toLowerCase() ? 'good' : chosenVerb.a_int_1;
    result4.textContent = a_aff_2.value.trim().toLowerCase().replace(regexPronouns, '').trim() === chosenVerb.a_aff_2.toLowerCase() ? 'good' : chosenVerb.a_aff_2;
    result5.textContent = neg_2.trim().toLowerCase().replace(regexPronouns, '').trim() === chosenVerb.a_neg_2.toLowerCase() ? 'good' : chosenVerb.a_neg_2;
    result6.textContent = a_int_2.value.trim().replace(regex, '').toLowerCase().trim() === chosenVerb.a_int_2.toLowerCase() ? 'good' : chosenVerb.a_int_2;
    result7.textContent = a_aff_3.value.trim().toLowerCase().replace(regexPronouns, '').trim() === chosenVerb.a_aff_3.toLowerCase() ? 'good' : chosenVerb.a_aff_3;
    result8.textContent = neg_3.trim().toLowerCase().replace(regexPronouns, '').trim() === chosenVerb.a_neg_3.toLowerCase() ? 'good' : chosenVerb.a_neg_3;
    result9.textContent = a_int_3.value.trim().replace(regex, '').toLowerCase().trim() === chosenVerb.a_int_3.toLowerCase() ? 'good' : chosenVerb.a_int_3;
    
    result1.textContent === 'good' ? result1.style = 'color: green;' : result1.style = 'color: red;';
    result2.textContent === 'good' ? result2.style = 'color: green;' : result2.style = 'color: red;';
    result3.textContent === 'good' ? result3.style = 'color: green;' : result3.style = 'color: red;';
    result4.textContent === 'good' ? result4.style = 'color: green;' : result4.style = 'color: red;';
    result5.textContent === 'good' ? result5.style = 'color: green;' : result5.style = 'color: red;';
    result6.textContent === 'good' ? result6.style = 'color: green;' : result6.style = 'color: red;';
    result7.textContent === 'good' ? result7.style = 'color: green;' : result7.style = 'color: red;';
    result8.textContent === 'good' ? result8.style = 'color: green;' : result8.style = 'color: red;';
    result9.textContent === 'good' ? result9.style = 'color: green;' : result9.style = 'color: red;';

    // Progress Bar-easy
    let n = 0;
    resultsArr.forEach(result => {
        if(result.textContent == 'good') {
            n+= 1/9;
        }
    })
    // console.log(n*100);
    progressEasy.style = `width: ${n*100}%;`;
    
    if(n*100 >= 100){
        document.querySelector('.bar-final').style = 'color: green';
        document.querySelector('.bar-final').textContent = 'Excellent !!!';
    }
}