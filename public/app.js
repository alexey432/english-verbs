// async function postDataToDatabase(){
//     const data = {new: '123'};
//     const options = {
//         method:'POST',
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(data)
//     };
//     await fetch('/asd', options);
// };

async function update() {
    // const response = await fetch('/asd');
    // const all = await response.json();

    // console.log(all)

    const csv = await fetch('./verbs.csv');
    const data = await csv.text();
    const verbRandom = data.split(",").slice(1);

    let num = Math.floor(Math.random() * verbRandom.length);
    console.log(verbRandom[num])
    verb.textContent = verbRandom[num];
};

const verb = document.getElementById('verb');
const a_aff_1 = document.getElementById('a_aff_1');
const a_neg_1 = document.getElementById('a_neg_1');
const a_int_1 = document.getElementById('a_int_1');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');



async function check() {
    // const response = await fetch('/asd');
    // const all = await response.json();

   

    const file = await fetch('./verbs.json');
    const fileJson = await file.json();
    // sdasdasda
    // let num = Math.floor(Math.random() * 3);

    console.log(verb.textContent)
    console.log(fileJson[`${verb.textContent}`])

    result1.textContent = a_aff_1.value === fileJson[`${verb.textContent}`].a_aff_1 ? 'good' : 'bad';
    result2.textContent = a_neg_1.value === fileJson[`${verb.textContent}`].a_neg_1 ? 'good' : 'bad';
    result3.textContent = a_int_1.value === fileJson[`${verb.textContent}`].a_int_1 ? 'good' : 'bad';
}
