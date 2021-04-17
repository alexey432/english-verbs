// const { GoogleSpreadsheet } = require('google-spreadsheet');

// const doc = new GoogleSpreadsheet('1ZBGfDl8v0lSYxa9q_U86RSuQ2Xdfx3lN5CErfeXFUpo');

// const creds = require('./english-verbs-310608-dcbff6873d9d.json');

// module.exports = async function() {

//     await doc.useServiceAccountAuth(creds);
//     await doc.loadInfo();
//     const sheet = doc.sheetsByIndex[0];
//     await sheet.loadCells('A1:E10');
//     const a1 = sheet.getCellByA1('A1');
    
//     console.log(a1.value)
    
//     return a1.value;
//     // console.log(sheet.getCell(1,1).value);

// };