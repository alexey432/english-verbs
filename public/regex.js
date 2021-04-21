// const string = 'my name is alex';
// const regex = /name is ([a-z]+)/;
// const match = regex.exec(string);
// if(match) {
//     const name = match;
//     console.log(name)
// } else {
//     console.log('nope');
// }

const paragraph = ['abash', 'work', 'make', 'wash','bless','watch','catch','match','do','go','learn','like'];
const regex = /sh(?!\\S)|ch(?!\\S)|s(?!\\S)/g;

for(i=0;i<paragraph.length;i++){
    if(paragraph[i].match(regex)){
        console.log(`${paragraph[i]}es`)
        // paragraph.splice(i,i,`${paragraph[i]}es`)
        //doesn't work yet...
    }
}


// console.log('Стало:', paragraph)
