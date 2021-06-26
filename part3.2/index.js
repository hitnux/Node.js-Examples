const fs = require('fs');

let fileName = 'employees.json';
let obj = {
    0: {"name": "Employee 1 Name", "salary": 2000}
};
//delete
function deleteFile(){
    fs.unlink(fileName, (err) => {
        if(err) console.log(err);
        console.log('Silindi.');
    });
}
//update
function updateFile(fileData, newData){
    jsonData = JSON.parse(fileData);
    jsonData[1] = newData;
    // eski datayı okuyup tamamen değiştirdiğimiz için append değil write
    fs.writeFile(fileName, JSON.stringify(jsonData), 'utf8', (err) => {
        if(err) console.log(err);
        console.log('Güncellendi.');
        deleteFile();
    }); 
}
//read
function readFile(){
    fs.readFile(fileName, 'utf8', (err, data) => {
        if(err) console.log(err);
        console.log('Veri:\n'+data);
        updateFile(data, {"name": "Employee 2 Name", "salary": 3500});
    }); 
}
//create
fs.writeFile(fileName, JSON.stringify(obj), 'utf8', (err) => {
    if(err) console.log(err);
    console.log('Dosya oluşturuldu');
    readFile();
});
